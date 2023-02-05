import React from 'react';
import { Button } from '@mui/material'

const SidebarButton = (props) => {
    return <Button {...props} sx={
        {
            padding: 1.5,
            paddingLeft: 3,
            justifyContent: 'flex-start',

        }
    } variant="text" color="primary" />;
};

export default SidebarButton;