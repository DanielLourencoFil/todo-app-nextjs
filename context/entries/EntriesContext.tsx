import { createContext, useContext } from "react";
import { Entry } from "../../interfaces";

export interface ContextProps {
	entries: Entry[];
	addNewEntry: (description: string) => void;
}
export const EntriesContext = createContext({} as ContextProps);

export const useTaskContext = () => {
	return useContext(EntriesContext);
};
