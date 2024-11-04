"use strict";
const library = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", availableCopies: 3 },
    { title: "1984", author: "George Orwell", availableCopies: 2 },
    { title: "Pride and Prejudice", author: "Jane Austen", availableCopies: 4 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", availableCopies: 2 }
];
const loanQueue = [];
let nextLoanid = 1;
function addNewBook(bookObj) {
    library.push(bookObj);
}
function borrowBook(title) {
    const selectedBook = library.find(bookObj => bookObj.title === title);
    if (!selectedBook) {
        console.error(`${title} does not exist in library`);
        return;
    }
    if (selectedBook.availableCopies <= 0) {
        console.error(`${title} has no available copies`);
        return;
    }
    selectedBook.availableCopies--;
    const newLoan = { id: nextLoanid++, book: selectedBook, status: "borrowed" };
    loanQueue.push(newLoan);
    return newLoan;
}
function returnBook(loanId) {
    const loan = loanQueue.find(loan => loan.id === loanId);
    if (!loan) {
        console.error(`${loanId} was not found in the loan queue`);
        throw new Error();
    }
    loan.status = "returned";
    loan.book.availableCopies++;
    return loan;
}
addNewBook({ title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquex", availableCopies: 1 }),
    addNewBook({ title: "Brave New World", author: "Aldous Huxley", availableCopies: 3 }),
    addNewBook({ title: "The Catcher in the Rye", author: "J.D.Salinger", availableCopies: 2 });
borrowBook("Brave New World");
returnBook(1);
console.log("Library:", library);
console.log("Loan queue:", loanQueue);
