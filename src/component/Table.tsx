import React from 'react'
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import {GrStatusGood} from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux';
import { I_reducer } from '../redux/rootReducer';
import submitAction from '../redux/actions/submitAction';

const Table: React.FC = () => {
    const dispatch = useDispatch();

    const submit_content = useSelector(({submitData}: I_reducer) => submitData.submit);

    const handleDelete = (id: string) => {
        const setDelete = submit_content.filter(item => item.id !== id)
        dispatch(submitAction(setDelete));
    };

    return (
        <table className="min-w-full">
            <thead>
                <tr className="w-full h-16 border-gray-300 border-b py-8">
                    <th className="lg:pl-8 text-gray-600 font-normal  text-left text-sm tracking-normal leading-4">Student Name</th>
                    <th className="lg:pl-8 text-gray-600 font-normal text-left text-sm tracking-normal leading-4">Course</th>
                    <th className="lg:pl-8 text-gray-600 font-normal text-left text-sm tracking-normal leading-4">score</th>
                    <th className="lg:pl-8 text-gray-600 font-normal text-left text-sm tracking-normal leading-4">Grade</th>
                    <th className="lg:pl-8 text-gray-600 font-normal text-left text-sm tracking-normal leading-4">Status</th>
                    <th className="lg:pl-8 text-gray-600 font-normal text-left text-sm tracking-normal leading-4">Actions</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    submit_content.map(({id, studentName, course, score}) => (
                        <tr key={id} className="overflow-x-auto">
                            <td className="text-sm lg:pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">{studentName}</td>
                            <td className="text-sm lg:pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">{course}</td>
                            <td className="text-sm lg:pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4">{score}</td>
                            <td className="text-sm lg:pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"></td>
                            <td className="text-sm lg:pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4"></td> 
                            <td className="text-sm lg:pr-6 whitespace-no-wrap text-gray-800 tracking-normal leading-4 flex flex-row justify-center m-auto">
                                <BiEdit/>
                                <MdDelete onClick={() => handleDelete(id)}/>
                                <GrStatusGood/>
                            </td> 
                        </tr>
                    ))
                }   
            </tbody>
            </table>
    )
}

export default Table