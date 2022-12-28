import Resource from "./Resource";

export default class BooksModel extends Resource{
    async getAllBooks(){
        return await this.connectResource('/books')
            .then(res=>{
                return res.map(this.#transformBooks)
            })
    }
    async getBook(id) {
        return await this.connectResource(`/books/${id}`)
            .then(res => {
               return  this.#transformBooks(res)
            })
    }
    #transformBooks(books){
        return{
            name: books.name,
            url: books.url || '',
            id: books.url.match(/(?<=\/)(.\d)(.*)|(?<=\/)(\d)/g).join(""),
            authors: books.authors,
            numberOfPages: books.numberOfPages,
            released: books.released
        }
    }
}
// const booksModel = new BooksModel();
// booksModel.getAllBooks()
//     .then(res => console.log(res))
// booksModel.getBook(1)
//     .then(res=>console.log(res))