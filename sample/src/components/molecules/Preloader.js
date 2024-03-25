import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

function Preloader() {
	const [Mount, setMount] = useState(false);
	useEffect(() => {
		setTimeout(() => {
			setMount(true);
		}, 300);
		return () => setMount(false);
	}, []);

	return (
		<StyledPreloader className={`preloader${Mount ? " off" : ""}`}>
			<div className="black_wall"></div>
			<div className="loader"></div>
		</StyledPreloader>
	);
}

const preloader_slide = keyframes`
	from {
		transform: scaleX(0)
	}

	to {
		transform: scaleX(1)
	}
`;

const StyledPreloader = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: #111;
	transform-origin: bottom;
	z-index: 111111;
	.black_wall {
		width: 100%;
		background-color: #ddd;
		transform-origin: right;
		animation: ${preloader_slide} 0.5s ease-in-out 0s 1 normal both;
	}

	.loader {
		width: 100%;
		height: 3px;
		position: absolute;
		border-radius: 2px;
		top: 0;
		right: 0;
		left: 0;
		margin: auto;
		background-color: #eee;
	}

	&.off {
		animation: ${preloader_slide} 0.5s ease-in-out 0s 1 reverse both;
	}
`;

export default Preloader;
