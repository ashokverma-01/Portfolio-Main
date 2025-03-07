const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./Routes/userRoute");
const cors = require("cors");
const path = require("path");

// deploye
const _dirname = path.resolve();

dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
const coreOptions = {
  origin: "https://portfolio-main-1-akuh.onrender.com",
  // origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(coreOptions));

// Routes
app.use("/api", userRoutes);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
