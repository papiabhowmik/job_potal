// index.js
import express, { application } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import companyRoutes from "./routes/companyRoutes.js";
import jobseekerRoutes from "./routes/jobSeekerRoutes.js"
import applicationRoutes from "./routes/applicationRoutes.js"

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.get('/',(req, res) => {
    res.send("Hello");
})
app.use("/api/auth", authRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/jobseeker", jobseekerRoutes);
app.use("/api/job-application", applicationRoutes);

const port = process.env.port || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

 