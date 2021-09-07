import React, { useState } from 'react'
import Button from './Button';
import InputField from './InputField';

interface I_ValueState {
    studentName: string,
    course: string,
    score: string
}

export interface I_InputData {
    type: string,
    placeholder: string,
    value: string | number,
    name: string,
    handleChange:  (e: React.ChangeEvent<HTMLInputElement>) => void
};

const CustomForm: React.FC = () => {
    const [valueState, setValueState] = useState<I_ValueState>(
        {
            studentName: '',
            course: '',
            score: ''
        } 
    );

    // console.log(valueState);

    const {studentName, course, score} = valueState;

    // Submit State
    // const [submit, setSubmit] = useState<I_ValueState>()

    // Handle Change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>  {
        setValueState(
            { ...valueState, 
                [e.currentTarget.name]: e.target.value 
            }
        );
    };

    // Handle Submitted Value
    const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();

        console.log(valueState);
    }

    

    const data: Array<I_InputData> = [
        {
            type: "text",
            placeholder: "Student Name",
            name: "studentName",
            value: studentName,
            handleChange: handleChange
        },
        {
            type: "text",
            placeholder: "Course",
            name: "course",
            value: course,
            handleChange: handleChange
        },
        {
            type: "text",
            placeholder: "Score",
            name: "score",
            value: score,
            handleChange: handleChange
        },
    ]
    return (
        <form className="space-y-4 shadow-lg p-4 lg:p-7">
            {
                data?.map(({type,name, value, placeholder, handleChange}, index) => {
                    return (
                        <InputField key={index} type={type} name={name} value={value} handleChange={handleChange} placeholder={placeholder}/>
                    )
                })
            }
            <div className="flex flex-row justify-center">
                <Button handleSubmit={handleSubmit}>Submit</Button>
            </div>
        </form>
    )
}

export default CustomForm
