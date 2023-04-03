import React, { useState } from "react";

import RegistrationForm from "../RegistrationForm";

import "./AddKyc.css";
import "../../App.css";

function AddKyc() {
	const [pageCount, setPageCount] = useState(0);

	return (
		<div className="sign-up-wrapper">
			{pageCount === 0 ? (
				<RegistrationForm pageCount={pageCount} setPageCount={setPageCount} />
			) : (
				""
			)}
		</div>
	);
}

export default AddKyc;
