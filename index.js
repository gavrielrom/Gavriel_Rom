const express = require('express');
const app = express();
const path = require('path');
const BodyParser = require('body-parser');
const sql = requier('./db/db');
const port = 3000;

app.use(express.static(path.join(__dirname,'static')));
app.use(BodyParser.urlencoded({extended:true}));
app.use(BodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/FontsAndImg'));

app.get('/static/Animals.css', (req,res)=>{
    res.set({'content-type': 'text/css'});
    res.sendFile(__dirname + '/static/Animals.css');
});

app.use(express.static(path.join(__dirname, 'views')));
app.get('/static/Animals.js', (req, res) => {
  res.set('Content-Type', 'application/javascript');
  res.sendFile(__dirname + '/static/Animals.js');
});

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/Views/HomePage.html')
})
app.get('/Views/Homepage.html', (req, res)=>{
  res.sendFile(__dirname + '/Views/HomePage.html')
})

app.get('/Views/CreateGame.html', (req, res)=>{
  res.sendFile(__dirname + '/Views/CreateGame.html')
})

app.get('/Views/JoinGame.html', (req, res)=>{
  res.sendFile(__dirname + '/Views/JoinGame.html')
})

app.get('/Views/CreateGroup.html', (req, res)=>{
  res.sendFile(__dirname + '/Views/CreateGroup.html')
})

app.get('/Views/WiningPage.html', (req, res)=>{
  res.sendFile(__dirname + '/Views/WiningPage.html')
})

app.get('/Views/TeamPage.html', (req, res)=>{
  res.sendFile(__dirname + '/Views/TeamPage.html')
})

app.get('/Views/AnimalList.html', (req, res)=>{
    res.sendFile(__dirname + '/Views/AnimalList.html')
})

app.listen(port, ()=>{
    console.log('server is running on port', port);
});

