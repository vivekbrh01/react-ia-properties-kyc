import React, { useState } from "react";

import RegistrationForm from "../RegistrationForm";

import "./AddKyc.css";
import "../../App.css";
import Ekyc from "../Ekyc/Ekyc";

function AddKyc() {
	const [pageCount, setPageCount] = useState(1);

	return (
		<div className="sign-up-wrapper">
			{pageCount === 0 ? (
				<RegistrationForm pageCount={pageCount} setPageCount={setPageCount} />
			) : (
				""
			)}
			{pageCount === 1 ? <Ekyc setPageCount={setPageCount} /> : ""}
		</div>
	);
}

export default AddKyc;
