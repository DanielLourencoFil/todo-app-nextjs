import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { FaBars } from "react-icons/fa";
import { useUIContext } from "../../../context/ui";

export const Navbar = () => {
	const { openSideMenu } = useUIContext();
	return (
		<AppBar position="sticky">
			<Toolbar>
				<IconButton size="large" edge="start" onClick={openSideMenu}>
					<FaBars />
				</IconButton>
				<Typography variant="h6" fontSize="1rem">
					My Todo List
				</Typography>
			</Toolbar>
		</AppBar>
	);
};
