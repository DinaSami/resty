// import React from 'react';

// class Results extends React.Component {
//   render() {
//     return (
//       <section>
//         <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
//       </section>
//     );
//   }
// }

// export default Results;

import React from 'react'
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

function Results(props) {
  //   const mystyle = {
  //     color: "green",
  //     backgroundColor: "lightgrey",padding: "15px",
  // fontFamily: "Georama"
  //   };
  // console.log(props.data.Headers);
  return (
    <div data-testid='testResult'>
      {props.data &&
        <>
          <h3>"Headers : "</h3>
          {/* <pre style={mystyle}>{props.data? JSON.stringify(props.data.Headers, undefined, 5) : null}</pre>
      </section >
      <section> */}
          <JSONPretty id="json-pretty" data={props.data.Headers}></JSONPretty>

          <h3>"Results : "</h3>
          {/* <pre style={mystyle}>{props.data? JSON.stringify(props.data.results, undefined, 5) : null}</pre> */}
          <JSONPretty id="json-pretty" data={props.data.results}></JSONPretty>

        </>
      }
    </div>
  )
}

export default Results
