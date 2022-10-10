import { createContext, useContext } from "react";

export interface ContextProps {
	isSideMenuOpen: boolean;
	openSideMenu: () => void;
	closeSideMenu: () => void;
	isAddEntry: boolean;
	setIsAddEntry: (value: boolean) => void;
}
export const UIContext = createContext({} as ContextProps);

export const useUIContext = () => {
	return useContext(UIContext);
};
