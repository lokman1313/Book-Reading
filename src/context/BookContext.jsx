
import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContaxt= createContext()

const BookProvider = ({children}) => {
    const [storedBook,setStoredBook]=useState([]);
    const [wishList,setWishlist]=useState([])

    const handelWishBtn =(book)=>{

        const isExistBook = wishList.find(books => books.bookId === book.bookId)
        const isExistInReadList = storedBook.find((books)=>books.bookId === book.bookId)
        if(isExistInReadList){
            toast.error('This book is allready in read list')
            return ;
        }
   else if(isExistBook){
    toast.warning('Book is allready exsist');
  }
  else{
    setWishlist([...wishList,book])
    toast.success(`${book.bookName} is added to Wishlist`)
  }
}
 const handelReadBtn =(book)=>{
  const isExistBook = storedBook.find(books => books.bookId ===book.bookId)
  if(isExistBook){
    toast.warning('Book is allready exsist');
  }
  else{
    setStoredBook([...storedBook,book])
    toast.success(`${book.bookName} is added to Read`)
  }
  console.log(book,storedBook)
  
 }
 const data ={handelReadBtn,storedBook,handelWishBtn,wishList};
    return <BookContaxt.Provider value={data} >
        {children}
    </BookContaxt.Provider>
};

export default BookProvider;