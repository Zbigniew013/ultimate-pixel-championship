import React from 'react';
import { AppLayout } from './components/AppLayout';
import './App.css';
import { HomeScreen } from './components/HomeScreen';

function App() {
   return (
      <AppLayout>
         <div className="app">
            <HomeScreen />
         </div>
      </AppLayout>
   );
}

export default App;
