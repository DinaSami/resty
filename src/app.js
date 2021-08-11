
import React from 'react';
import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import { useState } from 'react';

function App(props) {
  const [data, setdata] = useState(null);
  const [requestParams, setrequestParams] = useState({});
  const [loading, setloading] = useState(false)

  function callApi(requestParams, data2) {
    const data = {
      Headers:'application/json',
      count: data2.count,
      results: data2.results
    };

    setdata(data);
    setrequestParams(requestParams)
    setloading(true)
  }
  return (

    <React.Fragment>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} loading={loading} />
      {loading ? <Results data={data} /> : 'loading...'}
      <Footer />
    </React.Fragment>

  )
}

export default App
