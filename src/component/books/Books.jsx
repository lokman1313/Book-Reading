
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Readlist from './readlist/Readlist';
import WishList from './wishlist/WishList';

const Books = () => {
    
    return (
        <div className='container mx-auto'>
            <div className='flex justify-center'>

            <div className="dropdown dropdown-center">
  <div tabIndex={0} role="button" className="btn btn-success text-white m-1">Short By ⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Pages</a></li>
    <li><a>Retings</a></li>
  </ul>
</div>
            </div>
            <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <Readlist></Readlist>
    </TabPanel>
    <TabPanel>
      <WishList></WishList>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Books;