import React, { ReactElement } from "react";
import { CircularProgress, makeStyles } from "@material-ui/core";
import "./materialUiTrustBar.scss";

const useStyles = makeStyles(() => ({
	circle: {
		stroke: "url(#linearColors)",
		strokeLinecap: "round",
	},
}));

interface Props {
	profileImageUrl: string;
	trust: number;
}

export default function ProgressBar({
	trust,
	profileImageUrl,
}: Props): ReactElement {
	const classes = useStyles({});

	return (
		<div className="material-trust-container">
			<svg>
				<defs>
					<linearGradient id="linearColors" gradientTransform="rotate(95)">
						<stop offset="6.7%" stopColor="#FA5D75" />
						<stop offset="65.76%" stopColor="rgba(120, 100, 246, 0.67)" />
					</linearGradient>
				</defs>
			</svg>
			<div>
				<img
					src={profileImageUrl}
					className="material-trustbar-profile-img"
					alt="user"
				/>
				<CircularProgress
					thickness={3}
					size={95}
					variant="determinate"
					value={trust}
					classes={{ circle: classes.circle }}
				/>
				<div className="material-trust-percent">{trust}</div>
			</div>
		</div>
	);
}
