import { createContext, useContext } from "react";
import useSWR from "swr";
import useAxios from "./useAxios";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const { api, isAxiosReady } = useAxios();

  const { data: events, error } = useSWR(
    isAxiosReady ? "/event" : null,
    async () => {
      const response = await api.get("/event");
      return response.data;
    }
  );

  return (
    <EventContext.Provider value={{ events, error }}>
      {children}
    </EventContext.Provider>
  );
};

const useEvents = () => {
  const context = useContext(EventContext);

  if (!context) {
    throw new Error("useEvents must be used within an EventProvider");
  }

  return context;
};

export default useEvents;
