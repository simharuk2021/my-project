type Book = {
    id: number
    title: string   
    author: string  
    availableCopies:number
}
type Loan = {
    id:number   
    book:Book
    status:"borrowed" | "returned"
}

const library: Book[] = [
    {id:1, title: "To Kill a Mockingbird", author: "Harper Lee", availableCopies: 3},
    {id:2, title: "1984", author: "George Orwell", availableCopies: 2},
    {id:3, title: "Pride and Prejudice", author: "Jane Austen", availableCopies: 4},
    {id:4, title: "The Great Gatsby", author: "F. Scott Fitzgerald", availableCopies: 2}
]

const loanQueue:Loan[] = []
let nextLoanid =1

function addNewBook(bookObj: Book) {
    library.push(bookObj)
}
function borrowBook(title:string) {
    const selectedBook = library.find(bookObj => bookObj.title === title)

    if (!selectedBook){
        console.error(`${title} does not exist in library`)
            return
    }
    if (selectedBook.availableCopies <=0){
        console.error(`${title} has no available copies`)
            return
    }
    selectedBook.availableCopies--
    
    const newLoan: Loan = {id: nextLoanid++, book: selectedBook, status:"borrowed"}
    loanQueue.push(newLoan)
    return newLoan
}

function returnBook(loanId: number) {
    const loan = loanQueue.find(loan => loan.id === loanId)
    if(!loan){
        console.error(`${loanId} was not found in the loan queue`);
        throw new Error();
    }
    loan.status = "returned"
    loan.book.availableCopies++
        return loan
}

function getBookDetail(identifier: string | number){
    if(typeof identifier === "string"){
        return library.find(book => 
            book.title.toLowerCase() === identifier.toLowerCase())
    }
    else {
        return library.find(book => book.id === identifier)
    }
}


addNewBook({ id:5,title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquex", availableCopies: 1}),
addNewBook({ id:6,title: "Brave New World", author: "Aldous Huxley", availableCopies: 3}),
addNewBook({ id:7,title: "The Catcher in the Rye", author: "J.D.Salinger", availableCopies: 2})

borrowBook("Brave New World")
returnBook(1)

console.log("Library:", library)
console.log("Loan queue:", loanQueue)
