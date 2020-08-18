import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom'
import './normalize.css';
import HighRouter from './pages/HighRouter'
import { useQuery } from "@apollo/client";
import { GET_ALL_POST } from './apollo/query';
import { JDpreloader } from '@janda-com/front';
import MainSearcher from './components/MainSearcher';
import { AllPosts, CategorySuperClass } from './apollo/api';
import { IPost } from './type/interface';
import { filterDataBySuperClass } from './utils/utils';
const { version } = require("../package.json");

function App() {
  const { data, loading } = useQuery<AllPosts>(GET_ALL_POST, {
    fetchPolicy: "cache-first"
  })


  if (loading) return <JDpreloader page />
  if (!data?.allPosts) return <div>ERR</div>

  // @ts-ignore
  const Data: IPost[] = data.allPosts;

  return (
    <div className="App">
      <MainSearcher data={Data} />
      <HashRouter>
        <Switch>
          <Route
            path="/booking"
            render={() => <HighRouter bookingData={
              filterDataBySuperClass(Data, CategorySuperClass.BK)
            } />} >
          </Route>
          <Route

            path="/template"
            render={() => <HighRouter bookingData={
              filterDataBySuperClass(Data, CategorySuperClass.TA)
            } />} >
          </Route>
        </Switch>
      </HashRouter>
      {version}
    </div>
  );
}

export default App;
