import { DragEvent } from "react";
import {
	Card,
	CardActionArea,
	CardContent,
	CardActions,
	Typography,
} from "@mui/material";

import { Entry } from "../../../interfaces";
import { useUIContext } from "../../../context/ui/UIContext";

interface EntryProps {
	entry: Entry;
}

export const EntryItem = ({ entry }: EntryProps) => {
	// const [];

	const { isDragging, setStartDragging, setEndDragging } = useUIContext();

	const onDragStart = (event: DragEvent<HTMLDivElement>) => {
		event.dataTransfer.setData("id", entry._id);
		setStartDragging();
	};

	const onDragEnd = () => {
		setEndDragging();
	};
	return (
		<Card
			sx={{ marginBottom: 1 }}
			draggable
			onDragStart={onDragStart}
			onDragEnd={onDragEnd}
		>
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
