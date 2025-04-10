import { verifyToken } from "../helper/authHelper.js";
import jobSeekerModel from "../models/jobSeekerModel.js";

export const updateJobSeeker = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized Token" });
    }

    const decode = verifyToken(token);
    if (!decode) {
      return res.status(401).json({ message: "Token Invalid" });
    }

    if (decode.user_type !== 1) {
      return res.status(403).json({ message: "Forbidden: Only job seekers can update profile" });
    }

    const jobseeker_id = decode.id;

    const {
      address,
      phone,
      resume,
      skills,
      job_filter_id,
      experience,
      education,
      socialLinks
    } = req.body;

    const jobSeeker = await jobSeekerModel.findOne({ jobseeker_id });
    if (!jobSeeker) {
      return res.status(404).json({ message: "Job Seeker not found" });
    }

    // Update fields if provided
    if (address) jobSeeker.address = address;
    if (phone) jobSeeker.phone = phone;
    if (resume) jobSeeker.resume = resume;
    if (skills) jobSeeker.skills = skills;
    if (job_filter_id) jobSeeker.job_filter_id = job_filter_id;
    if (experience) jobSeeker.experience = experience;
    if (education) jobSeeker.education = education;
    if (socialLinks) jobSeeker.socialLinks = socialLinks;

    const updatedJobSeeker = await jobSeeker.save();

    res.status(200).json({
      message: "Job seeker profile updated successfully",
      updatedJobSeeker,
    });

  } catch (error) {
    console.error("Update Job Seeker Error:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};
