
import React, { useContext } from 'react';
import AllBooks from '../../home/allBooks/AllBooks';
import { BookContaxt } from '../../../context/BookContext';


const Readlist = () => {
    const {storedBook}=useContext(BookContaxt)
    if(storedBook.length === 0){
        return (
            <div className='bg-base-300 text-center p-20'>
                <h1 className='text-3xl font-bold text-gray-500'>Nothing is Selected</h1>
            </div>
        )
    }
    return (
       
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-9'>
                {
                    storedBook.map((book)=> <AllBooks key={book.bookId} book={book} ></AllBooks>)
                }
              </div>
    );
};

export default Readlist;