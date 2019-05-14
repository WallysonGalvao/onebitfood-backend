// import express from 'express';
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);

mongoose.connect('mongodb+srv://onebitfood:onebitfood@cluster0-r9moy.mongodb.net/onebitfood?retryWrites=true',
    { useNewUrlParser: true });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

server.listen(process.env.PORT || 3333); 