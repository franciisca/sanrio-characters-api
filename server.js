const express = require('express')
const app = express()
const PORT = 8000

const characters = {
    'hello kitty': {
        'characterName': 'Hello Kitty',
        'creationYear': 1974,
        'distinctiveFeatures': 'trademark red bow',
        },
    'keroppi': {
        'characterName': 'Keroppi',
        'creationYear': 1987,
        'distinctiveFeature': 'V-shaped mouth',
    },
    'kuromi': {
        'characterName': 'Kuromi',
        'creationYear': 2005,
        'distinctiveFeature': 'black jester\'s hat '
    },
    'unknown': {
        'characterName': 'unknown',
        'creationYear': 0,
        'distinctiveFeature': 'unknown',
    }
}


app.get('/', (request,response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response) =>{
    const characterName = request.params.name.toLowerCase()
    if (characters [characterName]){
        response.json(characters[characterName])
    }else {
        response.json(characters['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () =>{
    console.log(`The server is now running on ${PORT}.`);
})