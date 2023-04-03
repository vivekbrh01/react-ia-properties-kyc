import React from "react";
import {
	Box,
	Card,
	Stack,
	CardContent,
	Button,
	TextField,
	OutlinedInput,
	InputAdornment,
	IconButton,
} from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import * as yup from "yup";

import ImageLinks from "../../utils/ImagesLinks";
import "./RegistrationForm.css";
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
});

function RegistrationForm({ setPageCount }) {
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
			setPageCount(1);
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
						<p className="step">1</p>
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
					sx={{
						marginTop: { xs: "12px", sm: "30px", md: "30px", lg: "30px" },

						marginBottom: { xs: "12px", sm: "30px", md: "30px", lg: "30px" },
						display: "flex",
						flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
						alignItems: "center",
						justifyContent: "center",
						gap: "10px",
					}}
				>
					<Box>
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
										borderRadius: "30px",
										width: "100%",
									}}
								>
									<CardContent>
										<p className="page-title">Registration Form </p>
										<Box
											sx={{
												marginTop: {
													xs: "4px",
													sm: "16px",
													md: "16px",
													lg: "16px",
												},
												display: "flex",
												flexDirection: {
													xs: "column",
													sm: "row",
													md: "row",
													lg: "row",
												},
												alignItems: "center",
												justifyContent: "space-between",
											}}
										>
											<Box className="pic-box">
												<img
													src={ImageLinks.uploadPic}
													alt="upload-pic"
													className="upload-pic"
												/>
											</Box>
											<Box
												sx={{
													width: {
														xs: "100%",
														sm: "70%",
														md: "70%",
														lg: "70%",
													},
												}}
											>
												<Box
													sx={{
														flexDirection: {
															xs: "column",
															sm: "row",
															md: "row",
															lg: "row",
														},
														width: { xs: "100%" },
													}}
													display="flex"
													justifyContent="space-between"
													gap="29px"
												>
													<Box
														sx={{
															width: {
																xs: "100%",
																sm: "300px",
																md: "300px",
																lg: "300px",
															},
														}}
													>
														<p className="field-title mt-0">Name</p>
														<TextField
															sx={{ fontSize: "15px" }}
															color="lightGray"
															label=""
															placeholder="Type Here"
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
																formik.touched.firstName &&
																formik.errors.firstName
															}
														/>
													</Box>
													<Box
														sx={{
															width: {
																xs: "100%",
																sm: "300px",
																md: "300px",
																lg: "300px",
															},
														}}
													>
														<p className="field-title mt-0">Contact</p>
														<TextField
															sx={{ fontSize: "15px" }}
															color="lightGray"
															label=""
															placeholder="Enter Number"
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
												</Box>
												<Box
													sx={{
														flexDirection: {
															xs: "column",
															sm: "row",
															md: "row",
															lg: "row",
														},
														width: { xs: "100%" },
													}}
													display="flex"
													alignItems="center"
													justifyContent="space-between"
													gap="29px"
													mt={2}
												>
													<Box
														sx={{
															width: {
																xs: "100%",
																sm: "300px",
																md: "300px",
																lg: "300px",
															},
														}}
													>
														<p className="field-title mt-0">Email</p>
														<TextField
															sx={{ fontSize: "15px" }}
															color="lightGray"
															label=""
															placeholder="Enter client email"
															variant="outlined"
															fullWidth
															id="email"
															name="email"
															value={formik.values.email}
															onChange={formik.handleChange}
															error={
																formik.touched.email &&
																Boolean(formik.errors.email)
															}
															helperText={
																formik.touched.email && formik.errors.email
															}
														/>
													</Box>
													<Box
														sx={{
															width: {
																xs: "100%",
																sm: "300px",
																md: "300px",
																lg: "300px",
															},
														}}
													>
														<p className="field-title mt-0">Gender</p>
														<OutlinedInput
															fullWidth
															color="lightGray"
															id="gender"
															name="gender"
															placeholder="Select option"
															value={formik.values.password}
															onChange={formik.handleChange}
															type="text"
															endAdornment={
																<InputAdornment position="end">
																	<IconButton
																		edge="end"
																		sx={{ paddingRight: "16px" }}
																	>
																		<img
																			className="arrow-down"
																			src={ImageLinks.arrowDownBlue}
																			alt="arrow-down"
																		/>
																	</IconButton>
																</InputAdornment>
															}
															label=""
														/>
													</Box>
												</Box>
											</Box>
										</Box>
										<Box
											sx={{
												flexDirection: {
													xs: "column",
													sm: "row",
													md: "row",
													lg: "row",
												},
											}}
											display="flex"
											alignItems="center"
											justifyContent="space-between"
											gap="29px"
											mt={2}
										>
											<Box sx={{ width: "100%" }}>
												<p className="field-title">Country</p>
												<OutlinedInput
													fullWidth
													color="lightGray"
													id="Country"
													name="Country"
													placeholder="Select client Country"
													value={formik.values.password}
													onChange={formik.handleChange}
													type="text"
													endAdornment={
														<InputAdornment position="end">
															<IconButton
																edge="end"
																sx={{ paddingRight: "16px" }}
															>
																<img
																	className="arrow-down"
																	src={ImageLinks.arrowDownBlue}
																	alt="arrow-down"
																/>
															</IconButton>
														</InputAdornment>
													}
													label=""
												/>
											</Box>
											<Box sx={{ width: "100%" }}>
												<p className="field-title">Country</p>
												<OutlinedInput
													fullWidth
													color="lightGray"
													id="Country"
													name="Country"
													placeholder="Select client Country"
													type="text"
													endAdornment={
														<InputAdornment position="end">
															<IconButton
																edge="end"
																sx={{ paddingRight: "16px" }}
															>
																<img
																	className="arrow-down"
																	src={ImageLinks.arrowDownBlue}
																	alt="arrow-down"
																/>
															</IconButton>
														</InputAdornment>
													}
													label=""
												/>
											</Box>
											<Box sx={{ width: "100%" }}>
												<p className="field-title">Country</p>
												<OutlinedInput
													fullWidth
													color="lightGray"
													id="Country"
													name="Country"
													placeholder="Select client Country"
													value={formik.values.password}
													onChange={formik.handleChange}
													type="text"
													endAdornment={
														<InputAdornment position="end">
															<IconButton
																edge="end"
																sx={{ paddingRight: "16px" }}
															>
																<img
																	className="arrow-down"
																	src={ImageLinks.arrowDownBlue}
																	alt="arrow-down"
																/>
															</IconButton>
														</InputAdornment>
													}
													label=""
												/>
											</Box>
										</Box>
										<Box>
											<p className="field-title">Address</p>
											<TextField
												sx={{ fontSize: "15px", height: "76px" }}
												color="lightGray"
												label=""
												placeholder="Type Your Address Here"
												variant="outlined"
												fullWidth
												id="Address"
												name="Address"
												value={formik.values.address}
											/>
										</Box>
										<Box>
											<p>Service</p>
											<Box
												className="service-box"
												display="flex"
												alignItems="center"
												justifyContent="space-between"
												sx={{
													flexWrap: {
														xs: "wrap",
													},
												}}
											>
												<Box className="service-btn">Painting</Box>
												<Box className="service-btn">AC / Geyser Service</Box>
												<Box className="service-btn">Electrical Service</Box>
												<Box className="service-btn">Plumbing Service</Box>
												<Box className="service-btn">Sanitation Service</Box>
											</Box>
										</Box>
									</CardContent>
									<Box
										sx={{
											flexDirection: {
												xs: "column",
												sm: "row",
												md: "row",
												lg: "row",
											},
										}}
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
											Submit
										</Button>
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

export default RegistrationForm;
