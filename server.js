const express = require('express')
const mongoose = require('mongoose')
const Article = require('./modele/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const app = express()


mongoose.connect('mongodb://localhost/blog' )

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended:false }))
app.use(methodOverride('_method'))


app.get('/', async (req, res) => {
    const articles = await Article.find().sort({creatLa: 'desc'})
    res.render('articles/index', { articles: articles })
})

app.listen(3000)

app.use('/articles', articleRouter)