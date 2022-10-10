import { UIState } from "./UIProvider";

type UIActionType =
	| { type: "UI-open-sidemenu" }
	| { type: "UI-close-sidemenu" }
	| { type: "UI-isAdd-task"; payload: boolean };

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
		case "UI-isAdd-task":
			return {
				...state,
				isAddEntry: action.payload,
			};

		default:
			return state;
	}
};
