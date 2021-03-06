import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { setFactsList } from '../Actions/CityFacts'

function Questions() {

        let bgcolor2 = document.getElementById("root");
        bgcolor2.style.backgroundColor = "blue";

        const dispatch = useDispatch();
        let [facts, setFacts ] = useState([
            { id: "1", nameOf: "Westby", population: "VELKOMMEN! The City of Westby was once considered a Village incorporated in 1896 but later became a City in 1920 and is now made up of approximately 2,472 residents.", county: "Westby is located in Vernon County which is in south western Wisconsin.", meaning: "The name 'Westby' is a Norwegian name and literally translates to 'Western city'.", incorporated: "Westby was incorporated in 1896. The Norwegian flavor of the town is captured in the name of a store, Uff Da Shoppe.", zipcode: "Westby's zipcode is 54667.", areacode: "The city of Westby is located in the 608 area code.", festivals: "Westby's most popular event is the Syttende Mai festival, an annual three-day event held in mid-May. The festival stems from Westby's Norwegian roots, Syttende Mai being a Norwegian holiday ('Syttende Mai' translates to 'Seventeenth of May') celebrating Norway's independence and the signing of the Norwegian Constitution.", demographics: "The median age in the city was 41.5 years. 24.8% of residents were under the age of 18; 5.9% were between the ages of 18 and 24; 24.1% were from 25 to 44; 24.4% were from 45 to 64; and 20.8% were 65 years of age or older. The gender makeup of the city was 48.1% male and 51.9% female.", economy: "With seven cooperatives still functioning, Westby has been referred to as 'Co-op City'. Some of the more prominent co-ops are the Westby Cooperative Creamery, Vernon Telephone Cooperative, Heartland Country Coop, Westby Coop Credit Union, and Vernon Electric Cooperative."}
        ])
    
        const setData = () => {
            dispatch(setFactsList(facts));
            console.log("Current Cities:", facts)
          };
          
          useEffect(() => {
            setData();
          }, []);

          function ShowData(e, attribute){
            e.preventDefault();
            const City = { id: "1", nameOf: "Westby", population: "VELKOMMEN! The City of Westby was once considered a Village incorporated in 1896 but later became a City in 1920 and is now made up of approximately 2,472 residents.", county: "Westby is located in Vernon County which is in south western Wisconsin.", meaning: "The name 'Westby' is a Norwegian name and literally translates to 'Western city'.", incorporated: "Westby was incorporated in 1896. The Norwegian flavor of the town is captured in the name of a store, Uff Da Shoppe.", zipcode: "Westby's zipcode is 54667.", areacode: "The city of Westby is located in the 608 area code.", festivals: "Westby's most popular event is the Syttende Mai festival, an annual three-day event held in mid-May. The festival stems from Westby's Norwegian roots, Syttende Mai being a Norwegian holiday ('Syttende Mai' translates to 'Seventeenth of May') celebrating Norway's independence and the signing of the Norwegian Constitution.", demographics: "The median age in the city was 41.5 years. 24.8% of residents were under the age of 18; 5.9% were between the ages of 18 and 24; 24.1% were from 25 to 44; 24.4% were from 45 to 64; and 20.8% were 65 years of age or older. The gender makeup of the city was 48.1% male and 51.9% female.", economy: "With seven cooperatives still functioning, Westby has been referred to as 'Co-op City'. Some of the more prominent co-ops are the Westby Cooperative Creamery, Vernon Telephone Cooperative, Heartland Country Coop, Westby Coop Credit Union, and Vernon Electric Cooperative."}
            let summary = document.querySelector("#history");
            summary.innerHTML = "";
            switch (attribute)
{
   case "demographics": summary.innerHTML =  City.demographics;
   break;
   case "population": summary.innerHTML =  City.population + City.meaning;
   break;
   case "area": summary.innerHTML =  City.county;
    break;
    case "meaning": summary.innerHTML =  City.meaning;
    break;
    case "incorporated": summary.innerHTML =  City.incorporated;
    break;
    case "county": summary.innerHTML =  City.county + City.areacode  + City.zipcode;
     break;
     case "festivals": summary.innerHTML =  City.festivals;
     break;
     case "economy": summary.innerHTML =  City.economy;
      break;
    

   default: 
       alert('Default case');
}
          }

  return (
      <>
    <div>
      <center><h2>Questions Page</h2></center>
      <button id="returnButton"><Link to="/" id="returnWords">Back Home</Link></button>
    </div>
    <center><p id="history"> </p></center>
    <div id ="sideNav">
      <center><div id="menuHeading">Learn About Westby!</div></center>
      <hr/>
    <a href="#" onClick={(e) => {ShowData(e, 'demographics')}}>demographics</a><br/>
    <a href="#" onClick={(e) => {ShowData(e, 'county')}}>Home</a><br/>
    <a href="#" onClick={(e) => {ShowData(e, 'population')}}>Our Town</a><br/>
    <a href="#" onClick={(e) => {ShowData(e, 'incorporated')}}>Happy Birthday!</a><br/>
    <a href="#" onClick={(e) => {ShowData(e, 'festivals')}}>Syttende Mai</a><br/>
    <a href="#" onClick={(e) => {ShowData(e, 'economy')}}>commerce</a><br/>
    </div>
    </>
  )
}
const mapStateToProps = (state) => {
    return {
      City: state.facts
    }
  
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
      City: (facts) => { dispatch({type: 'SET_FACTS', facts})}
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Questions);

