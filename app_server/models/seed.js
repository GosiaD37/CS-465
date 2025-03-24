const mongoose = require('./db');
const Trip = require('./travlr');
const fs = require('fs');
const path = require('path');

// Read the JSON file
const tripsPath = path.join(__dirname, '../data/trips.json');
const trips = JSON.parse(fs.readFileSync(tripsPath, 'utf8'));

// Function to seed the database
const seedDB = async () => {
    try {
        await Trip.deleteMany({});
        await Trip.insertMany(trips);
        console.log("Database seeded successfully!");
    } catch (error) {
        console.error("Error seeding database:", error);
    }
};

// Run seed function
seedDB().then(async () => {
    await mongoose.connection.close();
    console.log("Database connection closed.");
    process.exit(0);
});

