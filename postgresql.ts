const { Client } = require('pg');

const client = new Client({
    user: 'wendy',
    host: '34.64.247.45',
    database: 'wendy',
    password: 'wendy1113',
    port: 5432
})

Client.connect();

client.query('select now()', (err: any, res: any) => {
    console.log('err:: ', err);
    console.log('res:: ', res);
    client.end();
})