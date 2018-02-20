import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Routes from './app/routes';
import config from './app/config';

mongoose.connect(config.database); // connect to database

const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
app.use(bodyParser.json({ limit: '5mb' }));
// cross origin config
app.use(cors());

// logger
app.use(morgan(':method :url :req[header] :status :remote-user [:date[clf]] :res[content-length] - :response-time ms'));

/** Config routers */
Routes(app);

app.listen(3001, () => console.log('http://localhost is listening on port 3001!'));