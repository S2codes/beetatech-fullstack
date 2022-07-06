const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const path = require('path')
const hbs = require('hbs')

app.use(express.static(path.join(__dirname, 'public') ))
app.set('view engine', 'hbs');
app.set('views', 'views')

app.get("/", (req, res) => {
    res.render('')
})


app.listen(PORT, () => {
    console.log('listin at 8000');
})