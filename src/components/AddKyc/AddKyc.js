import React, { useState } from "react";

import RegistrationForm from "../RegistrationForm";

import "./AddKyc.css";
import "../../App.css";
import Ekyc from "../Ekyc/Ekyc";
import Agreement from "../Agreement/Agreement";

function AddKyc({ setSelectedIndex }) {
	const [pageCount, setPageCount] = useState(0);

	return (
		<div className="sign-up-wrapper">
			{pageCount === 0 ? (
				<RegistrationForm pageCount={pageCount} setPageCount={setPageCount} />
			) : (
				""
			)}
			{pageCount === 1 ? <Ekyc setPageCount={setPageCount} /> : ""}
			{pageCount === 2 ? (
				<Agreement
					setPageCount={setPageCount}
					setSelectedIndex={setSelectedIndex}
				/>
			) : (
				""
			)}
		</div>
	);
}

export default AddKyc;
