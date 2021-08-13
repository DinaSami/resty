import React from 'react'
import './form.scss';
import { useState } from 'react';

function Form(props) {
  const [method, setmethod] = useState('get');
  const [url, seturl] = useState('');
  const [textarea, settextarea] = useState(false);
  const [dataBody, setdataBody] = useState('')
  const [arrayMethods] = useState([])

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const formData = {
        method: method,
        url: url,
        dataBody: dataBody
      };

      arrayMethods.push(formData)
      // setarrayMethods(...arrayMethods, formData)
      // console.log('teeeest',arrayMethods);
      const raw = await fetch(formData.url)
      const data = await raw.json();

      // console.log('data', data);
      // console.log('setarrayMethods', data);

      props.handleApiCall(formData, data, arrayMethods);

      // props.loading(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (

    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={(e) => seturl(e.target.value)} />
          <button type="submit" data-testid='btnTest'>GO!</button>
        </label>
        <label className="methods">
          <span tabindex='4' id="get" onClick={(e) => { setmethod(e.target.id); settextarea(false) ; props.setrequestParams({url,method})} }>GET</span>
          <span tabindex='4' id="post" onClick={(e) => { setmethod(e.target.id); settextarea(true) }}>POST</span>
          <span tabindex='4' id="put" onClick={(e) => { setmethod(e.target.id); settextarea(true) }}>PUT</span>
          <span tabindex='4' id="delete" onClick={(e) => { setmethod(e.target.id); settextarea(false) }}>DELETE</span>
        </label>
        {textarea &&
          <label className="textarea">
            <span>request body: </span>
            <textarea name='dataBody' type='text' onChange={(e) => setdataBody(e.target.value)}></textarea>
          </label>
        }

      </form>
    </>
  )
}

export default Form

