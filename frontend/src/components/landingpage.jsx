import React from "react";

const displayData = ({name,review}) =>{

    return(
       <div>
        <h1>This is a customer feedback page</h1>
        <h2>Name: {name}</h2>
        <h2>Feedback: {review}</h2>
       </div>
    )
}

export default displayData;