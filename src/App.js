import React, { useState } from "react";
import "./App.css";
import Properties from "./components/Properties/Properties";
import Signup from "./components/Signup";

function App() {
	const [isAuth, setIsAuth] = useState(true);

	return (
		<div className="App">
			{isAuth ? <Properties /> : <Signup setIsAuth={setIsAuth} />}
		</div>
	);
}

export default App;
