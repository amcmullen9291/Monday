import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { setFactsList } from '../Actions/CityFacts'

export default function Questions() {

        let bgcolor2 = document.getElementById("root");
        bgcolor2.style.backgroundColor = "blue";

        let [facts, setFacts ] = useState([
            
        ])
    
  return (
      <>
    <div>
      <center><h2>Questions Page</h2></center>
      <button id="returnButton"><Link to="/" id="returnWords">Back Home</Link></button>
    </div>
    <div id ="sideNav">

    </div>
    </>
  )
}
