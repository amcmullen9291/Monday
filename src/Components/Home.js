import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

function colorChange(e){
    e.preventDefault();
    let bgcolor = document.getElementById("root");
    bgcolor.style.backgroundColor = "green";
    let words = document.getElementById("middle");
    words.style.visibility = "visible";
}

function colorChange2(e){
    e.preventDefault();
    let bgcolor = document.getElementById("root");
    bgcolor.style.backgroundColor = "blue";
    // let words = document.getElementById("middle");
    // words.style.visibility = "visible";
}

  return (
      <>
    <div>
      <center><h1 id="welcome">Hello Wisconsin!</h1></center>
      <center><h4 id="secondHeading">etc, etc </h4></center>
      <hr/>
      <br/>
      <img alt="Westby" id="mainBoard2" className="Flags" src={`${process.env.PUBLIC_URL}/WestbyFlag.jpg`}/>
      <img alt="Wisconsin" id="mainBoard" className="Flags" src={`${process.env.PUBLIC_URL}/StateFlag.jpg`}/>
    </div>
    <center><Link to="/questions"><button id="enterButton" onMouseOver={(e) => {colorChange(e)}} onMouseLeave={(e) => {colorChange2(e)}}>Almanac</button></Link></center>

    <center><h4 id="middle">hurry back now, real real soon!</h4></center>
    </>
  )
}
