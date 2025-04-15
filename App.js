import React from 'react'
import ReactDOM from 'react-dom/client';
import Body from './src/components/Body'
import About from './src/components/About'
import Header from './src/components/Header';
import {
    createBrowserRouter,
    RouterProvider,
  } from 'react-router-dom';
let elem = <h1>Welcome to react</h1>
const AppCmp = ()=>{
    return  (
        <div>
    <Header></Header>    
    <Body></Body>
    </div>)
} 

const appRouter = createBrowserRouter([{
    path : '/',
    element : <AppCmp></AppCmp>,
    errorElement : <h1>Something went wrong</h1>
},
{
    path : '/about',
    element : <About></About>
}
])
let rootElem = ReactDOM.createRoot(document.getElementById('root'))
rootElem.render(<RouterProvider router = {appRouter}></RouterProvider>)