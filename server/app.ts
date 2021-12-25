import schema from "./schema/schema";

const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP

const app = express();


app.use('/cashy-server', expressGraphQL({
  schema
}));


app.listen(4001, () => {
  console.log('Cashy Server Now Running On localhost:4001/cashy-server')
});