const express = require('express');
const app = express();
const massive = require('massive');
const controller = require('./controller.js');
require('dotenv').config();

app.use(express.json());

const {SERVER_PORT, CONNECTION_STRING} = process.env;
console.log(CONNECTION_STRING, SERVER_PORT)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Connection to database successful')
})

//endpoints
app.get('/api/items', controller.getItems);
app.post('/api/item', controller.postItem);
app.put('/api/item', controller.updateItem);
app.delete('/api/item/:id', controller.deleteItem);

app.listen(SERVER_PORT, () => console.log(`Cleared for entry at port ${SERVER_PORT}`))