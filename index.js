'use strict'

// const { buildSchema } = require('graphql')
const { makeExecutableSchema } = require('graphql-tools')
const express = require('express')
const gqlMiddleware = require('express-graphql')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')

const app = express()
const port = process.env.port || 3000

// defiiniendo schema inicial

// const schema = buildSchema(
//   readFileSync(
//     join(__dirname,'lib', 'schema.graphql'),
//     'utf-8'
//   )
// )

const typeDefs =  readFileSync(
    join(__dirname,'lib', 'schema.graphql'),
    'utf-8'
  )
const schema = makeExecutableSchema({ typeDefs, resolvers})

// configurar los resolvers

// Ejecutar el qauery hello
// graphql(schema, '{ saludo }', resolvers).then((data) =>  {
//   console.log(data);
// })

app.use('/api', gqlMiddleware({
  schema: schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}/api`)
})
