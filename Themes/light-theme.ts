import { grey, red } from "@mui/material/colors";
import createTheme from "@mui/material/styles/createTheme";

export const lightTheme = createTheme({
	palette: {
		mode: "light",
		background: {
			default: grey[300],
		},
		primary: {
			main: red[500],
		},
	},
	components: {
		MuiToolbar: {
			defaultProps: {},
			styleOverrides: {
				root: {
					backgroundColor: "#4a148c",
				},
			},
		},
		MuiAppBar: {
			defaultProps: {
				elevation: 0,
			},
			styleOverrides: {
				root: {
					backgroundColor: "#4a148c",
				},
			},
		},
	},
});
