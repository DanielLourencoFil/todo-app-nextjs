import type { AppProps } from "next/app";

import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import { darkTheme, lightTheme } from "../Themes";
import "../styles/globals.css";
import { UIProvider } from "../context/ui";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<UIProvider>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</UIProvider>
	);
}

export default MyApp;
