import React from 'react'
import { useSelector } from 'react-redux'
import { I_reducer } from '../redux/rootReducer'

const Result: React.FC = () => {
    const submit_content = useSelector((state: I_reducer) => state.submitData.submit);
    console.log({...submit_content})
    return (
        <div>
            <h1>Result</h1>
        </div>
    )
}

export default Result
