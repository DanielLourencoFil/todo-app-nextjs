import { ReactNode, useReducer } from "react";
import { UIContext, UIReducer } from "./";

interface Props {
	children: ReactNode;
}

export interface UIState {
	isSideMenuOpen: boolean;
	isAddEntry: boolean;
}

const UI_INITIAL_STATE: UIState = {
	isSideMenuOpen: false,
	isAddEntry: false,
};

export const UIProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

	const openSideMenu = () => {
		dispatch({ type: "UI-open-sidemenu" });
	};
	const closeSideMenu = () => {
		dispatch({ type: "UI-close-sidemenu" });
	};
	const setIsAddEntry = (value: boolean) => {
		console.log(value);

		dispatch({ type: "UI-isAdd-task", payload: value });
	};

	return (
		<UIContext.Provider
			value={{ ...state, openSideMenu, closeSideMenu, setIsAddEntry }}
		>
			{children}
		</UIContext.Provider>
	);
};
