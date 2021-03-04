import React from "react";
import "./App.scss";
import SearchContactCard from "./components/SearchContactCard";

export default function App() {
	const contact_data = {
		userId: 1234,
		fullName: "Gina Snelly",
		profileImageUrl: "https://randomuser.me/api/portraits/women/55.jpg",
		trust: 85,
	};
	return (
		<div>
			<SearchContactCard contact={contact_data} />
		</div>
	);
}
