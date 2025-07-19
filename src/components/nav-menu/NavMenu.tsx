'use client'

import {Box, Button, ButtonGroup} from "@mui/material";
import {usePathname} from "next/navigation";

export const NavMenu = () => {
    const pathname = usePathname();
    const navLinks = ['users', 'posts', 'comments'];

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '10dvh'
        }}>
            <ButtonGroup>
                {navLinks.map((link, index) => {
                    return (
                        <Button key={index} href={`/${link}`} variant={`${pathname.startsWith('/' + link) ? 'contained' : 'outlined'}`}>
                            {link}
                        </Button>
                    )
                })}
            </ButtonGroup>
        </Box>

    );
};