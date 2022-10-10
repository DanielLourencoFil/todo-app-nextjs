import { ReactNode, useReducer } from "react";
import { EntriesContext, entriesReducer } from "./";

import { v4 as uuidv4 } from "uuid";

import { Entry } from "../../interfaces";

interface Props {
	children: ReactNode;
}

export interface EntriesState {
	entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
	entries: [
		{
			_id: uuidv4(),
			description:
				"Irure ipsum nulla voluptate laboris sit dolore veniam sint.",
			status: "pending",
			createdAt: Date.now(),
		},
		{
			_id: uuidv4(),
			description:
				"Irure ipsum nulla voluptate laboris sit dolore veniam sint.",
			status: "pending",
			createdAt: Date.now(),
		},
		{
			_id: uuidv4(),
			description:
				"Exercitation irure fugiat consectetur sit do aliquip laboris.",
			status: "in-progress",
			createdAt: Date.now() - 100500500,
		},
		{
			_id: uuidv4(),
			description:
				"Proident id minim veniam nisi dolor Lorem do fugiat ullamco reprehenderit exercitation.",
			status: "finished",
			createdAt: Date.now() - 20500500,
		},
		{
			_id: uuidv4(),
			description:
				"Proident id minim veniam nisi dolor Lorem do fugiat ullamco reprehenderit exercitation 2222.",
			status: "in-progress",
			createdAt: Date.now() - 30500500,
		},
	],
};

export const EntriesProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

	return (
		<EntriesContext.Provider
			value={{
				...state,
			}}
		>
			{children}
		</EntriesContext.Provider>
	);
};
