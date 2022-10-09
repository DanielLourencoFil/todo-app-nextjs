import type { AppProps } from "next/app";

import { ThemeProvider } from "@mui/material";
import { UIProvider } from "../context/ui";
import { EntriesProvider } from "../context/entries/EntriesProvider";

import CssBaseline from "@mui/material/CssBaseline";
import "../styles/globals.css";
import { darkTheme } from "../Themes";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<EntriesProvider>
			<UIProvider>
				<ThemeProvider theme={darkTheme}>
					<CssBaseline />
					<Component {...pageProps} />
				</ThemeProvider>
			</UIProvider>
		</EntriesProvider>
	);
}

export default MyApp;
