import { createContext, useContext } from "react";

export interface ContextProps {
	isSideMenuOpen: boolean;
	openSideMenu: () => void;
	closeSideMenu: () => void;
	isAddEntry: boolean;
	isDragging: boolean;
	setAddEntry: (value: boolean) => void;
	setStartDragging: () => void;
	setEndDragging: () => void;
}
export const UIContext = createContext({} as ContextProps);

export const useUIContext = () => {
	return useContext(UIContext);
};
