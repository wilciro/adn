// React
import { ActionIcon, Button, useMantineColorScheme } from '@mantine/core'
import React from 'react'
import { Link } from 'react-router-dom';
import { MoonStars, Sun } from 'tabler-icons-react';

// Style
import { ButtonsSeparator, Header } from './style'

export interface HeaderProps {
    logged: boolean
}

const LayoutHeader: React.FC<HeaderProps> = ({logged}) => {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    const logout = () => {
        const a = 10
    }
    
    return (
        <Header>
            Icon
            <ButtonsSeparator>
                {
                    logged ? 
                        <Button onClick={logout}>Salir</Button>
                    :
                        <Link to="/login">
                            <Button>Ingresar</Button>
                        </Link>
                }
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