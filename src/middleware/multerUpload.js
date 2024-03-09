const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("avatar"), function (req, res, next) {
  console.log("\n\n/upload\n\n");
  res.status(200);
  res.json({ Message: "img uploaded" });
});
