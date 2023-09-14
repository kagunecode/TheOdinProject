function book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.getReport = function () {
        return `${title} by ${author}, ${pages} pages, ${status}`
    }
}

const theHobbit = new book('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet')
console.log(theHobbit.valueOf())