const express = require('express');
const app = express();
import http from 'http';


import dotenv from 'dotenv';
dotenv.config();

app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`SERVER running on http://localhost:${PORT}`));

app.get(`https://api.geoapify.com/v1/geocode/search?text=${this.startLocation}&apiKey=${process.env.GEO_KEY}`, (req, res) => {
    
});

app.get(
    `https://api.geoapify.com/v1/geocode/search?text=${this.startLocation}&apiKey=${process.env.GEO_KEY}`,
    
)