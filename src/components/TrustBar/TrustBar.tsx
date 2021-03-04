import React, { ReactElement, useEffect } from "react";
import "./trustBar.scss";

interface Props {
	profileImageUrl: string;
	trust: number;
}

export default function ProgressBar({
	trust,
	profileImageUrl,
}: Props): ReactElement {
	function setProgress(percent: string | number) {
		const circle = document.querySelector(".trust-circle") as SVGCircleElement;
		const borderCircle = document.querySelector(
			".trust-circle-border"
		) as SVGCircleElement;
		const radius = circle?.r.baseVal.value;
		const circumference = radius * 2 * Math.PI;
		circle.style.strokeDasharray = `${circumference} ${circumference}`;
		borderCircle.style.strokeDasharray = `${circumference} ${circumference}`;
		circle.style.strokeDashoffset = `${circumference}`;
		borderCircle.style.strokeDashoffset = `${circumference}`;
		const offset = circumference - (Number(percent) / 100) * circumference;
		circle.style.strokeDashoffset = offset.toString();
		borderCircle.style.strokeDashoffset = offset.toString();
	}

	useEffect(() => {
		setProgress(trust);
	}, [trust]);

	return (
		<div className="trust-container">
			<svg width={120} height={120} style={{ position: "relative" }}>
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
					className="trust-circle-border"
					stroke="white"
					strokeWidth="7"
					fill="transparent"
					r={44}
					cx={60}
					cy={54}
					strokeLinecap="round"
				/>
				<circle
					className="trust-circle"
					stroke="url(#gradient)"
					strokeWidth={5.5}
					fill="url(#image)"
					r={44}
					cx={60}
					cy={54}
					strokeLinecap="round"
				/>
				<circle fill="#6A3EEA" r="13.87px" cx={55} cy={21} />
				<text
					x={55}
					y={12}
					textAnchor="middle"
					fontSize="13px"
					fill="white"
					dy="14px"
				>
					{trust}
				</text>
			</svg>
			<img
				src={profileImageUrl}
				className="trustbar-profile-img"
				alt="user-profile-img"
			/>
		</div>
	);
}
