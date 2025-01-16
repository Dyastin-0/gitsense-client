import React, { createContext, useContext, useState } from "react";
import Repositories from "../Repositories";
import Events from "../Events";

const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState("repositories");

  const componentsMap = {
    repositories: <Repositories />,
    events: <Events />,
  };

  const Content = componentsMap[content] || null;

  return (
    <ContentContext.Provider value={{ content, setContent, Content }}>
      {children}
    </ContentContext.Provider>
  );
};

const useContent = () => useContext(ContentContext);

export default useContent;
