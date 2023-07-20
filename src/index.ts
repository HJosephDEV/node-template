// src/index.ts
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import 'module-alias/register';
import moduleAlias from 'module-alias';
import * as path from 'path';

moduleAlias.addAlias('@', path.join(__dirname, 'src'));

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
	console.log(`Servidor rodando em http://localhost:${port}`);
});
