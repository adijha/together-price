import React, { ReactElement } from "react";
import AddButton from "../AddButton/AddButton";
import TrustBar from "../TrustBar/TrustBar";
import MaterialUiTrustBar from "../TrustBar/MaterialUiTrustBar";
import "./searchContactCard.scss";

type Contact = {
	fullName: string;
	userId: number;
	profileImageUrl: string;
	trust: number;
};
interface Props {
	contact: Contact;
	material: boolean;
}

export default function SearchContactCard({
	contact,
	material,
}: Props): ReactElement {
	const { trust, fullName, profileImageUrl } = contact;
	return (
		<div>
			<div className="card-upper">
				{material ? (
					<MaterialUiTrustBar trust={trust} profileImageUrl={profileImageUrl} />
				) : (
					<TrustBar trust={trust} profileImageUrl={profileImageUrl} />
				)}
				<div className="card-user-details">
					<h5 className="card-user-name">{fullName}</h5>
					<p className="card-user-desc">nessuna connessione</p>
				</div>
				<AddButton />
			</div>
			<div className="card-lower-section">
				<p className="card-lower-text">
					Sta già condividendo <b>Disney Plus</b>
				</p>
			</div>
		</div>
	);
}
