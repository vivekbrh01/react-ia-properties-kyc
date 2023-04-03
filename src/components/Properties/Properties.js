import React, { useState } from "react";

import ResponsiveDrawer from "../ResponsiveDrawer/ResponsiveDrawer";
import ListProperties from "../ListProperties";
import "./Properties.css";
import PropertyDetails from "../PropertyDetails/PropertyDetails";

function Properties() {
	const [selectedIndex, setSelectedIndex] = useState(3);

	const [selectedProperty, setSelectedProperty] = useState({});

	return (
		<div className="properties-wrapper">
			<div className="bg-image">
				<ResponsiveDrawer
					selectedIndex={selectedIndex}
					setSelectedIndex={setSelectedIndex}
				/>
				{selectedIndex === 3 && Object.keys(selectedProperty).length === 0 ? (
					<ListProperties setSelectedProperty={setSelectedProperty} />
				) : (
					<></>
				)}
				{selectedProperty && Object.keys(selectedProperty).length > 0 ? (
					<PropertyDetails selectedProperty={selectedProperty} />
				) : (
					<></>
				)}
			</div>
		</div>
	);
}

export default Properties;
