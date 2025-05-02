import express from "express";
import { updateJobSeeker } from "../controllers/jobSeekerController.js";

const router = express.Router();

router.post("/update-jobseeker", updateJobSeeker);
// router.put("/update-jobseeker/:jobseeker_id", updateJobSeeker);

export default router;