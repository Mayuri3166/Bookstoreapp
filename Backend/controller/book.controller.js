import Book from "../modal/book.modal.js"

export const getBook=async(req, res)=>{
    try{
        const book=await Book.find()
        res.status(200).json(book) //200 status code for the success

    }catch(error){
        console.log("error", error)
        res.status(500).json(error)
    }
}