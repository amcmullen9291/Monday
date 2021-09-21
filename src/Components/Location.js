import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { setFactsList } from '../Actions/CityFacts'

function Questions() {

        let bgcolor2 = document.getElementById("root");
        bgcolor2.style.backgroundColor = "blue";

        const dispatch = useDispatch();
        let [facts, setFacts ] = useState([
            { id: "1", nameOf: "Westby", population: "2472", county: "Westby is located in Vernon County which is in south western Wisconsin.", meaning: "The name 'Westby' is a Norwegian name and literally translates to 'Western city'.", incorporated: "Westby was incorporated in 1896. The Norwegian flavor of the town is captured in the name of a store, Uff Da Shoppe.", zipcode: "Westby's zipcode is 54667.", areacode: "The city of Westby is located in the 608 area code.", festivals: "Westby's most popular event is the Syttende Mai festival, an annual three-day event held in mid-May. The festival stems from Westby's Norwegian roots, Syttende Mai being a Norwegian holiday ('Syttende Mai' translates to 'Seventeenth of May') celebrating Norway's independence and the signing of the Norwegian Constitution.", demographics: "The median age in the city was 41.5 years. 24.8% of residents were under the age of 18; 5.9% were between the ages of 18 and 24; 24.1% were from 25 to 44; 24.4% were from 45 to 64; and 20.8% were 65 years of age or older. The gender makeup of the city was 48.1% male and 51.9% female.", economy: "With seven cooperatives still functioning, Westby has been referred to as 'Co-op City'. Some of the more prominent co-ops are the Westby Cooperative Creamery, Vernon Telephone Cooperative, Heartland Country Coop, Westby Coop Credit Union, and Vernon Electric Cooperative."}
        ])
    
        const setData = () => {
            dispatch(setFactsList(facts));
            console.log("Current Cities:", facts)
          };
          
          useEffect(() => {
            setData();
          }, []);

          function ShowData(data){
              let summary = document.getElementById("history");
              console.log(summary);
          }

  return (
      <>
    <div>
      <center><h2>Questions Page</h2></center>
      <button id="returnButton"><Link to="/" id="returnWords">Back Home</Link></button>
    </div>
    <center><p id="history"> howdy </p></center>
    <div id ="sideNav">
      <center><div>Learn About Westby!</div></center>
      <hr/>
    <a href="#" onCLick={ShowData("demographics")}>demographics</a>
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

