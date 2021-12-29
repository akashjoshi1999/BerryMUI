import React, { useState } from 'react'
import ListItemText from "@mui/material/ListItemText";
import { Collapse, ListItemButton } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Listing from './Listing';

const CollapseList = ({ text }) => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <div>
            <ListItem button key={text.title} onClick={handleClick}>
                <ListItemText primary={text.title} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse
                key={text.title}
                in={open}
                timeout='auto'
                unmountOnExit
            >
                <List component='li' disablePadding key={text.title}>
                    {text.items.map(text => {
                        return (
                            <Listing text={text} key={text.title} />
                        );
                    })}
                </List>
            </Collapse>
        </div>
    )
}

export default CollapseList
