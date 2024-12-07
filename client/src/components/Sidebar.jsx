import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PedidosIcon from '@mui/icons-material/ShoppingCart';  
import ProductosIcon from '@mui/icons-material/Store'; 
import YourImage from '../logo.png'; 
import { useNavigate } from 'react-router-dom';
import GroupIcon from '@mui/icons-material/Group';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const drawerWidth = 240;
const navbarHeight = 64; // Altura estándar del Navbar de MUI

const Main = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  display: 'flex',
  flexDirection: 'column',
  marginTop: navbarHeight,
}));

const LogoContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  flexDirection: 'column',
}));

const LogoImage = styled('img')(({ theme }) => ({
  width: '80px',
  height: '80px',
  marginBottom: theme.spacing(1),
}));

export default function Sidebar() {
  const navigate = useNavigate();
  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#73816E',
            top: `${navbarHeight}px`, 
            height: `calc(100% - ${navbarHeight}px)`, 
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/Dashboard") }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: "initial",
                px: 2.5,
              }}
            >
              <ListItemIcon sx={{ minWidth: 0, mr: 3, justifyContent: "center" }}>
                <DashboardIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={{ opacity: 1, color: 'white' }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/Products") }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: "initial",
                px: 2.5,
              }}
            >
              <ListItemIcon sx={{ minWidth: 0, mr: 3, justifyContent: "center" }}>
                <ProductosIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Products" sx={{ opacity: 1, color: 'white' }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/Providers") }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: "initial",
                px: 2.5,
              }}
            >
              <ListItemIcon sx={{ minWidth: 0, mr: 3, justifyContent: "center" }}>
                <PedidosIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Proveedores" sx={{ opacity: 1, color: 'white' }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/Proyectos") }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: "initial",
                px: 2.5,
              }}
            >
              <ListItemIcon sx={{ minWidth: 0, mr: 3, justifyContent: "center" }}>
                <GroupIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Proyectos" sx={{ opacity: 1, color: 'white' }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => { navigate("/Clients") }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: "initial",
                px: 2.5,
              }}
            >
              <ListItemIcon sx={{ minWidth: 0, mr: 3, justifyContent: "center" }}>
                < AssignmentIndIcon sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary="Clientes" sx={{ opacity: 1, color: 'white' }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}