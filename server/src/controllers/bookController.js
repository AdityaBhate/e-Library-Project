import BookModel from "../models/BookModel.js";

export const addBook = async (req, res) => {
    const {
        name,
        category,
        subject,
        filePath
    } = req.body
    const newBook = new BookModel({
        name,
        category,
        subject,
        filePath
    });
    try {
        await newBook.save()
        res.send(newBook)
    } catch (error) {
        console.log(error);
    }
}

export const getBook = async (req, res) => {
    const book = await BookModel.findById(req.params.id)
    res.send(book)
}

export const getBooks = async (req, res) => {
    BookModel.find({}).then(function (users) {
        res.send(users);
    });
}

export async function handleDownload(req, res) {
    const file = await File.findById(req.params.id);

    if (file.password != null) {
        if (req.body.password == null) {
            res.render("password");
            return;
        }

        if (!(await bcrypt.compare(req.body.password, file.password))) {
            res.render("password", {
                error: true
            });
            return;
        }
    }

    file.downloadCount++;
    await file.save();
    console.log(file.downloadCount);

    res.download(file.path, file.originalName);
}

export const uploadBook = async (req, res) => {
    const fileData = {
        path: req.file.path,
        originalName: req.file.originalname,
    };
    if (req.body.password != null && req.body.password !== "") {
        fileData.password = await bcrypt.hash(req.body.password, 10);
    }

    const file = await File.create(fileData);

    res.send(`${req.headers.origin}/file/${file.id}`);
};