import React, { ReactElement } from "react";
import AddButton from "./AddButton";
import ProgressBar from "./TrustBar";
import "./searchContactCard.scss";

type Contact = {
	fullName: string;
	userId: number;
	profileImageUrl: string;
	trust: number;
};
interface Props {
	contact: Contact;
}

export default function SearchContactCard({ contact }: Props): ReactElement {
	const { trust, fullName, profileImageUrl } = contact;
	return (
		<>
			<div className="card-upper">
				<ProgressBar trust={trust} profileImageUrl={profileImageUrl} />
				<div className="card-user-details">
					<h5 className="card-user-name">{fullName}</h5>
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
	);
}
