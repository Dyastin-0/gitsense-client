import { createContext, useContext } from "react";
import useSWR from "swr";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const RepositoryContext = createContext();

export const RepositoryProvider = ({ children }) => {
    const { api, isAxiosReady } = useAxios();

    const { data: repositories, error } = useSWR(
        isAxiosReady ? "/repository" : null,
        async () => {
            const response = await api.get("/repository");
            return response.data;
        }
    );

    return (
        <RepositoryContext.Provider value={{ repositories, error }}>
            {children}
        </RepositoryContext.Provider>
    );
}

const useRepository = () => {
    const context = useContext(RepositoryContext);

    if (!context) {
        throw new Error("useRepository must be used within a RepositoryProvider");
    }

    return context;
}

export default useRepository;