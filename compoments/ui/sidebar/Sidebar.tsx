import { useUIContext } from "../../../context/ui";

import { AiOutlineInbox, AiOutlineMail } from "react-icons/ai";

import {
	Box,
	Drawer,
	Typography,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Divider,
} from "@mui/material";

const menuItems: string[] = ["Inbox", "Starred", "Send Email", "Drafts"];

export const Sidebar = () => {
	const { isSideMenuOpen, closeSideMenu } = useUIContext();

	return (
		<Drawer anchor="left" open={isSideMenuOpen} onClose={() => closeSideMenu()}>
			<Box sx={{ width: [250] }}>
				<Box sx={{ padding: "5px 10px" }}>
					<Typography variant="h4" fontSize="1.25rem">
						Menu
					</Typography>
				</Box>
				<List>
					{menuItems.map((text, index) => {
						return (
							<ListItem button key={index}>
								<ListItemIcon>
									{index % 2 ? <AiOutlineInbox /> : <AiOutlineMail />}
								</ListItemIcon>
								<ListItemText>{text}</ListItemText>
							</ListItem>
						);
					})}
				</List>
				<Divider />
			</Box>
		</Drawer>
	);
};
