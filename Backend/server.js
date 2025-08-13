import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

const app = express();
const PORT = 3000;

// Create uploads folder if it doesn't exist
const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // folder to store files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // unique file name
  },
});

const upload = multer({ storage });

// Route to handle form submission
app.post("/upload", upload.single("payment"), (req, res) => {
  const { leaderName, email, contact, college, team, members } = req.body;
  const file = req.file;

  console.log("Leader Name:", leaderName);
  console.log("Email:", email);
  console.log("Contact:", contact);
  console.log("College:", college);
  console.log("Team:", team);
  console.log("Members:", members);
  console.log("Uploaded File:", file);

  res.json({
    success: true,
    message: "Form and file uploaded successfully",
    filePath: file ? `/uploads/${file.filename}` : null,
  });
});

// Static route to serve uploaded files
app.use("/uploads", express.static("uploads"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
