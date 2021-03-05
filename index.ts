import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql';
import express from 'express';
import client from "./postgresql";

const app = express();
const PORT = 3003;

app.get('/', (req, res) => res.send('Wendy Wendy Diary API'));

let schema = buildSchema(`
  type Query {
    hello: String
  }
`);
let root = { hello: () => 'Hello world!' };

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(PORT, () => {
    console.log(`server:: Server is running at http://localhost:${PORT}`);
});


const postgreSQL = client;
postgreSQL.connect();