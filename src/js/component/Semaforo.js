import React, { useState } from "react";

export const Semaforo = () => {
	const [red, setRed] = useState("#8B0000 ");
	const [green, setGreen] = useState("#008C00");
	const [yellow, setYellow] = useState("#9B870C");
	const [yellowShadow, setYellowShadow] = useState("");
	const [greenShadow, setGreenShadow] = useState("");
	const [redShadow, setRedShadow] = useState("");
	return (
		<div className="container">
			<div
				className="bg-dark position-absolute top-50 start-50 translate-middle"
				style={{
					width: "180px",
					height: "420px",
					borderRadius: "40px",
				}}>
				<div
					className="rounded-circle position-absolute top-0 start-50 translate-middle-x "
					style={{
						width: "130px",
						height: "130px",
						background: red,
						boxShadow: redShadow,
					}}
					onClick={() => {
						setRed("red");
						setRedShadow("0px 0px 20px 10px #0ff");
					}}></div>
				<div
					className="rounded-circle position-absolute top-50 start-50 translate-middle "
					style={{
						width: "130px",
						height: "130px",
						background: yellow,
						boxShadow: yellowShadow,
					}}
					onClick={() => {
						setYellow("yellow");
						setYellowShadow("0px 0px 20px 10px #0ff");
					}}></div>
				<div
					className="rounded-circle position-absolute bottom-0 start-50 translate-middle-x bg-success"
					style={{
						width: "130px",
						height: "130px",
						background: green,
						boxShadow: greenShadow,
					}}
					onClick={() => {
						setGreen("green");
						setGreenShadow("0px 0px 20px 10px #0ff");
					}}></div>
			</div>
		</div>
	);
};
