import React,{Suspense} from 'react'
import ReactDOM from 'react-dom/client';
import Body from './src/components/Body'
// import About from './src/components/About'
const About = React.lazy(()=>import('./src/components/About'))
import Header from './src/components/Header';
import {Link,Outlet} from 'react-router-dom'
import {
    createBrowserRouter,
    RouterProvider,
  } from 'react-router-dom';
let elem = <h1>Welcome to react</h1>
const AppCmp = ()=>{
    return  (
        <div>
    <Header></Header>    
   <Outlet></Outlet> 
   <Body></Body>
    </div>)
} 

const appRouter = createBrowserRouter([{
    path : '/',
    element : <AppCmp></AppCmp>,
    children : [{
        path : '/about',
        element : <Suspense fallback={<h1>Loading ....</h1>}><About></About></Suspense>
    }],
    errorElement : <h1>Something went wrong</h1>
},

])
let rootElem = ReactDOM.createRoot(document.getElementById('root'))
rootElem.render(<RouterProvider router = {appRouter}></RouterProvider>)