import React, { useState } from "react";
import {
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	ListItemButton,
	Pagination,
} from "@mui/material";

import "./ListProperties.css";
import { propertiesData } from "../../utils/enums";
import ImageLinks from "../../utils/ImagesLinks";
import usePagination from "../../components/hooks/usePagination";
import PropertiesHeader from "../PropertiesHeader/PropertiesHeader";

function ListProperties({ setSelectedProperty, setAddKyc, setSelectedIndex }) {
	const [pageCount, setPageCount] = useState(1);

	const PER_PAGE = 20;

	const _DATA = usePagination(propertiesData, PER_PAGE);

	const handlePageChange = (e, p) => {
		setPageCount(p);
		_DATA.jump(p);
	};

	const handleClickProperty = (data) => {
		setSelectedProperty(data);
	};
	return (
		<div className="list-properties-wrapper">
			<PropertiesHeader
				page="properties-list"
				setAddKyc={setAddKyc}
				setSelectedIndex={setSelectedIndex}
			/>
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
			{_DATA.currentData()?.map((data) => {
				return (
					<List
						key={data.id}
						className="list-item-wrapper"
						onClick={() => handleClickProperty(data)}
					>
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
			<Pagination
				defaultPage={1}
				count={3}
				shape="rounded"
				onChange={(e, value) => handlePageChange(e, value)}
				page={pageCount}
				className="custom-pagination"
			/>
		</div>
	);
}

export default ListProperties;
