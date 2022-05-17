// React
import { useMantineColorScheme } from '@mantine/core';
import React from 'react'

// Style
import { Body } from './style'

interface BodyProps {
    children: React.ReactNode
}

const LayoutBody: React.FC<BodyProps> = ({children}) => {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    
    return (
        <Body dark={dark}>
            {children}
        </Body>
    )
}

export default LayoutBody