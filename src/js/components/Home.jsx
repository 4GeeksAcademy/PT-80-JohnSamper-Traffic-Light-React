import React , {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
// this will set the color of the traffic light based off of how it is clicked :) 
const [selectedColor, setSelectedColor] = React.useState("red");

	return (

		<div className="top pole"> yo im a pole yo :)
			<div className="traffic-light">
				<div onClick={ () => setSelectedColor("red")}
				 className={"light red" +((selectedColor === "red") ? " glow " : "")}>
				</div>
				<div onClick={ () => setSelectedColor("yellow")}
				 className={"light yellow " + ((selectedColor === "yellow") ? " glow " : "")}>
				</div>
				<div onClick={ () => setSelectedColor("green")}
				 className={"light green " + ((selectedColor === "green") ? " glow " : "")}> 
				</div>
			</div>
		</div>
	
	);
};

export default Home;