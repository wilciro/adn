// React
import { ActionIcon, Button, useMantineColorScheme } from '@mantine/core'
import React from 'react'
import { MoonStars, Sun } from 'tabler-icons-react';

// Style
import { ButtonsSeparator, Header } from './style'


const LayoutHeader: React.FC = () => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
    
    return (
        <Header>
            Icon
            <ButtonsSeparator>
                <Button>Login</Button>
                <ActionIcon
                    variant="outline"
                    color={dark ? 'light' : 'dark'}
                    onClick={() => toggleColorScheme()}
                    title="Toggle color scheme"
                >
                    {dark ? <Sun size={18} /> : <MoonStars size={18} />}
                </ActionIcon>
            </ButtonsSeparator>
        </Header>
    )
}

export default LayoutHeader