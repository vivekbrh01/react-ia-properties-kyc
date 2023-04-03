import React from "react";

import "./PropertiesHeader.css";
import ImageLinks from "../../utils/ImagesLinks";
function PropertiesHeader({ page }) {
	return (
		<div className="header-main">
			<div className="header-wrapper">
				<div className="header-left-section">
					<div className="arrow-back">
						<img
							src={ImageLinks.arrowBackBlue}
							alt="arrow-back"
							className="arrow-back-icon"
						/>
					</div>
					<div className="search-properties">
						<img src={ImageLinks.search} alt="search" className="search-icon" />
						<input
							type="text"
							name="search"
							id="search"
							placeholder="Search Clients, Properties, Services"
							className="search-input"
						/>
					</div>
					{page === "properties-list" ? (
						<div className="add-kyc-button">
							<img src={ImageLinks.addIcon} alt="add" className="add-icon" />
							<span className="add-kyc-text">KYC</span>
						</div>
					) : (
						<></>
					)}
				</div>
				<div className="header-left-section">
					{page === "properties-list" ? (
						<div className="messages">
							<img
								src={ImageLinks.messageIcon}
								alt="message"
								className="message-icon"
							/>
						</div>
					) : (
						<></>
					)}
					<div className="notifications-button">
						<img src={ImageLinks.bellIcon} alt="bell" className="bell-icon" />
					</div>
					<div className="avatar-wrapper">
						<img src={ImageLinks.avatar} alt="avatar" className="avatar" />
					</div>
				</div>
			</div>
			<div
				className={
					page === "properties-list"
						? "text-banner"
						: "text-banner text-banner-flex"
				}
			>
				{page === "properties-list" ? (
					<>
						<div className="text-banner-heading">Properties</div>
						<div className="text-banner-subheading">Total 60 “All” Records</div>
					</>
				) : (
					<div className="banner-wrapper">
						<div className="text-banner-heading">Karthik’s portfolio</div>
						<div className="banner-buttons">
							<div className="view-properties">View Properties</div>
							<div className="view-orders">View orders </div>
						</div>
					</div>
				)}
			</div>
			<div className="flex-end">
				<div className="filter-button">
					<img
						src={
							page === "properties-list"
								? ImageLinks.filterIcon
								: ImageLinks.editIcon
						}
						alt="filter"
						className="filrer-icon"
					/>
					<span className="filter-text">
						{page === "properties-list" ? "Filter" : "Edit"}
					</span>
				</div>
			</div>
		</div>
	);
}

export default PropertiesHeader;
