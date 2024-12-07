import Sidebar from '../components/Sidebar';
import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chart from '../Components/Chart';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import UpdateIcon from '@mui/icons-material/Update';
import FilterListIcon from '@mui/icons-material/FilterList';
import { PieChart } from '@mui/x-charts/PieChart';
import { Chart as GoogleChart } from "react-google-charts";
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset, valueFormatter } from '../dataset/weather';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function Dashboard() {
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const anchorRef = useRef(null);

    const options = ['Hoy', 'Ayer', 'Ultimos 7 días', 'Ultimos 30 días', 'Este mes', 'Mes pasado'];

    const handleClick = () => {
        console.log(options[selectedIndex]);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const data = [
        ["Country", "Popularity"],
        ["United States", 30],
        ["Italy", 10],
        ["Spain", 50],
        ["Peru", 700],
    ];

    const chartSetting = {
        xAxis: [{ label: 'rainfall (mm)' }],
        width: 500,
        height: 400,
    };

    function createData(name, supplier, contact) {
        return { name, supplier, contact };
    }

    const rows = [
        createData('Producto A', 'Proveedor 1', 'contacto@proveedor1.com'),
        createData('Producto B', 'Proveedor 2', 'contacto@proveedor2.com'),
        createData('Producto C', 'Proveedor 3', 'contacto@proveedor3.com'),
        createData('Producto D', 'Proveedor 4', 'contacto@proveedor4.com'),
        createData('Producto E', 'Proveedor 5', 'contacto@proveedor5.com'),
    ];

    return (
        <Box sx={{  width:'1500px' }}>
            <Sidebar />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    ml: '20px', 
                    width: { sm: `calc(100% - 200px)` },
                    minHeight: '100vh',
                 
                    
                }}
            >
                {/* Header Section */}
                <Box sx={{ 
                    padding: 2,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '64px' // Add top margin to account for app bar if present
                }}>
                    <Box>
                        <Typography variant="h5">Panel de análisis</Typography>
                        <Typography variant="subtitle2">Bienvenido...</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <UpdateIcon sx={{ mx: 2, color: '#73816E' }} />
                        <FilterListIcon sx={{ mr: 2, color: '#73816E' }} />
                        <ButtonGroup variant="contained" ref={anchorRef}>
                            <Button
                                onClick={handleClick}
                                sx={{ backgroundColor: '#73816E', color: 'white' }}
                            >
                                Hoy: 3 de octubre
                            </Button>
                            <Button
                                size="small"
                                onClick={handleToggle}
                                sx={{ backgroundColor: '#73816E', color: 'white' }}
                            >
                                <ArrowDropDownIcon />
                            </Button>
                        </ButtonGroup>
                    </Box>
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Dropdown Menu */}
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    transition
                    disablePortal
                    sx={{ zIndex: 1000 }}
                >
                    {({ TransitionProps, placement }) => (
                        <Grow {...TransitionProps}>
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList id="split-button-menu" autoFocusItem>
                                        {options.map((option, index) => (
                                            <MenuItem
                                                key={option}
                                                selected={index === selectedIndex}
                                                onClick={(event) => handleMenuItemClick(event, index)}
                                            >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>

                {/* Grid Layout */}
                <Grid container spacing={3}>
                    {/* Statistics Cards */}
                    <Grid item xs={12} md={3}>
                        <Stack spacing={3}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" color="textSecondary">Total de Productos</Typography>
                                    <Typography variant="h5">1,232</Typography>
                                    <Typography variant="body1" color="green">+14% del mes pasado</Typography>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" color="textSecondary">Valor de inventario</Typography>
                                    <Typography variant="h5">s/.12,568</Typography>
                                    <Typography variant="body1" color="green">+5% del mes pasado</Typography>
                                </CardContent>
                            </Card>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={3}>
                        <Stack spacing={3}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" color="textSecondary">Producto Bajo stock</Typography>
                                    <Typography variant="h5">23</Typography>
                                    <Typography variant="body1" color="red">requiere atención inmediata</Typography>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6" color="textSecondary">Rotación de inventario</Typography>
                                    <Typography variant="h5">4.5</Typography>
                                    <Typography variant="body1" color="red">-0.5 del ultimo trimestre</Typography>
                                </CardContent>
                            </Card>
                        </Stack>
                    </Grid>

                    {/* Charts */}
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Movimientos de inventario</Typography>
                                <Box sx={{ height: 300 }}>
                                    <Chart />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Map and Pie Chart */}
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Nuestros Seguidores Internacionales</Typography>
                                <GoogleChart
                                    chartEvents={[
                                        {
                                            eventName: "select",
                                            callback: ({ chartWrapper }) => {
                                                const chart = chartWrapper.getChart();
                                                const selection = chart.getSelection();
                                                if (selection.length === 0) return;
                                                const region = data[selection[0].row + 1];
                                                console.log("Selected : " + region);
                                            },
                                        },
                                    ]}
                                    chartType="GeoChart"
                                    width="100%"
                                    height="300px"
                                    data={data}
                                />
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Tendencias</Typography>
                                <PieChart
                                    series={[
                                        {
                                            data: [
                                                { id: 0, value: 10, label: 'Argollas' },
                                                { id: 1, value: 15, label: 'Colgantes' },
                                                { id: 2, value: 20, label: 'Pandora' },
                                            ],
                                        },
                                    ]}
                                    width={400}
                                    height={300}
                                    colors={['#FF6384', '#36A2EB', '#FFCE56']}
                                />
                            </CardContent>
                        </Card>
                    </Grid>

                
                    <Grid item xs={12} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Rancking de ventas</Typography>
                                <BarChart
                                    dataset={dataset}
                                    yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                                    series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }]}
                                    layout="horizontal"
                                    {...chartSetting}
                                />
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Proveedores</Typography>
                                <TableContainer sx={{ maxHeight: 400 }}>
                                    <Table stickyHeader>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Nombre del Producto</TableCell>
                                                <TableCell>Proveedor</TableCell>
                                                <TableCell>Contacto</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow key={row.name}>
                                                    <TableCell>{row.name}</TableCell>
                                                    <TableCell>{row.supplier}</TableCell>
                                                    <TableCell>{row.contact}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}