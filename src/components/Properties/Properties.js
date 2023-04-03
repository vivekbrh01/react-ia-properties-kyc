import React, { useState } from "react";

import ResponsiveDrawer from "../ResponsiveDrawer/ResponsiveDrawer";
import ListProperties from "../ListProperties";
import "./Properties.css";
import PropertyDetails from "../PropertyDetails/PropertyDetails";
import AddKyc from "../AddKyc/AddKyc";

function Properties() {
	const [selectedIndex, setSelectedIndex] = useState(3);
	const [selectedProperty, setSelectedProperty] = useState({});
	const [addKyc, setAddKyc] = useState(true);

	return (
		<div className="properties-wrapper">
			<div className="bg-image">
				{addKyc === false ? (
					<ResponsiveDrawer
						selectedIndex={selectedIndex}
						setSelectedIndex={setSelectedIndex}
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
					/>
				) : (
					<></>
				)}
				{selectedProperty &&
				Object.keys(selectedProperty).length > 0 &&
				addKyc === false ? (
					<PropertyDetails selectedProperty={selectedProperty} />
				) : (
					<></>
				)}
			</div>
			{addKyc ? <AddKyc /> : ""}
		</div>
	);
}

export default Properties;
