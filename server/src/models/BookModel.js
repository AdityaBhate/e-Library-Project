import mongoose from "mongoose"

const BookSchema = mongoose.Schema({
    name: {
        type: String
    },
    category: {
        type: String
    },
    originalName: {
        type: String
    },
    subject: {
        type: String
    },
    path: {
        type: String
    }
})

const BookModel = mongoose.model("BookModel", BookSchema)

export default BookModel