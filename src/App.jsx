import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ClassListProvider from './store/ClassList_Store';
import ClassList from './components/ClassList';
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ClassRoom from './components/ClassRoom';

function App() {

  return (
    <ClassListProvider>
    <div className="app-container">
    <Sidebar></Sidebar>
      <div className="content">
       <Header />
       <div className="classList">
          <ClassList />
       </div>
      </div>
    </div>
    </ClassListProvider>
  )
}

export default App
