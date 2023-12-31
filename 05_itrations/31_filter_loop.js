


// filter operation

let myNumber = [1,2,3,4,5,6,7,8,9,10]

// const myNumb = myNumber.filter((nums)=> nums > 5 )

const myNumb = myNumber.filter((nums)=>{
    return nums > 5
})
// console.log(myNumb);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let itrBooks = books.filter((tag) => tag.publish < 2000 )
itrBooks = books.filter((tag) => tag.genre === "History" )
itrBooks = books.filter((tag) => tag.edition < 2000 )
itrBooks = books.filter((tag) => tag.title === "Book Six" )

// when use scoop then use return other wise this will show blank array
itrBooks = books.filter((tag) => {
    return tag.title === "Book Six"
})


itrBooks = books.filter((tag) => {
    return tag.publish < 2000  && tag.edition < 2000
})


console.log(itrBooks);