import React, { useContext } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./normalize.css";
import { useQuery } from "@apollo/client";
import { GET_ALL_POST } from "./apollo/query";
import { JDpreloader } from "@janda-com/front";
import { AllPosts, CategorySuperClass } from "./apollo/api";
import { IPost } from "./type/interface";
import { filterDataBySuperClass } from "./utils/utils";
import HomeIndex from "./components/HomeIndex";
import HighRouter from "./pages/HighRouter";
import MainSearcher from "./components/MainSearcher";
import EntryContextProvider from "./context/entryContext";
import { EntryContext } from "./context/entryContext";

const { version } = require("../package.json");

const lastVersion = localStorage.getItem("version");

function App() {
  const { data, loading } = useQuery<AllPosts>(GET_ALL_POST, {
    fetchPolicy: lastVersion !== version ? "network-only" : "cache-first",
  });
  localStorage.setItem("version", version);

  const { pathChk } = useContext(EntryContext);

  if (loading) return <JDpreloader page />;
  if (!data?.allPosts) return <div>ERR</div>;

  // @ts-ignore
  const Data: IPost[] = data.allPosts;

  return (
    <EntryContextProvider>
      <div className="App">
        <BrowserRouter>
          {pathChk && <MainSearcher posts={Data} />}
          <Switch>
            <Route path="/" exact render={() => <HomeIndex />}></Route>
            <Route
              path="/booking"
              render={() => (
                <HighRouter
                  superClass="booking"
                  bookingData={filterDataBySuperClass(
                    Data,
                    CategorySuperClass.BK
                  )}
                />
              )}
            ></Route>
            <Route
              path="/template"
              render={() => (
                <HighRouter
                  superClass="template"
                  bookingData={filterDataBySuperClass(
                    Data,
                    CategorySuperClass.TA
                  )}
                />
              )}
            ></Route>
            <Route
              path="/timespace"
              render={() => (
                <HighRouter
                  superClass="timespace"
                  bookingData={filterDataBySuperClass(
                    Data,
                    CategorySuperClass.TS
                  )}
                />
              )}
            ></Route>
          </Switch>
        </BrowserRouter>
        <div className="guideVersion">{version}</div>
      </div>
    </EntryContextProvider>
  );
}

export default App;
