import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import Logo from "../../assets/logo.png";
import BusinessIcon from '@mui/icons-material/Business';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookIcon from '@mui/icons-material/Book';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import Modal from "@mui/material/Modal";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    const [isCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    const Item = ({ title, to, icon, selected, setSelected }) => {
        const handleLogout = () => {
            sessionStorage.removeItem("tokenXYCRM");
        };

        return (
            <MenuItem
                active={selected === title}
                onClick={() => {
                    setSelected(title);
                    if (title === "Cerrar sesión") {
                        handleLogout();
                    }
                }}
                icon={icon}
            >
                <Typography style={{ fontSize: "20px" }}>{title}</Typography>
                <Link to={to} />
            </MenuItem>
        );
    };

    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                zIndex: 1000,
                overflowY: "auto",
                width: `16vw`,
                "& .pro-sidebar": {
                    height: '100vh',
                    maxWidth: `16vw !important`,
                },
                "& .pro-sidebar-inner": {
                    background: `#29313a !important`,
                    height: '100%',
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 0px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#ffffff !important",
                },
                "& .pro-menu-item.active": {
                    color: "#ffffff !important",
                },
            }}>
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape='square'>
                    {!isCollapsed && (
                        <Box mb='25px'>
                            <Box display='flex' justifyContent='center' alignItems='center'>
                                
                            </Box>
                        </Box>
                    )}
                    <Box paddingLeft={isCollapsed ? undefined : "5%"}>
                        {/* <Item
              title='Dashboard'
              to='/'
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}

                        <Item
                            title="Clientes"
                            to="/client"
                            icon={<AssignmentIndIcon style={{ fontSize: "20px" }} />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        {userType === "1" && (
                            <Item
                                title='Productos'
                                to='/company'
                                icon={<Inventory2Icon style={{ fontSize: "20px" }} />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        )}
                        {userType === "1" && (
                            <Item
                                title='Empresas'
                                to='/business'
                                icon={<BusinessIcon style={{ fontSize: "20px" }} />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        )}
                        {userType === "1" && (
                            <Item
                                title='Usuarios'
                                to='/user'
                                icon={<PersonIcon style={{ fontSize: "20px" }} />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        )}
                        {userType === "1" && (
                            <Item
                                title='Empleados'
                                to='/employee'
                                icon={<AccountCircleIcon style={{ fontSize: "20px" }} />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        )}
                        {userType === "1" && (
                            <Item
                                title='Informes'
                                to='/reports'
                                icon={<BookIcon style={{ fontSize: "20px" }} />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        )}
                        <div style={{ position: 'fixed', bottom: 0}}>
                            <Item
                                title='Cerrar sesión'
                                to='/'
                                icon={<LoginIcon style={{ fontSize: "20px" }} />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </div>

                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;