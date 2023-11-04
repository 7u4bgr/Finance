import React from 'react';
import './App.css';
import { routeArr } from './routes';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routeArr.map((item) => (
          <Route
            exact
            path={item.path}
            key={item.id}
            element={
              <>
                <item.component />
              </>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
