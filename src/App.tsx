import "./App.css";
import SignUpForm from "./SignUpForm";
import ThankMessage from "./ThankMessage";
import { useState } from "react";

function App() {
	const [showThankMessage, setShowThankMessage] = useState(false);

	return (
		<div className="min-h-screen bg-blue-700">
			{showThankMessage ? (
				<ThankMessage
					email="abc@gmail.com"
					handleClick={() => {
						setShowThankMessage(false);
					}}
				/>
			) : (
				<SignUpForm successSubmit={() => setShowThankMessage(true)} />
			)}
		</div>
	);
}

export default App;
