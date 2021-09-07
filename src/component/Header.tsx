import React from 'react'
import Avatar from './Avatar'
import logo from '../asset/image/logo.png'
import { Link } from 'react-router-dom'


const Header: React.FC = () => {
    return (
        <div className="flex justify-between items-center lg:px-5">
            <div className="">
                <Avatar src={logo} alt="logo" />
            </div>

            <div className="flex  space-x-3">
                <Link to="/">Create Result</Link>
                <Link to="/result">Result</Link>
            </div>
        </div>
    )
}

export default Header
