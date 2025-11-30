# 🌍 Geo App - Fullstack

Aplicativo mobile para registro de pontos de interesse georreferenciados. O usuário pode capturar sua localização atual, tirar uma foto do local e salvar as informações em um banco de dados na nuvem.

## 🚀 Tecnologias Utilizadas

### Mobile (Frontend)
- **React Native** (com Expo Framework)
- **TypeScript**
- **Expo Location** (Geolocalização)
- **Expo Image Picker** (Câmera)

### Server (Backend)
- **Node.js**
- **Express**
- **MongoDB Atlas** (Banco de dados na nuvem)
- **Mongoose** (Modelagem de dados)

---

## 📂 Estrutura do Projeto

O projeto está dividido em duas pastas principais:
- `/backend`: API REST que gerencia os dados e conecta ao MongoDB.
- `/mobile`: Aplicativo React Native.

---

## 🛠️ Como Rodar o Projeto

Para o aplicativo funcionar, você precisa rodar o **Backend** e o **Mobile** simultaneamente em terminais diferentes.

### Pré-requisitos
- Node.js instalado.
- Conta no MongoDB Atlas (ou usar a string de conexão fornecida).
- App **Expo Go** instalado no celular (Android ou iOS).

### 1️⃣ Configurando o Backend

1. Abra um terminal e entre na pasta backend:
   ```bash
   cd backend


   Instale as dependências:

Bash

npm install
Inicie o servidor:

Bash

npm run dev
Você deve ver a mensagem: ✅ MongoDB conectado com sucesso! e 🚀 Servidor rodando na porta 3000.

2️⃣ Configurando o Mobile
Abra um segundo terminal e entre na pasta mobile:

Bash

cd mobile
Instale as dependências:

Bash

npx expo install
⚠️ Configuração de IP (Importante):

Descubra o IP do seu computador (ipconfig no Windows ou ifconfig no Linux/Mac).

Abra o arquivo mobile/App.tsx.

Na linha const API_URL, substitua pelo seu IP. Exemplo:

TypeScript

const API_URL = '[http://192.168.1.15:3000](http://192.168.1.15:3000)';
Inicie o Expo:

Bash

npx expo start
Escaneie o QR Code que aparecerá no terminal usando o aplicativo Expo Go no seu celular.

📡 Documentação da API
O backend roda na porta 3000 e possui as seguintes rotas:

GET /api/places
Retorna todos os lugares cadastrados (mais recentes primeiro).

POST /api/places
Cria um novo registro.

Corpo da Requisição (JSON):

JSON

{
  "title": "Praça Central",
  "description": "Uma praça muito bonita no centro da cidade.",
  "latitude": -8.0524,
  "longitude": -34.9211,
  "photo": "data:image/jpeg;base64,/9j/4AAQSkZJRg..." 
}
📱 Funcionalidades no App
Obter Localização: Captura a latitude e longitude exata do dispositivo.

Tirar Foto: Abre a câmera para registrar o local (salva em Base64).

Feed: Lista todos os locais salvos com foto, data e descrição.

Interface: Design moderno com cards estilo feed social.

📝 Autor
Desenvolvido como projeto de estudo Fullstack.


### Onde salvar esse arquivo?
1.  Vá na pasta principal `Geo-app`.
2.  Crie um arquivo chamado `README.md`.
3.  Cole o conteúdo acima.
