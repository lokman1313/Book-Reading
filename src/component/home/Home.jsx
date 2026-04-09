import { use } from 'react';
import HomeBanner from './HomeBanner';
import AllBooks from './allBooks/AllBooks';

const datas= fetch('/booksData.json').then(res => res.json());

const Home = () => {
    const books = use(datas)
    
    return (
        <div>
            <HomeBanner></HomeBanner>
           <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-9'>
            {
                books.map((book) => <AllBooks key={book.bookId} book={book}></AllBooks> )
            }
            </div>
        </div>
    );
};

export default Home;