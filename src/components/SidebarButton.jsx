import React from 'react';
import { Button } from '@mui/material'

const SidebarButton = (props) => {
    return <Button {...props} sx={
        {
            padding: 1.25,
            paddingLeft: 2.5,
            justifyContent: 'flex-start',
        }
    } variant="text" color="primary" />;
};

export default SidebarButton;