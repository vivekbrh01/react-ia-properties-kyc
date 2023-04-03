import { Card, Divider } from "@mui/material";
import React from "react";

import PropertiesHeader from "../PropertiesHeader/PropertiesHeader";

import "./PropertyDetails.css";
import ImageLinks from "../../utils/ImagesLinks";
import { nearbyProperties, financing } from "../../utils/enums";
import { ReactComponent as Healthcare } from "../../assets/images/properties/healthcare.svg";

function PropertyDetails({ selectedProperty }) {
	console.log(selectedProperty, "selectedProperty");
	return (
		<div className="property-details-wrapper">
			<PropertiesHeader page="properties-details" />
			<Card className="property-card">
				<div className="hero-section">
					<h3 className="hero-heading">Property Details</h3>
					<div className="flex align-center">
						<div className="w-50">
							<img src={ImageLinks.banner} alt="banner" className="banner" />
						</div>
						<div className="w-50">
							<div className="hero-list-item flex align-center justify-between pb-20">
								<div className="color-lightBlue f-16">Property Id</div>
								<div className="color-blue fw-500 f-16">
									{selectedProperty.id}
								</div>
							</div>
							<div className="hero-list-item flex align-center justify-between pb-20">
								<div className="color-lightBlue f-16">Property Type </div>
								<div className="color-blue fw-500 f-16">
									{selectedProperty.type}
								</div>
							</div>
							<div className="hero-list-item flex align-center justify-between pb-20">
								<div className="color-lightBlue f-16">
									Project/ Society Type
								</div>
								<div className="color-blue fw-500 f-16">
									{selectedProperty.projectSociety}
								</div>
							</div>
							<div className="hero-list-item flex align-center justify-between pb-20">
								<div className="color-lightBlue f-16">Occupancy Status </div>
								<div className="color-blue fw-500 f-16">
									{selectedProperty.occupancy}
								</div>
							</div>
							<div className="hero-list-item flex align-center justify-between pb-20">
								<div className="color-lightBlue f-16">Location</div>
								<div className="color-blue fw-500 f-16">
									{selectedProperty.branch}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="about-section pb-16">
					<h4 className="f-16 fw-500 color-blue">About property</h4>
					<p className="property-description f-16 fw-500 color-blue p-16 pb-30">
						Lörem ipsum anita Samuelsson nuskade nusk i promotiv. Pia Bergman
						queerpolska. Nevis metates. Margareta Ali lager. Blattesvenska
						termotologi nugårar. Bens sper.
					</p>
				</div>
				<div className="specifications-section p-30">
					<div className="property-details flex align-center justify-between">
						{selectedProperty?.propertyDetails?.map((detail, index) => {
							console.log(detail.title, detail.subtitle);
							return (
								<div className="" key={index}>
									<p className="f-14 color-lightBlue">{detail.title}</p>
									<p className="f-16 color-blue fw-500">{detail.subtitle}</p>
								</div>
							);
						})}
					</div>
					<div className="property-sub-details flex align-center justify-between">
						{selectedProperty?.propertySubDetails?.map((sub, index) => {
							return (
								<div className="" key={index}>
									<p className="f-14 color-lightBlue">{sub.title}</p>
									<p className="f-16 color-blue fw-500">{sub.unit}</p>
								</div>
							);
						})}
					</div>
					<div className="flex gap-16">
						<div className="covered-parking box-group flex align-center justify-between w-30">
							{selectedProperty?.coveredParking?.map((el, index) => {
								return (
									<>
										<div key={index} className="p-20">
											<p className="f-14 color-lightBlue m-0">{el.title}</p>
											<p className="f-16 color-blue fw-500 m-0">{el.value}</p>
										</div>
										{index === 0 ? (
											<Divider orientation="vertical" flexItem />
										) : (
											""
										)}
									</>
								);
							})}
						</div>
						<div className="open-parking box-group flex align-center justify-between w-30">
							{selectedProperty?.openParking?.map((el, index) => {
								return (
									<>
										<div key={index} className="p-20">
											<p className="f-14 color-lightBlue m-0">{el.title}</p>
											<p className="f-16 color-blue fw-500 m-0">{el.value}</p>
										</div>
										{index === 0 ? (
											<Divider orientation="vertical" flexItem />
										) : (
											""
										)}
									</>
								);
							})}
						</div>
						<div className="lift box-group flex align-center justify-between w-30">
							{selectedProperty?.lift?.map((el, index) => {
								return (
									<>
										<div key={index} className="p-20">
											<p className="f-14 color-lightBlue m-0">{el.title}</p>
											<p className="f-16 color-blue fw-500 m-0">{el.value}</p>
										</div>
										{index === 0 ? (
											<Divider orientation="vertical" flexItem />
										) : (
											""
										)}
									</>
								);
							})}
						</div>
					</div>
					<div className="flex">
						<div className="neighbourhood-card w-50 mr-28">
							<h4 className="f-16 fw-500 color-lightBlue">
								Preferred Neighbourhood
							</h4>
							<div className="flex gap-8 justify-between">
								{selectedProperty?.neighbourhood?.map((el, i) => {
									return (
										<div
											className="image-text-card flex-column align-center justify-center"
											key={i}
										>
											<Healthcare />
											<div className="neighbourhood-text f-12 color-lightBlue pt-10">
												{el.title}
											</div>
										</div>
									);
								})}
							</div>
						</div>
						<div className="amenities-card w-50">
							<h4 className="f-16 fw-500 color-lightBlue">
								Amenities{" "}
								<span className="f-14 fw-400 color-blue underline">Edit</span>
							</h4>
							<div className="flex gap-8 justify-between">
								{selectedProperty?.amenities?.map((el, i) => {
									return (
										<div
											className="image-text-card flex-column align-center justify-center"
											key={i}
										>
											<img
												src={el.image}
												alt="icons"
												className="amenities-icon"
											/>
											<div className="neighbourhood-text f-12 color-lightBlue pt-10">
												{el.title}
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
				<div className="bottom-cards flex align-center justify-between gap-8 mt-30">
					<div className="specifications-section w-50 p-30">
						<div className="nearby-section">
							<div className="flex justify-between align-center">
								<h4 className="f-16 fw-500 color-blue">Nearby Places</h4>
								<h4 className="f-14 fw-500 color-maroon underline">
									View More
								</h4>
							</div>
							<div className="flex justify-between">
								{nearbyProperties?.map((property, index) => {
									return (
										<div className="nearby-section-card" key={index}>
											<img
												src={property.image}
												alt="property-icon"
												className="nearby-section-card-image"
											/>
											<div className="f-12 color-blue fw-500">
												{property.title}
											</div>
											<div className="f-12 color-lightBlue fw-400">
												{property.subtitle}
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div className="specifications-section w-50 p-30">
						<div className="financing-section">
							<div className="flex justify-between align-center">
								<h4 className="f-16 fw-500 color-blue">Nearby Places</h4>
								<h4 className="f-14 fw-500 color-maroon underline">
									View More
								</h4>
							</div>
							<div className="flex justify-between">
								{financing?.map((item, index) => {
									return (
										<div className="nearby-section-card" key={index}>
											<img
												src={item.image}
												alt="property-icon"
												className="finance-section-card-image"
											/>
											<div className="f-12 color-blue fw-500">{item.title}</div>
											<div className="f-12 color-lightBlue fw-400">
												{item.subtitle}
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
}

export default PropertyDetails;
