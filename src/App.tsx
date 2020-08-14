import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './normalize.css';
import BookingIndex from './booking/BookingIndex'
import TemplateAIndex from './templateA/TemplateAIndex'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route 
                    path="/booking"
                    component={BookingIndex} >
            </Route> 
            <Route 
                    path="/template"
                    component={TemplateAIndex} >
            </Route> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
