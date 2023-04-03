import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import ImageLinks from "../../utils/ImagesLinks";
import { drawerData } from "../../utils/enums";
import "./ResponsiveDrawer.css";

function ResponsiveDrawer({ window, selectedIndex, setSelectedIndex }) {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleListItemClick = (index) => {
		setSelectedIndex(index);
		setMobileOpen(false);
	};
	const handleDrawerToggle = () => {
		setMobileOpen((prev) => !prev);
	};

	const drawer = (
		<div className="drawer-responsive">
			<img src={ImageLinks.logo1x} alt="logo" className="drawer-logo" />
			<Divider sx={{ margin: "0px 12px" }} />
			<List>
				{drawerData.map((text, index) => (
					<ListItem
						key={text.title}
						disablePadding
						onClick={() => handleListItemClick(index)}
						sx={
							selectedIndex === index
								? { backgroundColor: "rgba(0, 0, 0, 0.1)" }
								: {}
						}
					>
						<ListItemButton>
							<ListItemIcon sx={{ minWidth: "32px", marginLeft: "10px" }}>
								<img
									src={text.imageLink}
									alt="drawer-icon"
									className="drawer-icon"
								/>
							</ListItemIcon>
							<ListItemText primary={text.title} sx={{ color: "#0A3A67" }} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<List sx={{ marginTop: "40px" }}>
				<ListItem key="Logout" disablePadding>
					<ListItemButton>
						<ListItemIcon sx={{ minWidth: "32px", marginLeft: "10px" }}>
							<img
								src={ImageLinks.logoutIcon}
								alt="drawer-icon"
								className="drawer-icon"
							/>
						</ListItemIcon>
						<ListItemText primary="Logout" sx={{ color: "#75013D" }} />
					</ListItemButton>
				</ListItem>
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<Box
				component="nav"
				sx={{ width: { sm: 400 }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={() => handleDrawerToggle()}
						sx={{ mr: 2, display: { sm: "none" } }}
					>
						<MenuIcon />
					</IconButton>
				</Toolbar>

				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={() => handleDrawerToggle()}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: 200,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: 200,
							height: 680,
							backgroundColor: "#FFFFFF",
							borderTop: "1px solid rgba(0, 0, 0, 0.12)",
							borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
							borderRadius: "0px 40px 40px 0px",
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
		</Box>
	);
}

ResponsiveDrawer.propTypes = {
	window: PropTypes.func,
};

export default ResponsiveDrawer;
