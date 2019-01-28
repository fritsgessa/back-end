const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

var port = process.env.port || 2019
var app = express({defaultErrorHandler: false});

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'))

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'agantha',
    password : 'gessa1996',
    database : 'Moviebertasbih',
    port : 3306
});

//Home Page
app.get('/', (req,res) => {
    res.send("<h1><center>INI HOME PAGE</center></h1>")
})

//Manage Movie
app.get('/movies', (req,res) => {
    var sql = 'SELECT * from movies;'
    conn.query(sql,(err,results) => {
        console.log(results)
        res.send(results);
    })
})

//Manage Categories
app.get('/categories', (req,res) => {
    var sql = 'SELECT * from categories;'
    conn.query(sql,(err,results) => {
        console.log(results)
        res.send(results);
    })
})



app.get('/getlistmovies', (req,res) => {
    var sql =  `SELECT 
                    mo.nama_movies AS NamaMovies, 
                    ca.nama_categories AS NamaCategories,
                    mo.tahun_movies AS TahunMovies
                    FROM categories ca
                    JOIN movcat mc ON mc.id_categories = ca.id_categories
                    JOIN movies fi ON ko.id_movies = mo.id_movies
                    WHERE ca.nama_categories LIKE 'horror';`;
    conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
    });
});

app.put('/editmovies/:id', (req,res) => {
    var data = req.body;
    var sql = `UPDATE movies SET ? WHERE id_movies = ${req.params.id};`
    conn.query(sql, data, (err, results) => {
        if(err) throw err;
        res.send(results);
    });
});

app.delete('/deletemovies/:id', (req,res) => {
    var sql = `DELETE FROM movies WHERE id_movies = ${req.params.id}`;
    conn.query(sql, (err,results) => {
        if(err) throw err;
        res.send(results);
    });
});


app.listen(port, () => console.log('API AKTIF DI PORT ' + port))