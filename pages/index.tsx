import { Grid, Card, CardHeader, CardContent } from "@mui/material";
import type { NextPage } from "next";
import { Layout } from "../compoments/layouts";
import { NewEntry } from "../compoments/ui";
import { EntryList } from "../compoments/ui/entries";
// import { useTaskContext } from "../context/entries/EntriesContext";

const HomePage: NextPage = () => {
	// const { entries } = useTaskContext();
	return (
		<Layout title="MyTodo App">
			<Grid container spacing={2}>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: "calc(100vh - 100px)" }}>
						<CardHeader title="Pending" />
						<NewEntry />
						<EntryList status="pending" />
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: "calc(100vh - 100px)" }}>
						<CardHeader title="On Progress"></CardHeader>
						<EntryList status="in-progress" />
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: "calc(100vh - 100px)" }}>
						<CardHeader title="Finished"></CardHeader>
						<EntryList status="finished" />
					</Card>
				</Grid>
			</Grid>
		</Layout>
	);
};

export default HomePage;
