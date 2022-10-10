import { FC, ReactNode } from "react";

import Head from "next/head";

import { Box } from "@mui/system";
import { Sidebar } from "../ui";
import { Navbar } from "../ui";

interface Props {
	title?: string;
	children: ReactNode;
}

export const Layout: FC<Props> = ({ title = "Todo List App", children }) => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Head>
				<title>{title}</title>
			</Head>
			<Navbar />
			<Sidebar />
			<Box sx={{ padding: "10px 20px" }}>{children}</Box>
		</Box>
	);
};
