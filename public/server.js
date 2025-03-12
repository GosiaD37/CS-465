const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Set up Handlebars engine
app.engine('hbs', exphbs.engine({ 
    extname: '.hbs', 
    defaultLayout: false, // Disabling default layout (optional, if you have a layout file set it here)
    partialsDir: 'views/partials/'  // Register partials folder
}));
app.set('view engine', 'hbs');

// Serve static files like CSS and images
app.use(express.static('public'));

// Define a route for the "travel" page
app.get('/travel', (req, res) => {
    res.render('travel');  // Render travel.hbs
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
