import React, { ReactNode } from 'react';
import './LayoutStyles.less'

interface LayoutComponentProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutComponentProps> = ({ children }) => {
    return (
        <div className='layout'>
            {children}
        </div>
    )
}

export default Layout;