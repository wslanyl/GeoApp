require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Importação do Model (Certifique-se que o arquivo models/Place.js existe)
const Place = require('./models/Place');

const app = express();
const PORT = 3000;

// Configuração da conexão com o Banco (Hardcoded para evitar erro de .env)
const MONGO_URI = 'mongodb+srv://anawslanylima_db_user:c6xZpGc1KkLwd8Eb@cluster0.ijc4fh7.mongodb.net/?appName=Cluster0';

app.use(cors());
// Aumento do limite para aceitar fotos em Base64
app.use(express.json({ limit: '10mb' }));

// Healthcheck
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Geo Backend API rodando!' });
});

// Listar lugares
app.get('/api/places', async (req, res) => {
  try {
    const places = await Place.find().sort({ createdAt: -1 });
    res.json(places);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao listar registros' });
  }
});

// Criar novo lugar
app.post('/api/places', async (req, res) => {
  try {
    const { title, description, latitude, longitude, photo } = req.body;

    if (!title || !description || latitude == null || longitude == null) {
      return res.status(400).json({ error: 'Campos obrigatórios faltando' });
    }

    const place = new Place({
      title,
      description,
      latitude,
      longitude,
      photo: photo || null,
    });

    await place.save();
    res.status(201).json(place);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao salvar registro' });
  }
});

// Conexão e Inicialização
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB conectado com sucesso!');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Erro ao conectar no MongoDB:', err);
  });