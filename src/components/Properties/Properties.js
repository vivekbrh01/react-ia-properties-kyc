import React, { useState } from "react";

import ResponsiveDrawer from "../ResponsiveDrawer/ResponsiveDrawer";
import ListProperties from "../ListProperties";
import "./Properties.css";

function Properties() {
	const [selectedIndex, setSelectedIndex] = useState(3);

	return (
		<div className="properties-wrapper">
			<div className="bg-image">
				<ResponsiveDrawer
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
				/>
				{selectedIndex === 3 ? <ListProperties /> : <></>}
			</div>
		</div>
	);
}

export default Properties;
