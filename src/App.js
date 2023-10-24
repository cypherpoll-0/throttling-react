import { useState } from "react";
import "./App.css";

function App() {
	const [throttledText, setThrottledText] = useState("");
	const [time, setTime] = useState(5000);
	const [count, setCount] = useState(5);

	function toBeThrottled(value) {
		setThrottledText(value);
		console.log(value);
	}

	const throttler = (fn, time) => {
		let flag = true;
		return function (...args) {
			let context = this;
			if (flag) {
				fn.apply(context, args);
				flag = false;
				setTimeout(() => {
					flag = true;
				}, time);
			}
		};
	};

	function handleThrottle(value) {
		const throttled = throttler(toBeThrottled, time);
		// const timer = setInterval(function () {
		// 	setCount(count - 1);
		// 	console.log(count);
		// 	if (count === 0) {
		// 		clearInterval(timer);
		// 		console.log("Time's up!");
		// 	}
		// }, 1000);
		throttled(value);
	}

	return (
		<div className="App">
			<h1>Throttling example</h1>
			<br />
			<p>
				Throttling is a technique that limits the number of times a function can
				be called over a given period of time. It is often used to control the
				frequency at which an event is triggered or a request is sent, in order
				to prevent overwhelming a system or degrading performance.
			</p>
			<br />
			<input
				placeholder="Enter text to be throttled here"
				onChange={(e) => handleThrottle(e.target.value)}
			/>
			<br />
			<h3>
				{throttledText} is being displayed at a time interval of {time / 1000}
			</h3>
			<br />
			<h3>
				Throttling has started and all text changes are overlooked for {count}{" "}
				seconds
			</h3>
		</div>
	);
}

export default App;
