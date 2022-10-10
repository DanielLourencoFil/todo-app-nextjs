import createTheme from "@mui/material/styles/createTheme";

export const darkTheme = createTheme({
	palette: {
		mode: "dark",
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
