import React, { createContext, useState, useEffect } from "react";
import { ISet } from "@janda-com/front/build/types/interface";

interface IContextEntry {
  isLoad: boolean;
  setLoad?: ISet<boolean>;
  loadChange: () => void;

  pathChk?: boolean;
  SetpathChk?: ISet<boolean>;
  pathChkUpdate?: () => void;
}

const DEFAULT_CONTEXT: IContextEntry = {
  isLoad: false,
  loadChange: () => {},
  pathChk: true,
};

export const EntryContext = createContext<IContextEntry>(DEFAULT_CONTEXT);

const EntryContextProvider = (props: any) => {
  const [isLoad, setLoad] = useState(false);
  const [pathChk, SetpathChk] = useState(true);

  const loadChange = () => {
    setLoad(false);
    setTimeout(function () {
      setLoad(true);
    }, 500);
  };

  const pathChkUpdate = () => {
    SetpathChk(false);
  };

  useEffect(() => {}, [isLoad]);

  return (
    <EntryContext.Provider
      value={{ isLoad, loadChange, setLoad, pathChk, pathChkUpdate }}
    >
      {props.children}
    </EntryContext.Provider>
  );
};

export default EntryContextProvider;
