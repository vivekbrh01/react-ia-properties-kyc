import React, { useState } from "react";
import {
	Box,
	Card,
	Stack,
	CardContent,
	Button,
	Typography,
	TextField,
	FormControl,
	InputLabel,
	OutlinedInput,
	InputAdornment,
	IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import * as yup from "yup";

import ImageLinks from "../../utils/ImagesLinks";
import "./Signup.css";
import "../../App.css";

const theme = createTheme({
	palette: {
		lightGray: {
			main: "#939393",
		},
	},
});

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
	firstName: yup
		.string()
		.min(4, "Enter minimum 4 characters")
		.required("First Name is required"),
	lastName: yup
		.string("Enter your Last Name")
		.min(4, "Enter minimum 4 characters")
		.required("Last Name is required"),
	email: yup
		.string("Enter your email")
		.email("Enter a valid email")
		.required("Email is required"),
	phoneNumber: yup
		.string()
		.required("Phone number is required")
		.matches(phoneRegExp, "Phone number is not valid")
		.min(10, "Number too short")
		.max(10, "Number too long"),
	password: yup
		.string("Enter your password")
		.min(8, "Enter minimum 8 characters")
		.required("Password is required"),
});

function Signup({ setIsAuth }) {
	const [showPassword, setShowPassword] = useState(false);

	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			phoneNumber: "",
			password: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			setIsAuth(true);
			console.log(JSON.stringify(values));
		},
	});

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
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
					sx={{
						marginTop: { xs: "24px", sm: "70px", md: "70px", lg: "70px" },
						marginBottom: "35px",
						flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
						gap: { xs: 2, sm: 10, md: 10, lg: 10 },
					}}
				>
					<Box>
						<img
							src={ImageLinks.signupLeft2x}
							alt="user sign up"
							className="left-image"
						/>
					</Box>
					<Box>
						<ThemeProvider theme={theme}>
							<form onSubmit={formik.handleSubmit}>
								<Card
									sx={{
										padding: {
											xs: "20px 32px 20px 20px",
											sm: "35px 55px 35px 35px",
											md: "35px 55px 35px 35px",
											lg: "35px 55px 35px 35px",
										},
										width: {
											xs: "300px",
											sm: "445px",
											md: "445px",
											lg: "445px",
										},
										margin: { xs: "0px auto" },
										borderRadius: "30px",
									}}
								>
									<CardContent>
										<Typography
											sx={{
												color: "#6684A1",
												fontWeight: 400,
												fontSize: "20px",
											}}
										>
											Login With
										</Typography>
										<Typography
											sx={{
												color: "#0A3A67",
												fontWeight: 600,
												fontSize: "28px",
											}}
										>
											Sign up
										</Typography>

										<Box
											display="flex"
											alignItems="center"
											justifyContent="space-between"
											gap="29px"
											mt={2}
										>
											<TextField
												sx={{ fontSize: "15px" }}
												color="lightGray"
												label="First Name"
												variant="outlined"
												fullWidth
												id="firstName"
												name="firstName"
												value={formik.values.firstName}
												onChange={formik.handleChange}
												error={
													formik.touched.firstName &&
													Boolean(formik.errors.firstName)
												}
												helperText={
													formik.touched.firstName && formik.errors.firstName
												}
											/>
											<TextField
												sx={{ fontSize: "15px" }}
												color="lightGray"
												label="Last Name"
												variant="outlined"
												fullWidth
												id="lastName"
												name="lastName"
												value={formik.values.lastName}
												onChange={formik.handleChange}
												error={
													formik.touched.lastName &&
													Boolean(formik.errors.lastName)
												}
												helperText={
													formik.touched.lastName && formik.errors.lastName
												}
											/>
										</Box>
										<Box mt={2}>
											<TextField
												sx={{ fontSize: "15px" }}
												color="lightGray"
												label="Email Address"
												variant="outlined"
												fullWidth
												id="email"
												name="email"
												value={formik.values.email}
												onChange={formik.handleChange}
												error={
													formik.touched.email && Boolean(formik.errors.email)
												}
												helperText={formik.touched.email && formik.errors.email}
											/>
										</Box>
										<Box mt={2}>
											<TextField
												sx={{ fontSize: "15px" }}
												color="lightGray"
												label="Phone Number"
												variant="outlined"
												fullWidth
												id="phoneNumber"
												name="phoneNumber"
												value={formik.values.phoneNumber}
												onChange={formik.handleChange}
												error={
													formik.touched.phoneNumber &&
													Boolean(formik.errors.phoneNumber)
												}
												helperText={
													formik.touched.phoneNumber &&
													formik.errors.phoneNumber
												}
											/>
										</Box>
										<Box mt={2}>
											<FormControl
												sx={{ fontSize: "15px" }}
												variant="outlined"
												color="lightGray"
												fullWidth
											>
												<InputLabel htmlFor="outlined-adornment-password">
													Password
												</InputLabel>
												<OutlinedInput
													id="password"
													name="password"
													value={formik.values.password}
													onChange={formik.handleChange}
													error={
														formik.touched.password &&
														Boolean(formik.errors.password)
													}
													helperText={
														formik.touched.password && formik.errors.password
													}
													type={showPassword ? "text" : "password"}
													endAdornment={
														<InputAdornment position="end">
															<IconButton
																aria-label="toggle password visibility"
																onClick={handleClickShowPassword}
																onMouseDown={handleMouseDownPassword}
																edge="end"
																sx={{ paddingRight: "16px" }}
															>
																{showPassword ? (
																	<VisibilityOff />
																) : (
																	<Visibility />
																)}
															</IconButton>
														</InputAdornment>
													}
													label="Password"
												/>
											</FormControl>
										</Box>
									</CardContent>
									<Box
										mt={2}
										display="flex"
										alignItems="center"
										justifyContent="center"
										// onClick={() => setIsAuth(true)}
									>
										<Button
											className="signup-btn"
											variant="contained"
											type="submit"
										>
											Sign Up
										</Button>
									</Box>
								</Card>
							</form>
							<Box className="card-bottom-text">
								<span>Are you a vendor/ broker?</span>
								<a
									href="https://indiassetz.com/"
									className="card-bottom-text-strong"
								>
									Login / Signup here
								</a>
							</Box>
						</ThemeProvider>
					</Box>
				</Box>
			</Stack>
		</div>
	);
}

export default Signup;
