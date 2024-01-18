import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [circleVariable, setCircleVariable] =useState("")
	return (
		<div className="traffic-container">
				<div className="container">
					<div className="rectangle">
						<div
							className={"circle red" + ((circleVariable === "red") ? " light" : "")}
							onClick={() => setCircleVariable("red")}
						>.</div>
						<div className={"circle yellow" + ((circleVariable === "yellow") ? " light" : "")}
							 onClick={() => setCircleVariable("yellow")}
						>.</div>

						<div className={"circle green" + ((circleVariable === "green" ? " light" : ""))}
							 onClick={() => setCircleVariable("green")}
						>.</div>

					</div>
				</div>
			<div className="stick">.</div>
		</div>
	);
};

export default Home;
