import { Entry } from "../../interfaces";
import { EntriesState } from "./EntriesProvider";

type EntriesActionType = { type: "[Entry]-add"; payload: Entry };

export const entriesReducer = (
	state: EntriesState,
	action: EntriesActionType
): EntriesState => {
	switch (action.type) {
		case "[Entry]-add":
			console.log("added");

			return {
				...state,
				entries: [...state.entries, action.payload],
			};
		default:
			return state;
	}
};
