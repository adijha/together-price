import React from "react";
import "./App.scss";
import Card from "./components/Card";

export default function App() {
  const contact_data = {
    userId: 1234,
    fullName: "Gina Snelly",
    profileImageUrl: "https://randomuser.me/api/portraits/women/55.jpg",
    trust: 75,
  };
  return (
    <div>
      <Card contact={contact_data} />
    </div>
  );
}
