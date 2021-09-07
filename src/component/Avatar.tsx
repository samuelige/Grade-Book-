import React from 'react'

interface Props {
    src: string,
    alt: string
};

const Avatar = ({src, alt}: Props) => {
    return (
        <div>
            <img src={src} alt={alt} className='w-14'/>
        </div>
    )
}

export default Avatar
