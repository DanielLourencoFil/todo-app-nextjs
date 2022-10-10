import { EntriesState } from "./EntriesProvider";

type EntriesActionType = { type: "[Entries] - actionName" };

export const entriesReducer = (
	state: EntriesState,
	action: EntriesActionType
): EntriesState => {
	switch (action.type) {
		case "[Entries] - actionName":
			return {
				...state,
			};
		default:
			return state;
	}
};
