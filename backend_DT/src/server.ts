// The next line gets a express from node_modules/express:
// const express = require('express'); // common JS.
// Now we can use the import using ESModule, this characteristic was enable in the file package.json:
import express from 'express';
import router from './router';

const app = express();

// Read data sent since form or postman:
app.use(express.json());

app.use('/', router);

export default app;