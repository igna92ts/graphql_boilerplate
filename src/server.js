import express from 'express'
import gralqlHTTP from 'express-graphql'
import mongoose from 'mongoose'

import schema from './graphql'

var app = express();
app.use('/graphiql',express.static(__dirname + '/graphiql.html'))
app.use('/graphiql.js',express.static(__dirname + '/graphiql.js'))
app.use('/graphiql.css',express.static(__dirname + '/graphiql.css'))

app.use('/',gralqlHTTP(req => ({
    schema:schema,
    pretty:true
})));




mongoose.connect('mongodb://localhost/inaba')

var server = app.listen(8080,() => {
    console.log('listening port ', server.address().port)
});

export default server;