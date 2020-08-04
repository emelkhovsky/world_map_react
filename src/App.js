import React from 'react';
import './App.css';
import Allmap from "./components/Allmap";

const App = (props) => {
  return (
    <div>
      <Allmap countries={props.countries} dispatch={props.dispatch}/>
    </div>
  );
}

export default App;
