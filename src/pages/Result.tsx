import React from 'react'
// import { useSelector } from 'react-redux'
import Table from '../component/Table';
// import { I_reducer } from '../redux/rootReducer'

const Result: React.FC = () => {
    // const submit_content = useSelector((state: I_reducer) => state.submitData.submit);
    // console.log({...submit_content})
    return (
        <div>
            <div className="lg:px-20">
                <Table/>
            </div>
        </div>
    )
}

export default Result
