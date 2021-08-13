import React from 'react'

function index(props) {
    return (
        <div>
            
            {props.history.map(ele => {
                // console.log('props.history',props.history);
                return (
                    <>
                        <h4>Method :'{ele.method}'</h4>
                        <h4>URL :'{ele.url}'</h4>
                        <hr></hr>
                    </>
                )

            })}
        </div>
    )
}

export default index;
