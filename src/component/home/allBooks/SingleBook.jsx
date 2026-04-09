
import { useContext } from 'react';
import {useLoaderData, useParams } from 'react-router';
import { BookContaxt } from '../../../context/BookContext';

const SingleBook = () => {
  const {id} = useParams()
  const datas=useLoaderData()  
  const expectedData = datas.find(data => data.bookId == id);

 const {handelReadBtn,handelWishBtn}=useContext(BookContaxt)

    return (
        <div className='w-4/6 mx-auto'>
          <div className="card lg:card-side bg-base-100 shadow-sm">
  <figure className='w-full'>
    <img 
      src={expectedData.image}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{expectedData.bookName}</h2>
    <p>By : {expectedData.author}</p>
    <div className='border-y border-gray-400 py-4'>
      <p><span className='font-semibold'>Review :</span> {expectedData.review}</p>

      <br />

      <div>
  <span className='font-semibold'>Tags:</span>
  <div className='flex gap-2'>
    {
      expectedData.tags.map((tag, index) => (
        <span key={index} className='text-green-500 font-semibold'>
          {tag}
        </span>
      ))
    }
  </div>
</div>
    </div>
    <div  className='flex gap-10'>
      <div >
        <p>Number of Pages:</p>
        <p>Publisher:</p>
        <p>Year of Publishing:</p>
        <p>Rating:</p>
      </div>
      <div className='font-semibold'>
        
        <p>{expectedData.totalPages}</p>
        <p>{expectedData.publisher}</p>
        <p>{expectedData.yearOfPublishing}</p>
        <p>{expectedData.rating}</p>
      </div>
      
    </div>
    <div className="card-actions my-5">
      <button className="btn" onClick={()=> handelReadBtn(expectedData)}>Mark as Read</button>
      <button className="btn btn-info text-white" onClick={()=> handelWishBtn(expectedData)}>Add to Wishlist</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleBook;