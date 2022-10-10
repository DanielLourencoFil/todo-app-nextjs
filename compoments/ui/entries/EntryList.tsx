import { FC, useMemo } from "react";

import { List, Paper } from "@mui/material";
import { Entry } from "../../../interfaces";
import { EntryItem } from "./";
import { useTaskContext } from "../../../context/entries";

interface ListProps {
	status: string;
	// entries: Entry[];
}

export const EntryList: FC<ListProps> = ({ status }) => {
	const { entries } = useTaskContext();

	const entriesFilteredByStatus = useMemo(
		() => entries.filter((entry) => entry.status === status),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[entries]
	);

	return (
		<div>
			<Paper
				sx={{
					height: "calc(100vh - 100px)",
					overflowY: "scroll",
					"&::-webkit-scrollbar": { display: "none" },
					backgroundColor: "transparent",
					padding: 1,
				}}
			>
				<List sx={{ opacity: 1 }}>
					{entriesFilteredByStatus.map((entry: Entry) => {
						return <EntryItem key={entry._id} entry={entry} />;
					})}
				</List>
			</Paper>
		</div>
	);
};
