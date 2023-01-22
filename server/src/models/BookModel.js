import mongoose from "mongoose"

const BookSchema = mongoose.Schema({
    name: {
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
    },
    originalName: {
        type: String
    },
    path: {
        type: String
    }
})

const BookModel = mongoose.model("BookModel", BookSchema)

export default BookModel