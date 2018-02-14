import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: '5mb'}));
app.use(bodyParser.json({limit: '5mb'}));
// cross origin config
app.use(cors());

app.get('/api', (req, res) => res.send('Hello World!'));

app.listen(3001, () => console.log('http://localhost is listening on port 3001!'));