import express from "express";
import Message from "../models/Message.js";

const router = express.Router();

// Get all messages
router.get("/", async (req, res) => {
  const messages = await Message.find().sort({ createdAt: 1 });
  res.json(messages);
});

// Post a message
router.post("/", async (req, res) => {
  const { user, message } = req.body;
  const newMessage = await Message.create({ user, message });
  res.json(newMessage);
});

export default router;
