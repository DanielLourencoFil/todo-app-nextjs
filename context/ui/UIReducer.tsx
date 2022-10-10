import { UIState } from "./UIProvider";

type UIActionType =
	| { type: "UI-open-sidemenu" }
	| { type: "UI-close-sidemenu" };

export const UIReducer = (state: UIState, action: UIActionType): UIState => {
	switch (action.type) {
		case "UI-open-sidemenu":
			return {
				...state,
				isSideMenuOpen: true,
			};
		case "UI-close-sidemenu":
			return {
				...state,
				isSideMenuOpen: false,
			};
		default:
			return state;
	}
};
