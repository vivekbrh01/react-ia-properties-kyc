import React, { useState } from "react";
import { Box, Card, Stack, Button } from "@mui/material";

import ImageLinks from "../../utils/ImagesLinks";
import "./Agreement.css";
import "../RegistrationForm/RegistrationForm.css";
import "../../App.css";

function Agreement({ setSelectedIndex }) {
	const [isChecked, setIsChecked] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = () => {
		setIsSubmitted(true);
		setSelectedIndex(3);
	};
	return (
		<div className="sign-up-wrapper">
			<Stack sx={{ height: "100%", width: "100%" }}>
				<Box display="flex" alignItems="center" justifyContent="center">
					<img src={ImageLinks.logo3x} alt="user sign up" className="logo" />
				</Box>
				<Box
					display="flex"
					alignItems="center"
					justifyContent="center"
					sx={{ marginLeft: "32px" }}
				>
					<Box
						display="flex"
						alignItems="center"
						justifyContent="center"
						sx={{
							background: "#FFFFFF",
							boxShadow: "6px 6px 36px rgba(0, 0, 0, 0.06)",
							borderRadius: "10px",
							width: "1100px",
							minWidth: "1100px",
							MaxWidth: "1100px",
							marginTop: "30px",
						}}
					>
						<p className="step-completed">1</p>
						<p className="step-title">Registration Form</p>
						<img src={ImageLinks.lineBlue} alt="line" className="line-blue" />
						<p className="step-completed">2</p>
						<p className="step-title">Ekyc</p>
						<img src={ImageLinks.lineBlue} alt="line" className="line-blue" />
						<p className={isSubmitted && isChecked ? "step-completed" : "step"}>
							3
						</p>
						<p className="step-title">Agreement</p>
					</Box>
				</Box>
				<Box
					display="flex"
					alignItems="center"
					justifyContent="center"
					sx={{ marginTop: "70px", marginBottom: "35px" }}
					gap={10}
				>
					<Box>
						<Card
							sx={{
								padding: "35px 55px 35px 35px",
								width: "500px",
								borderRadius: "30px",
							}}
						>
							<Box display="flex" alignItems="center" justifyContent="center">
								<p className="agreement-title">Agreement</p>
							</Box>
							<p className="agreement-subtitle">1. Introductory Guidelines</p>
							<p className="agreement-description">
								It is a long established fact that a reader will be distracted
								by the readable content of a page when looking at its layout.
								The point of using Lorem Ipsum is that it has a more-or-less
								normal distribution of letters, as opposed to using 'Content
								here, content here',
							</p>
							<p className="agreement-subtitle">2. Introductory Guidelines</p>
							<p className="agreement-description">
								It is a long established fact that a reader will be distracted
								by the readable content of a page when looking at its layout.
								The point of using Lorem Ipsum is that it has a more-or-less
								normal distribution of letters, as opposed to using 'Content
								here, content here',
							</p>
							<p className="agreement-description">
								Lorem ipsum is that it has a more-or-less normal distribution of
								letters, as opposed to using 'Content here, content here',
							</p>

							<Box className="accept-tc">
								{isChecked ? (
									<img
										src={ImageLinks.checkbox}
										alt="checkbox"
										onClick={() => setIsChecked(false)}
										className="checkbox"
									/>
								) : (
									<input
										type="checkbox"
										name="checkbox"
										id="checkbox"
										onClick={() => setIsChecked(true)}
									/>
								)}
								I accept the &nbsp; <span>Terms and conditions</span>
							</Box>
							<Box
								mt={2}
								display="flex"
								alignItems="center"
								justifyContent="center"
								onClick={() => handleSubmit()}
							>
								<Button
									className="submit-btn"
									variant="contained"
									type="submit"
									disabled={isChecked ? false : true}
								>
									Submit
								</Button>
							</Box>
						</Card>
					</Box>
				</Box>
			</Stack>
		</div>
	);
}

export default Agreement;
