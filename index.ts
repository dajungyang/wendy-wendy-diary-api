import express from 'express';

const app = express();
const PORT = 3003;

app.get('/', (req, res) => res.send('Wendy Wendy Diary API'));
app.listen(PORT, () => {
    console.log(`server:: Server is running at http://localhost:${PORT}`);
})

const { Client } = require('pg');

const client = new Client({
    user: 'wendy',
    host: '34.64.247.45',
    database: 'wendy',
    password: 'wendy1113',
    port: 5432
})

client.connect();

client.query('select now()', (err: any, res: any) => {
    console.log(err, res);
    client.end();
})
