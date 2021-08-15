
import React from 'react';
import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history/index';
import { useState, useEffect ,useReducer} from 'react';
import axios from 'axios';



function App(props) {

  const initialState = {
    loading: false,
    history: []
  };
  

  const [data, setdata] = useState(null);
  const [requestParams, setrequestParams] = useState({});
  const [state, dispatch] = useReducer(reducerFunction, initialState)

  useEffect(() => {
    (async () => {
      if (requestParams.url && requestParams.method === 'get') {

        const dataApi = await axios({
          method: requestParams.method,
          url: requestParams.url
        })
        const data = {
          Headers: 'application/json',
          results: dataApi.data
        };
         setdata(data);
      }
    })()
  }, [requestParams])



  function reducerFunction(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case 'Loading_State':
        const history = [...state.history, payload];
        return { history,loading: true };
      default:
        return state;
    }
  }
  function changeLoadingState(requestParams) {
    return {
      type: 'Loading_State',
      payload: {
        'url':requestParams.url,
        'method':requestParams.method
      }
    };
  }

  function callApi(requestParams, data2, arrayMethods) {
    const data = {
      Headers: 'application/json',
      count: data2.count,
      results: data2.results
    };

    setdata(data);
    setrequestParams(requestParams)
    dispatch(changeLoadingState(requestParams))  
    localStorage.setItem('History', JSON.stringify(state.history));
    console.log(state.history);
  }
  return (

    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} loading={state.loading} setrequestParams={setrequestParams}/>
      <History history={state.history}/>
      {state.loading ? <Results data={data} /> : 'loading...'}
      <Footer />
    </React.Fragment>

  )
}

export default App;
