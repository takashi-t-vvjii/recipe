const express = require('express');
const path = require('path');

const app = express();

// 'dist/アプリ名'を指定
app.use(express.static(path.join(__dirname, 'dist/recipe')));

// 'dist/アプリ名/index.html'を指定
app.get('/*', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'dist/recipe/index.html'));
});

app.listen(process.env.PORT || 8080);
