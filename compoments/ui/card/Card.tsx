import React from "react";

import { Grid, Card, CardHeader, CardContent } from "@mui/material";
import { Entry } from "../../../interfaces/entry";

interface CardProps {
	title: string;
	entries: Entry[];
}

export const CardTodo = ({ title, entries }: CardProps) => {
	return (
		<Card sx={{ height: "calc(100vh - 100px)" }}>
			<CardHeader title={title}></CardHeader>
			{entries.map((entry: Entry) => {
				if (entry.status === title) {
					return <CardContent key={entry._id}>{entry.description}</CardContent>;
				}
			})}
		</Card>
	);
};
