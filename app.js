const express = require('express')
const app = express()
const port = 3000

const user = {
    firstName: 'Tim',
    lastName: 'Cook',
    admin: true,
}

const posts = [
    {title: 'Title 1', body: 'Body 1' },
    {title: 'Title 2', body: 'Body 2' },
    {title: 'Title 3', body: 'Body 3' },
    {title: 'Title 4', body: 'Body 4' },
]

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', {user: user})
})

app.get('/articles', (req, res) => {
    res.render('articles', {articles: posts})
})



app.listen(port, () => console.log(`app listen on port ${port}`));