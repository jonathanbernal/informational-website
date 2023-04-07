const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.redirect('/home')
});

app.get('/home', (req, res) => {
    res.sendFile(process.cwd() + '/public/index.html')
})

app.get('/about', (req, res) => {
    res.sendFile(process.cwd() + '/public/about.html');
})

app.get('/contact', (req, res) => {
    res.sendFile(process.cwd() + '/public/contact.html');
})

app.use((req, res, next) => {
    res.status(404).sendFile(process.cwd() + '/public/not_found.html');
})

// serve files from the public directory as if they were in a static
// directory
// The static middleware also sends index.html as a default response
app.use('/static', express.static(process.cwd() + 'public'));

app.listen(port, () => console.log(`Listening on port ${port}`));