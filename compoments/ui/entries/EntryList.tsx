import { FC, useMemo, DragEvent } from "react";

import { List, Paper } from "@mui/material";
import { Entry, EntryStatus } from "../../../interfaces";
import { EntryItem } from "./";
import { useTaskContext } from "../../../context/entries";
import { useUIContext } from "../../../context/ui";

import styles from "./EntryList.module.css";

interface ListProps {
	status: EntryStatus;
}

export const EntryList: FC<ListProps> = ({ status }) => {
	const { entries, entryStatusUpdated } = useTaskContext();
	const { isDragging, setEndDragging } = useUIContext();

	const entriesFilteredByStatus = useMemo(
		() => entries.filter((entry) => entry.status === status),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[entries]
	);

	const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
		const id = event.dataTransfer.getData("id");
		const currentEntry = entries.find((entry) => entry._id === id)!;

		currentEntry.status = status;

		entryStatusUpdated(currentEntry);

		setEndDragging();
	};
	const allowDrop = (event: DragEvent<HTMLDivElement>) => {
		event.preventDefault();
	};

	return (
		<div
			onDrop={onDropEntry}
			onDragOver={allowDrop}
			className={isDragging ? styles.dragging : ""}
		>
			<Paper
				sx={{
					height: "calc(100vh - 100px)",
					overflowY: "scroll",
					"&::-webkit-scrollbar": { display: "none" },
					backgroundColor: "transparent",
					padding: 1,
				}}
			>
				<List sx={{ opacity: isDragging ? 0.3 : 1, transition: "all 0.3s" }}>
					{entriesFilteredByStatus.map((entry: Entry) => {
						return <EntryItem key={entry._id} entry={entry} />;
					})}
				</List>
			</Paper>
		</div>
	);
};
