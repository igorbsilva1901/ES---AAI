const { Client } = require('pg');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Configuração do banco de dados
const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });       

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Função para buscar registros do banco de dados
async function fetchRecords() {
  await client.connect();
  const res = await client.query('SELECT * FROM register');
  await client.end();
  return res.rows;
}

// Função para enviar e-mail
async function sendEmail(records) {
  const emailContent = records.map(record => JSON.stringify(record)).join('\n');

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: 'Relatório Diário de Registros',
    text: `Aqui estão os registros do dia:\n\n${emailContent}`,
  };

  await transporter.sendMail(mailOptions);
}

// Função principal
async function main() {
  try {
    const records = await fetchRecords();
    await sendEmail(records);
    console.log('Relatório enviado com sucesso.');
  } catch (error) {
    console.error('Erro ao enviar relatório:', error);
  }
}

// Agendar a execução diária às 23:59
const schedule = require('node-schedule');
schedule.scheduleJob('59 23 * * *', main);

// Executar a função principal imediatamente para teste
main();
