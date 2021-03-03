import React, { ReactElement,useEffect } from 'react'

interface Props {
	
}


export default function ProgressBar({ }: Props): ReactElement {
	function setProgress(percent: string | number) {
		let circle = (document.querySelector(".progress-ring__circle") as SVGCircleElement)
		let percentOnBar = (document.querySelector("text") as SVGTextElement)
		let circleb = (document.querySelector(".progress-ring__circle_border") as SVGCircleElement)
		let radius = circle &&circle.r.baseVal.value;
		let circumference = radius * 2 * Math.PI;
		circle.style.strokeDasharray= `${circumference} ${circumference}`;
		circleb.style.strokeDasharray = `${circumference} ${circumference}`;
		circle.style.strokeDashoffset = `${circumference}`;
		circleb.style.strokeDashoffset = `${circumference}`;
		const offset = circumference - (Number(percent) / 100) * circumference;
		circle.style.strokeDashoffset = offset.toString();
		circleb.style.strokeDashoffset = offset.toString();
		percentOnBar.innerHTML = percent.toString();
	}
	
	useEffect(() => {
		const input =(document.querySelector("input") as HTMLInputElement)
		setProgress(input.value);

		input.addEventListener("change", function (e) {
			if (Number(input.value) < 101 && Number(input.value) > -1) {
				setProgress(input.value);
			}
		});
	}, []);

	return (
		<div className="progress-container">
			<svg
				className="progress-ring"
				width={126}
				height={126}
				style={{ position: "relative" }}
			>
				<defs>
					<linearGradient id="gradient" gradientTransform="rotate(95)">
						<stop offset="6.7%" stopColor="#FA5D75" />
						<stop offset="65.76%" stopColor="rgba(120, 100, 246, 0.67)" />
					</linearGradient>
				</defs>
				<defs>
					<pattern
						id="image"
						patternUnits="userSpaceOnUse"
						height={82}
						width={82}
					/>
				</defs>
				<circle
					className="progress-ring__circle_border"
					stroke="white"
					strokeWidth="8.25"
					fill="transparent"
					r={50}
					cx={60}
					cy={60}
					strokeLinecap="round"
				/>
				<circle
					className="progress-ring__circle"
					stroke="url(#gradient)"
					strokeWidth={7}
					fill="url(#image)"
					r={50}
					cx={60}
					cy={60}
					strokeLinecap="round"
				/>
				<circle fill="#6A3EEA" r="13.87px" cx={60} cy="18.5" />
				<text
					x={60}
					y={10}
					textAnchor="middle"
					fontSize="13px"
					fill="white"
					dy="14px"
				>
					75
				</text>
			</svg>
			<input
				defaultValue={75}
				type="number"
				step={5}
				min={0}
				max={100}
				placeholder="progress"
			/>
			<img
				src="https://randomuser.me/api/portraits/women/24.jpg"
				className="progressbar-user-img"
				alt="user"
			/>
		</div>
	);
}