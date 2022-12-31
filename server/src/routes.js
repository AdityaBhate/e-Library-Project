import express from "express"
import multer from "multer"
import {
    UserSignup,
    UserLogin,
    getUser
} from "./controllers/userContorller.js"

import {
    uploadBook,
    handleDownload,
    getBooks,
    addBook,
    getBook
} from "./controllers/bookController.js"

const upload = multer({
    dest: "uploads"
});

const router = express.Router();

router.post("/user/signup", UserSignup);
router.post("/user/login", UserLogin);
router.get("/user/:id", getUser);

router.get("/content/all", getBooks)
router.post("/content/add", addBook)
router.get("/content/:id", getBook)

router.post("/content/upload", upload.single("file"), uploadBook)
router.get("/file/:id", handleDownload)
router.post("/file/:id", handleDownload);

export default router;