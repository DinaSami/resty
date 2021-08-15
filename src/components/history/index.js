import React from 'react'

function index(props) {
    let historyCalling = JSON.parse(localStorage.getItem('History'))
    console.log(historyCalling);
    return (
        <>        
                <>
                    {props.history.map(ele => {
                        return (
                            <>
                                <h4>Method :'{ele.method}'</h4>
                                <h4>URL :'{ele.url}'</h4>
                                <hr></hr>
                            </>
                        )
                    })}
                </>
        </>
    )
}

export default index;
