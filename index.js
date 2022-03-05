const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const exphbs = require('express-handlebars');
const todoRoutes = require('./routes/todos')

const PORT = process.env.PORT || 3000

const app = express('');
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname:'hbs'
})

app.engine('hbs',hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,'public')))

app.use(todoRoutes)


async function start() {
try {
    await mongoose.connect('mongodb+srv://MiguelRoudriges:1a2b3c4d5e@cluster0.y78g1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,

    })
    app.listen(PORT, () => {
        console.log('Успешное подключение к серверу!');
    })
} catch (error) {
    console.log(error)
}
}
start();



