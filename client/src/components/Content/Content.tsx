import React, { ReactNode } from 'react';
import './ContentStyles.less'

interface CountentComponentProps {
    children: ReactNode;
}

const Content: React.FC<CountentComponentProps> = ({ children }) => {
    return (
        <div className='content'>
            {children}
        </div>
    )
}

export default Content;