import React from 'react'
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ListItemButton } from '@mui/material';

const Listing = ({ text }) => {
    return (
        <ListItem button key={text.title}>
            <ListItemButton>
                <ListItemIcon>{text.icon}</ListItemIcon>
                <ListItemText primary={text.title} />
            </ListItemButton>
        </ListItem>
    )
}

export default Listing
