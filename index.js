const express = require("express");
const app = express();
const connectToMongoDB = require("./config/db");
const register = require("./routes/api/auth");
const forgot = require("./routes/api/forgotPassword");
const cors = require('cors');

// Accept incoming request
app.use(express.json({ extended: false }));

app.use(cors())

// Connect to MongoDB
connectToMongoDB();

// Routes
app.use("/api/auth", register);
app.use("/api/password", forgot);

// Run the server
app.listen(5000, () => console.log(`Server running in 5000`));