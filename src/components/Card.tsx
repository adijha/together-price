
import React, { ReactElement } from 'react'
import AddButton from "./AddButton";
import ProgressBar from "./ProgressBar";

interface Props {
	
}

export default function Card({}: Props): ReactElement {
	return (
		<>
			<div className="card">
				<ProgressBar />
				<div className="card-user-details">
					<h5 className="card-user-name">Gina Snelly</h5>
					<p className="card-user-desc">nessuna connessione</p>
				</div>
				<AddButton />
			</div>
			<div className="card-lower-section">
				<p className="card-lower-text">
					Sta già condividendo <span>Disney Plus</span>
				</p>
			</div>
		</>
	)
}
