import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from "morgan";
import userRoutes from './routes/user.route';
import authRoutes from './routes/auth.route';
import chatRoutes from './routes/chats.route';
import cookieParser from 'cookie-parser';
const app = express();
const port = 3000;
dotenv.config();

// MongoDb Connection
if (!process.env.MONGO_URI) {
  console.error("MongoDB URI is not defined in the environment variables.");
  process.exit(1);
}
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1); 
  });

// Middleware to parse JSON
app.use(express.json());

app.use(cookieParser())

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/chats", chatRoutes);


app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express and MongoDB!');
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
