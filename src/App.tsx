import React from "react";
import "./App.scss";
import SearchContactCard from "./components/SearchContactCard";

export default function App() {
	const contact_data = {
		userId: 1234,
		fullName: "Gina Snelly",
		profileImageUrl: "https://randomuser.me/api/portraits/women/24.jpg",
		trust: 80,
	};
	return (
		<div className="home-container">
			<p> With custom css</p>
			<SearchContactCard contact={contact_data} material={false} />
			<br />
			<br />
			<p> With Material UI</p>
			<SearchContactCard contact={contact_data} material={true} />

			<h5 className="italian-greetings">Buona giornata :)</h5>
		</div>
	);
}
