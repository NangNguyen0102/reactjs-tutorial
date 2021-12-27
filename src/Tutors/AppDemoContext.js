import React, { createContext, useState } from "react";
import ComponentA from "./Components/ComponentA";
export const NameContext = createContext();
export const ColorContext = createContext();

const AppDemoContext = () => {
  const [name, setName] = useState("smith");
  const onChangeName = (e) => {
    console.log("onChangeName", e.target.value);
    setName(e.target.value);
  };

  return (
    <div className="container">
      <div className="center">
        <p>
          Name: <input type="text" onChange={onChangeName} value={name} />
        </p>
        <NameContext.Provider value={name}>
          <ColorContext.Provider value={"red"}>
            <ComponentA />
          </ColorContext.Provider>
        </NameContext.Provider>
      </div>
    </div>
  );
};

export default AppDemoContext;
