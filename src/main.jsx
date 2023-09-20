import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WizardScreen from './components/WizardScreen.jsx';

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
   },

   {
      path: '/wizardscreen',
      element: <WizardScreen />,
   },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>,
);
