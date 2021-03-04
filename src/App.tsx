import React from "react";
import "./App.scss";
import SearchContactCard from "./components/SearchContactCard";

export default function App() {
	const contact_data = {
		userId: 1234,
		fullName: "Gina Snelly",
		profileImageUrl: "https://randomuser.me/api/portraits/women/14.jpg",
		trust: 75,
	};
	return (
		<div className="home-container" >
			<SearchContactCard contact={contact_data} />
		</div>
	);
}
