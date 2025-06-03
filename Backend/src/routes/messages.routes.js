import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getUserForSidebar,
  getMessages,
  sendMessages,
} from "../controllers/messages.controller.js";


const router = express.Router();


router.get("/users", protectRoute, getUserForSidebar);
router.get("/:id", getMessages);

router.post("user/:id", protectRoute, sendMessages);

export default router;
