import React from 'react'
import CustomForm from '../component/CustomForm'





const CreateResult: React.FC = () => {
    return (
        <div className="px-3 mt-10  lg:px-64" >
            <h1 className="text-center">Create Result</h1>

            <div className="mt-20">
                <CustomForm/>
            </div>
            
        </div>
    )
}

export default CreateResult
