import React from "react";

const StepThree = (props) => {
    const {handleNextStep, handleBackStep} = props;

    return(
        <div>
            step three <button onClick={handleNextStep}>next</button>
        </div>
    )
}