import React from "react";
import {
	Box,
	Card,
	Stack,
	CardContent,
	Button,
	TextField,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import * as yup from "yup";

import ImageLinks from "../../utils/ImagesLinks";
import "./Ekyc.css";
import "../RegistrationForm/RegistrationForm.css";
import "../../App.css";

const theme = createTheme({
	palette: {
		lightGray: {
			main: "#939393",
		},
	},
});

const validationSchema = yup.object({
	aadhaar: yup
		.string("Enter Aadhaar or Mobile Number")
		.required("Phone number is required")
		.min(10, "Number too short")
		.max(16, "Number too long"),
	pin: yup
		.string("Enter your PIN")
		.min(6, "Enter 8 digi pin")
		.max(6, "Enter 8 digi pin")
		.required("PIN is required"),
});

function Ekyc({ setPageCount }) {
	const formik = useFormik({
		initialValues: {
			aadhaar: "",
			pin: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			setPageCount(2);
		},
	});

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
						className="steps-wrapper"
					>
						<p className="step-completed">1</p>
						<p className="step-title">Registration Form</p>
						<img src={ImageLinks.lineBlue} alt="line" className="line-blue" />
						<p className="step">2</p>
						<p className="step-title">Ekyc</p>
						<img src={ImageLinks.lineBlue} alt="line" className="line-blue" />
						<p className="step">3</p>
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
					<Box sx={{ width: "100%" }}>
						<ThemeProvider theme={theme}>
							<form onSubmit={formik.handleSubmit}>
								<Card
									sx={{
										padding: {
											xs: "0px",
											sm: "35px 55px 35px 35px",
											md: "35px 55px 35px 35px",
											lg: "35px 55px 35px 35px",
										},
										width: {
											xs: "100%",
											sm: "40%",
											md: "40%",
											lg: "40%",
										},
										margin: "0 auto",
										borderRadius: "30px",
									}}
								>
									<CardContent>
										<Box
											display="flex"
											alignItems="center"
											justifyContent="center"
										>
											<img
												src={ImageLinks.digiLocker}
												alt="digilocker"
												className="digiLocker"
											/>
										</Box>
										<Box mt={2}>
											<TextField
												sx={{ fontSize: "15px" }}
												color="lightGray"
												label="Aadhaar/Mobile Number*"
												variant="outlined"
												fullWidth
												id="aadhaar"
												name="aadhaar"
												value={formik.values.aadhaar}
												onChange={formik.handleChange}
												error={
													formik.touched.aadhaar &&
													Boolean(formik.errors.aadhaar)
												}
												helperText={
													formik.touched.aadhaar && formik.errors.aadhaar
												}
											/>
										</Box>
										<Box mt={4}>
											<TextField
												sx={{ fontSize: "15px" }}
												color="lightGray"
												label="6 digit security PIN*"
												variant="outlined"
												type="password"
												fullWidth
												id="pin"
												name="pin"
												value={formik.values.pin}
												onChange={formik.handleChange}
												error={formik.touched.pin && Boolean(formik.errors.pin)}
												helperText={formik.touched.pin && formik.errors.pin}
											/>
										</Box>
										<p className="forgot-pin">Forgot security PIN?</p>
									</CardContent>
									<Box
										mt={2}
										display="flex"
										alignItems="center"
										justifyContent="center"
									>
										<Button
											className="signIn"
											variant="contained"
											type="submit"
										>
											Sign In
										</Button>
									</Box>

									<Box className="ekyc-bottom-text">
										<span>Don’t have an account?</span>
										<a
											href="https://indiassetz.com/"
											className="ekyc-bottom-text-strong"
										>
											Sign Up
										</a>
									</Box>
								</Card>
							</form>
						</ThemeProvider>
					</Box>
				</Box>
			</Stack>
		</div>
	);
}

export default Ekyc;
