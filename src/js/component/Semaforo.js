import React, { useState } from "react";

export const Semaforo = () => {
	const [red, setRed] = useState("#8B0000 ");
	const [green, setGreen] = useState("#008C00");
	const [yellow, setYellow] = useState("#9B870C");
	const [shadow, setShadow] = useState("");
	return (
		<div className="container">
			<div className="bg-dark position-absolute top-50 start-50 translate-middle">
				<div
					className={`rounded-circle position-absolute top-0 start-50 translate-middle-x ${
						shadow === "red" ? "shadow-1" : ""
					}`}
					style={{
						background: red,
					}}
					onClick={() => setShadow("red")}></div>
				<div
					className={`${
						shadow === "yellow" ? "shadow-1" : ""
					} rounded-circle position-absolute top-50 start-50 translate-middle`}
					style={{
						background: yellow,
					}}
					onClick={() => setShadow("yellow")}></div>
				<div
					className={`rounded-circle position-absolute bottom-0 start-50 translate-middle-x bg-success ${
						shadow === "green" ? "shadow-1" : ""
					}`}
					style={{
						background: green,
					}}
					onClick={() => setShadow("green")}></div>
			</div>
		</div>
	);
};
