import {
	Card,
	CardActionArea,
	CardContent,
	CardActions,
	Typography,
} from "@mui/material";

import { Entry } from "../../../interfaces";

interface EntryProps {
	entry: Entry;
}

export const EntryItem = ({ entry }: EntryProps) => {
	return (
		<Card sx={{ marginBottom: 1 }}>
			<CardActionArea>
				<CardContent>
					<Typography sx={{ whiteSpace: "pre-line" }}>
						{entry.description}
					</Typography>
				</CardContent>
				<CardActions
					sx={{ display: "flex", justifyContent: "end", marginRight: "5px" }}
				>
					<Typography variant="body2">30 minutes</Typography>
				</CardActions>
			</CardActionArea>
		</Card>
	);
};
