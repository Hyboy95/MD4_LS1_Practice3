const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

const products = [
    {
    title: 'iphone 14',
    src: 'images/iphone.jpg'
    },
    {
    title: 'oppo',
    src: 'images/oppo.png'
    },
    {
    title: 'samsung',
    src: 'images/samsung.jpg'
    },
    {
    title: 'xiaomi',
    src: 'images/xiaomi.jpg'
    }
   ];

app.get('/', ((req, res) => {
    res.render('home', {data: products});
}))

app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`)
   });