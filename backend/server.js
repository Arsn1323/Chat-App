import express from "express"
import path from "path";
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.route.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js"
import { app, server } from "./socket/socket.js";

dotenv.config();
const __dirname = path.resolve();
const PORT = process.env.PORT || 6500;
app.use(cookieParser());



app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users", userRoutes);

// app.use(express.static(path.join(__dirname, "/frontend/dist")));

// app.get("*", (req, res) => {
// 	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
// });
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectToMongoDB();
})
