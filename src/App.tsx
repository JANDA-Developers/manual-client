import React, { useContext } from "react";
import { Helmet } from "react-helmet";
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

  // console.log('Data Sets :');
  // console.log(data);

  return (
    <EntryContextProvider>
      <div className="App">
        <BrowserRouter>
          {pathChk && <MainSearcher posts={Data} />}
          <Switch>
            <Route
              path="/"
              exact
              render={() => <HomeIndex />}
            />

            <Route
              exact
              path='/guideBooking'
              render={() => (<GuideList sort={'booking'} />)}
            />

            <Route
              exact
              path='/guideTemplate'
              render={() => (<GuideList sort={'template'} />)}
            />

            <Route
              path="/부킹"
              render={() => (
                <HighRouter
                  // superClass={SuperClass.BOOKING}
                  superClass={"부킹"}
                  bookingData={filterDataBySuperClass(Data, "부킹")}
                />
              )}
            />

            <Route
              path="/타임스페이스"
              render={() => (
                <HighRouter
                  superClass={"타임스페이스"}
                  bookingData={filterDataBySuperClass(Data, "타임스페이스")}
                />
              )}
            />

            <Route
              path="/정글웹"
              render={() => (
                <HighRouter
                  superClass={"정글웹"}
                  bookingData={filterDataBySuperClass(Data, "정글웹")}
                />
              )}
            />

            <Route
              path="/템플릿 숙박"
              render={() => (
                <HighRouter
                  superClass={"템플릿 숙박"}
                  bookingData={filterDataBySuperClass(Data, "템플릿 숙박")}
                />
              )}
            />

            <Route
              path="/템플릿 카페"
              render={() => (
                <HighRouter
                  superClass={"템플릿 카페"}
                  bookingData={filterDataBySuperClass(Data, "템플릿 카페")}
                />
              )}
            />

            <Route
              path="/템플릿 펍"
              render={() => (
                <HighRouter
                  superClass={"템플릿 펍"}
                  bookingData={filterDataBySuperClass(Data, "템플릿 펍")}
                />
              )}
            />

            <Route
              path="/템플릿A"
              render={() => (
                <HighRouter
                  superClass={"템플릿A"}
                  bookingData={filterDataBySuperClass(Data, "템플릿A")}
                />
              )}
            />

          </Switch>
        </BrowserRouter>
        <div className="guideVersion">{version}</div>
      </div>
    </EntryContextProvider>
  );
}

export default App;
