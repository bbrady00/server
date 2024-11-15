const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const bookingRoutes = require("./routes/bookingRoutes");
const notFound = require("./middleware/notFoundMiddleware");
const errorHandler = require("./middleware/errorMiddleware");

dotenv.config();

connectDB(); // Call the imported connectDB function to connect to MongoDB

const app = express();
app.use(express.json()); // Middleware to parse JSON

app.use("/api/bookings", bookingRoutes); // Booking routes

app.use(notFound); // 404 Middleware
app.use(errorHandler); // Error handling middleware

const PORT = process.env.PORT || 5004;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
