import React, { useContext } from 'react';
import { BookContaxt } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Readlist from './readlist/Readlist';
import WishList from './wishlist/WishList';

const Books = () => {
    const {storedBook,wishList}=useContext(BookContaxt)
    console.log(storedBook,wishList)
    return (
        <div className='container mx-auto'>
            <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-9'>
        {
            storedBook.map((book,ind)=> <Readlist key={ind} book={book}></Readlist>)
        }
      </div>
    </TabPanel>
    <TabPanel>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-9'>
        {
            wishList.map((book,index)=> <WishList key={index} book={book}></WishList>)
        }
      </div>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Books;