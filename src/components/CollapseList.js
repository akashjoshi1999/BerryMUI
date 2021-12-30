import React, { useState } from 'react'
import ListItemText from "@mui/material/ListItemText";
import { Collapse, ListItemButton } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import ListItemIcon from "@mui/material/ListItemIcon";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useNavigate } from 'react-router-dom'

const CollapseList = ({ text }) => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    const handleClick = () => {
        setOpen(!open);
    };
    const linkHandler = (path) => {
        // navigate(`/${path}`)
    }
    return (
        <div key={text.title}>
            <ListItem
                onClick={handleClick}
            // component={NavLin}
            // to="/login"
            // to="/register"
            // to={
            //     text.path ? `${text.path}` : `${text.items.items.path}`
            // }
            >
                {
                    text.items ?
                        <ListItemButton onClick={() => linkHandler("login")}>
                            {
                                text.items.items ?
                                    <>
                                        <ListItemIcon>{}</ListItemIcon>
                                        <ListItemText primary={text.title} />
                                    </>
                                    :
                                    <>
                                        <ListItemIcon>{text.icon}</ListItemIcon>
                                        <ListItemText primary={text.title} />
                                        {open ? <ExpandLess /> : <ExpandMore />}
                                    </>
                            }
                        </ListItemButton>
                        :
                        <ListItemButton>
                            <ListItemIcon>{text.icon}</ListItemIcon>
                            <ListItemText primary={text.title} />
                        </ListItemButton>
                }
            </ListItem>
            <Collapse
                in={open}
                timeout='auto'
                unmountOnExit
            >
                <List component='ul' disablePadding key={text.title}>
                    {text.items && text.items.map(text => {
                        return (
                            <CollapseList text={text} key={text.title} />
                        );
                    })}
                </List>
            </Collapse>
        </div>
    )
}

export default CollapseList
