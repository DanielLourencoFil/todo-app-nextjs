import { Entry } from "../../interfaces";
import { EntriesState } from "./EntriesProvider";

type EntriesActionType =
	| { type: "[Entry]-add"; payload: Entry }
	| { type: "[Entry]-updated"; payload: Entry };

export const entriesReducer = (
	state: EntriesState,
	action: EntriesActionType
): EntriesState => {
	switch (action.type) {
		case "[Entry]-add":
			return {
				...state,
				entries: [...state.entries, action.payload],
			};
		case "[Entry]-updated":
			return {
				...state,
				entries: state.entries.map((entry) => {
					if (entry._id === action.payload._id) {
						entry.status = action.payload.status;
						entry.description = action.payload.description;
					}
					return entry;
				}),
			};
		default:
			return state;
	}
};
