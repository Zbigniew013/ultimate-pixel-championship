import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { WizardScreen } from './components/wizard-screen-components/WizardScreen.jsx';
import { Booking } from './components/booking-components/Booking.jsx';
import { Confirmation } from './components/confirmation-components/Confirmation.jsx';

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
   },
   {
      path: '/wizardscreen',
      element: <WizardScreen />,
   },
   {
      path: '/booking',
      element: <Booking />,
   },
   {
      path: '/confirmation',
      element: <Confirmation />,
   },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>,
);
