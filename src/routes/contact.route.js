import express from "express";
import { creerDemandeContactEtEnvoyerMail } from "../controllers/contact.controller.js";

const router = express.Router();
router.post('/post', creerDemandeContactEtEnvoyerMail);

export default router;