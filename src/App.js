import { useState } from "react";
import useThrottle from "./useThrottle";
import "./App.css";
import { sample } from "./data";

function App() {
	const [calls, setCalls] = useState(0);
	const [calls2, setCalls2] = useState(0);
	const [position, setPosition] = useState(0);

	function handleScroll() {
		setCalls((c) => c + 1);

		setPosition(
			Math.round(
				((document.documentElement.scrollTop + document.body.scrollTop) /
					(document.documentElement.scrollHeight -
						document.documentElement.clientHeight)) *
					100
			)
		);
	}

	function handleScroll2() {
		setCalls2((c) => c + 1);

		setPosition(
			Math.round(
				((document.documentElement.scrollTop + document.body.scrollTop) /
					(document.documentElement.scrollHeight -
						document.documentElement.clientHeight)) *
					100
			)
		);
	}

	window.addEventListener("scroll", useThrottle(handleScroll, 2000));
	window.addEventListener("scroll", handleScroll2);

	return (
		<div className="App">
			<h1>Throttling example</h1>
			<h2 className="calls">
				Scrolling Calls without throttling of 2 seconds: {calls2}
			</h2>
			<br />
			<br />
			<br />
			<h2 className="calls">
				Scrolling Calls with throttling of 2 seconds: {calls}
			</h2>
			<br />
			<br />
			<p>
				Throttling is a technique that limits the number of times a function can
				be called over a given period of time. It is often used to control the
				frequency at which an event is triggered or a request is sent, in order
				to prevent overwhelming a system or degrading performance. I have made
				this website to show the effects of throttling on scrolling of window.
			</p>
			<br />
			<h2>Sample data</h2>
			<br />
			{sample.map((data, index) => {
				return (
					<div id={index}>
						<p>{data.name}</p>
						<p>{data.email}</p>
						<p>{data.company}</p>
						<p>{data.phone}</p>
						<br />
					</div>
				);
			})}
		</div>
	);
}

export default App;
