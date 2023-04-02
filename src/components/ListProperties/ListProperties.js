import React from "react";
import {
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	ListItemButton,
} from "@mui/material";

import "./ListProperties.css";
import { propertiesData } from "../../utils/enums";
import ImageLinks from "../../utils/ImagesLinks";

function ListProperties() {
	return (
		<div className="list-properties-wrapper">
			<List className="heading-item-wrapper">
				<ListItem>
					<ListItemText className="heading-id">Property Id</ListItemText>
					<ListItemText className="heading-title">Title</ListItemText>
					<ListItemText className="heading-branch">Branch</ListItemText>
					<ListItemText className="heading-transaction">
						Transaction Type
					</ListItemText>
					<ListItemText className="heading-time">
						Added Date & Time
					</ListItemText>
					<ListItemText className="heading-status">Status</ListItemText>
					<ListItemText className="heading-chat">Chat</ListItemText>
				</ListItem>
			</List>
			{propertiesData?.map((data) => {
				return (
					<List key={data.id} className="list-item-wrapper">
						<ListItem>
							<ListItemText className="list-id">{data.id}</ListItemText>
							<ListItemText className="list-title">{data.title}</ListItemText>
							<ListItemText className="branch">{data.branch}</ListItemText>
							<ListItemText className="transaction">
								{data.transactionType}
							</ListItemText>
							<ListItemText className="time">{data.time}</ListItemText>
							<ListItemButton
								className="status-button"
								sx={{
									backgroundColor: data.bgColor,
									color: data.color,
									borderColor: data.color,
								}}
							>
								<ListItemText className="status">{data.status}</ListItemText>
								<ListItemIcon className="status-icon">
									<img src={data.statusArrowDown} alt="arrow-down" />
								</ListItemIcon>
							</ListItemButton>
							<ListItemButton className="chat-button">
								<ListItemIcon className="chat-icon">
									<img src={ImageLinks.chatIcon} alt="chat-icon" />
								</ListItemIcon>
							</ListItemButton>
						</ListItem>
					</List>
				);
			})}
		</div>
	);
}

export default ListProperties;
