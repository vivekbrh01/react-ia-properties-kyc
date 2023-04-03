import React, { useState } from "react";

import ResponsiveDrawer from "../ResponsiveDrawer/ResponsiveDrawer";
import ListProperties from "../ListProperties";
import "./Properties.css";
import PropertyDetails from "../PropertyDetails/PropertyDetails";
import AddKyc from "../AddKyc/AddKyc";

function Properties() {
	const [selectedIndex, setSelectedIndex] = useState(3);
	const [selectedProperty, setSelectedProperty] = useState({});
	const [addKyc, setAddKyc] = useState(false);

	return (
		<div className="properties-wrapper">
			<div className="bg-image">
				{addKyc === false ? (
					<ResponsiveDrawer
						selectedIndex={selectedIndex}
						setSelectedIndex={setSelectedIndex}
						setSelectedProperty={setSelectedProperty}
					/>
				) : (
					""
				)}
				{selectedIndex === 3 &&
				Object.keys(selectedProperty).length === 0 &&
				addKyc === false ? (
					<ListProperties
						setSelectedProperty={setSelectedProperty}
						setAddKyc={setAddKyc}
						setSelectedIndex={setSelectedIndex}
					/>
				) : (
					<></>
				)}
				{selectedProperty &&
				Object.keys(selectedProperty).length > 0 &&
				addKyc === false ? (
					<PropertyDetails
						selectedProperty={selectedProperty}
						setSelectedIndex={setSelectedIndex}
					/>
				) : (
					<></>
				)}
			</div>
			{addKyc ? <AddKyc setSelectedIndex={setSelectedIndex} /> : ""}
		</div>
	);
}

export default Properties;
