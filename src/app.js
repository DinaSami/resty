
import React from 'react';
import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import History from './components/history/index';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App(props) {
  const [data, setdata] = useState(null);
  const [requestParams, setrequestParams] = useState({});
  const [loading, setloading] = useState(false)
  const [history, sethistory] = useState([]);

  useEffect(() => {
    // console.log('from effect requestParams',requestParams);
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
        // console.log('dataApi', dataApi);
         setdata(data);
         setloading(true)
        //  console.log('requestParams',[requestParams]);
         sethistory([requestParams])
      }
    })()
  }, [requestParams])

 
  function callApi(requestParams, data2, arrayMethods) {
    const data = {
      Headers: 'application/json',
      count: data2.count,
      results: data2.results
    };

    setdata(data);
    setrequestParams(requestParams)
    setloading(true)
    sethistory(arrayMethods)
    // console.log(arrayMethods,'arrayMethods0000000000');
    // console.log(history,'sethistory');
  }
  return (

    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} loading={loading} setrequestParams={setrequestParams}/>
      <History history={history} />
      {loading ? <Results data={data} /> : 'loading...'}
      <Footer />
    </React.Fragment>

  )
}

export default App
