import { Grid, Card, CardHeader, CardContent } from "@mui/material";
import type { NextPage } from "next";
import { Layout } from "../compoments/layouts";

const HomePage: NextPage = () => {
	return (
		<Layout title="MyTodo App">
			<Grid container spacing={2}>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: "calc(100vh - 100px)" }}>
						<CardHeader title="Pending"></CardHeader>
						<CardContent>{/* {new task} */}</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: "calc(100vh - 100px)" }}>
						<CardHeader title="On Progress"></CardHeader>
						<CardContent>{/* {new task} */}</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: "calc(100vh - 100px)" }}>
						{" "}
						<CardHeader title="Completed"></CardHeader>
						<CardContent>{/* {new task} */}</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Layout>
	);
};

export default HomePage;
