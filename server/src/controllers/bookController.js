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
    const book = await BookModel.findById(req.params.id);

    file.downloadCount++;
    await book.save();
    console.log("Downloading file");

    res.download(file.path, file.originalName);
}

export const uploadBook = async (req, res) => {
    const fileData = {
        name: req.body.name,
        path: req.file.path,
        originalName: req.file.originalname,
        category: req.body.category,
        subject: req.body.subject,
        uploadedBy: req.body.uploadedBy,
        author: req.body.author,
        recommendedYear: req.body.recommendedYear
    };
    /**name: {
        type: String
    },
    category: {
        type: String
    },
    subject: {
        type: String
    },
    uploadedBy: {
        type: String
    },
    author: {
        type: String
    },
    recommendedYear: {
        type: Number
    }, */
    const book = await BookModel.create(fileData);

    res.send(`book uploaded successfully by id ${book.id}`);
};

export const searchContent = async (req, res) => {
    // let recommendedYear = req.query.recommendedYear;
    let category = req.query.category;
    let subject = req.query.subject;
    let name = req.query.name;
    console.log(req.query)

    let resData = await BookModel.find({
        "$or": [{
            name: {
                $regex: name
            },
            subject: {
                $regex: subject
            },
            category: {
                $regex: category
            }
        }]
    })

    res.json(resData)
}