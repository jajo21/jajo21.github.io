import React from 'react';
import ReactDOM from 'react-dom/client';

import Navbar from './components/navbar/Navbar';

function App() {
  return (
      <>
        <Navbar/>
      </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);