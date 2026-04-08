import Home from '../component/home/Home.jsx'
import { createBrowserRouter } from 'react-router'
import Layout from '../component/layout/Layout.jsx'
import Books from '../component/books/Books.jsx'
import PagesToRead from '../component/pagesToRead/PagesToRead.jsx'
import ErrorPage from '../component/books/errorPage.jsx'

export const router = createBrowserRouter([
  { 
     path: '/',
    Component: Layout,
    children:[
      {
        index:true,
        Component : Home
      },
      {
        path:'/books',
        Component : Books
      },
      {
        path: '/pagesToRead',
        Component: PagesToRead
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])
