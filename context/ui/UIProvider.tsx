import { ReactNode, useReducer } from "react";
import { UIContext, UIReducer } from "./";

interface Props {
	children: ReactNode;
}

export interface UIState {
	isSideMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
	isSideMenuOpen: false,
};

export const UIProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

	const openSideMenu = () => {
		dispatch({ type: "UI-open-sidemenu" });
	};
	const closeSideMenu = () => {
		dispatch({ type: "UI-close-sidemenu" });
	};

	return (
		<UIContext.Provider value={{ ...state, openSideMenu, closeSideMenu }}>
			{children}
		</UIContext.Provider>
	);
};
