import express from "express";
import { getCompanyJobs, getJobApplicants, updateCompany } from "../controllers/companyController.js";

const router = express.Router();

router.post("/update-company", updateCompany);
router.get("/get-company-job", getCompanyJobs);
router.get("/get-job-applicants/:jobId", getJobApplicants);

export default router;