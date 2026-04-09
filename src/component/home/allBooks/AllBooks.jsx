import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router';

 const AllBooks = ({book}) => {
    
    return (
        <Link to={`/singleBook/${book.bookId}`}>
            <div className="card h-full bg-base-100 shadow-sm w-96">
  <figure className='p-6 bg-base-300'>
    <div className='h-60 w-40 rounded-xl'>
    <img
      className='rounded-xl'
      src={book.image}
      alt="Shoes" />
    </div>
  </figure>
  <div className="card-body">
    <div>
      {
        book.tags.map(tag => <div className="badge badge-success badge-soft mx-4">{tag}</div>)
      }
    </div>
    <h2 className="card-title">
      {book.bookName}
    </h2>
    <p>By : {book.author}</p>
    <div className="card-actions justify-between border-t border-dashed pt-3">
      <p className='font-semibold'>{book.category}</p>
      <p className='flex justify-center items-center gap-1 font-semibold'>{book.rating} <Star/></p>
    </div>
  </div>
</div>
        </Link>
        
    );
};

export default AllBooks;