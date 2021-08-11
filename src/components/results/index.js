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

function Results(props) {
  const mystyle = {
    color: "green",
    backgroundColor: "lightgrey",
    padding: "15px",
    fontFamily: "Georama"
  };
  return (
  
    <section data-testid='testResult'>
         <h3>"Headers : "</h3>
      <pre style={mystyle}>{props.data.Headers ? JSON.stringify(props.data.Headers, undefined, 5) : null}</pre>

      <h3>"Results : "</h3>
      <pre style={mystyle}>{props.data.results? JSON.stringify(props.data.results, undefined, 5) : null}</pre>
    </section >
  )
}

export default Results
