import express from "express";
const router  = express.Router();
import { isAuthorized } from "../middlewares/auth.js";
import {employerGetAllApplications, jobseekerGetAllApplications, jobSeekerDeleteApplication, postApplication} from "../controllers/applicationController.js"


router.get("/employer/getall", isAuthorized, employerGetAllApplications);
router.get("/jobseeker/getall", isAuthorized, jobseekerGetAllApplications);
router.delete("/delete/:id", isAuthorized, jobSeekerDeleteApplication);
router.post("/post", isAuthorized, postApplication);

export default router;