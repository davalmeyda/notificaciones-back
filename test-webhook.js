// Script de prueba para el webhook
const http = require('http');

const data = JSON.stringify({
  titulo: 'Prueba de Notificación',
  descripcion: 'Esta es una notificación de prueba desde el script. Deberías escuchar un sonido de aeropuerto seguido de esta voz.',
});

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/webhook/notification',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
  },
};

const req = http.request(options, (res) => {
  console.log(`✅ Status: ${res.statusCode}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`📝 Response: ${chunk}`);
  });
});

req.on('error', (e) => {
  console.error(`💥 Error: ${e.message}`);
});

req.write(data);
req.end();

console.log('🚀 Webhook enviado - revisa la app Flutter para escuchar la notificación');
