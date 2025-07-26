const express = require('express');
const path = require('path');

const app = express();

// ✅ Set the view engine to EJS
app.set('view engine', 'ejs');

// ✅ Set the views directory
app.set('views', path.join(__dirname, 'view'));  // folder should be named 'view' or 'views'

// ✅ Sample product data
const products = [
    { id: 1, title: 'Product 1' },
    { id: 2, title: 'Product 2' },
    { id: 3, title: 'Product 3' },
    { id: 4, title: 'Product 4' },
];

// ✅ Home Route - Render 'home.ejs'
app.get('/', (req, res) => {
    res.render('home', { title: 'Home', products: products });
});

// ✅ About Route - Render 'about.ejs'
app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page' });
});

// ✅ Start Server
app.listen(3005, () => {
    console.log('Server running on http://localhost:3005');
});
