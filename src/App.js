import React from 'react';
import './App.css';
import { BrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom';
// import MyLinksPage from './pages/MyLinksPage';
// import Templates from './pages/Templates';
// import Notification from './pages/Notifications';
// import Help from './pages/Help';
// import Sidebar from './components/Sidebar';
// import Settingbar from './components/Settingbar';
// import DomainManagement from './pages/DomainManagement';
// import Settings from './pages/Settings';
// import Subscription from './pages/Subscription';
// import RemoveBrand from './pages/RemoveBrand';
import router from './router/router';
import { ThemeProviders } from './components/styles/ThemeContext';

const App = () => {
  return (
    <>
      <ThemeProviders >
        <RouterProvider router={router}/>
      </ThemeProviders>
    </>

  );
};

export default App;