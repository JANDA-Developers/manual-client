import React, { useContext } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./normalize.css";
import { useQuery } from "@apollo/client";
import { JDpreloader } from "@janda-com/front";
import { IPost } from "./type/interface";
import { filterDataBySuperClass } from "./utils/utils";
import HomeIndex from "./components/HomeIndex";
import HighRouter from "./pages/HighRouter";
import MainSearcher from "./components/MainSearcher";
import EntryContextProvider from "./context/entryContext";
import { EntryContext } from "./context/entryContext";
import { POST_LIST } from "./apollo/query";
import { postList, postListVariables, SuperClass } from "./apollo/api";
import GuideList from "./components/GuideList";
import Test from "./components/Test";

const { version } = require("../package.json");
const lastVersion = localStorage.getItem("version");

function App() {

  const { data, loading } = useQuery<postList, postListVariables>(POST_LIST, {
    variables: {
      pagingInput: {
        pageIndex: 0,
        pageItemCount: 999
      }
    }
  });
  localStorage.setItem("version", version);

  const { pathChk } = useContext(EntryContext);

  if (loading) return <JDpreloader page />;
  if (!data?.PostList) return <div>ERR</div>;

  const Data: IPost[] = data.PostList.items;

  return (
    <EntryContextProvider>
      <div className="App">
        <BrowserRouter>
          {pathChk && <MainSearcher posts={Data} />}
          <Switch>
            <Route path="/" exact render={() => <HomeIndex />}></Route>
            {/* <Route
              exact
              path='/타임스페이스 A'
              component={Test}
            /> */}
            <Route
              exact
              path='/guideBooking'
              component={GuideList}
            />
            <Route
              path="/부킹"
              render={() => (
                <HighRouter
                  // superClass={SuperClass.BOOKING}
                  superClass={'부킹'}
                  bookingData={filterDataBySuperClass(
                    Data,
                    SuperClass.BOOKING
                  )}
                />
              )}
            ></Route>
            <Route
              path="/템플릿A"
              render={() => (
                <HighRouter
                  superClass={'템플릿A'}
                  bookingData={filterDataBySuperClass(
                    Data,
                    SuperClass.TEMPLATEA
                  )}
                />
              )}
            ></Route>
            <Route
              path="/타임스페이스"
              render={() => (
                <HighRouter
                  superClass={'타임스페이스'}
                  bookingData={filterDataBySuperClass(
                    Data,
                    SuperClass.TIMESPACE
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
