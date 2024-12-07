import React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import Divider from '@mui/material/Divider';
import { Avatar, Rating, Tooltip } from '@mui/material';
import arete1 from '../arete1.jpg';
import arete2 from '../arete2.jpg';
import arete3 from '../arete3.jpg';
import arete4 from '../arete4.jpg';

const productos = [
  {
    id: 1,
    nombre: 'Pendientes de Plata Estrella',
    variante: 'Plata 925',
    precio: 49.99,
    stock: 120,
    categoria: 'Pendientes',
    rating: 4.8,
    reviews: 30,
    imagen: arete1,
  },
  {
    id: 2,
    nombre: 'Aretes Pandora',
    variante: 'Plata 925',
    precio: 159.99,
    stock: 45,
    categoria: 'Pendientes',
    rating: 4.9,
    reviews: 50,
    imagen: arete2,
  },
  {
    id: 3,
    nombre: 'Aretes de gota',
    variante: 'Plata 925',
    precio: 79.99,
    stock: 60,
    categoria: 'Pulseras',
    rating: 4.7,
    reviews: 20,
    imagen: arete3,
  },
  {
    id: 4,
    nombre: 'Aros',
    variante: 'Plata 925',
    precio: 89.99,
    stock: 30,
    categoria: 'Collares',
    rating: 4.5,
    reviews: 25,
    imagen: arete4,
  },
];

export default function Productos() {

  const SIDEBAR_WIDTH = 240;

  return (
    <Box 
      sx={{ 
        padding: '24px',
        marginLeft: `${SIDEBAR_WIDTH}px`,
        width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
        minHeight: '100vh',
        width:'1100px'
       
      }}
    >
      <Box sx={{ maxWidth: '1400px', margin: '0 auto' }}>
        <Typography 
          variant="h4" 
          sx={{ 
            marginBottom: 4,
            fontWeight: 'bold',
            color: '#73816E'
          }}
        >
          Control de inventario
        </Typography>
        
        <TableContainer 
          component={Paper} 
          sx={{ 
            boxShadow: 3,
            borderRadius: 2,
            overflow: 'hidden'
          }}
        >
          <Box sx={{ 
            padding: '16px 24px',
            backgroundColor: '#f5f5f5',
            borderBottom: '1px solid rgba(224, 224, 224, 1)'
          }}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontSize: '1.1rem',
                fontWeight: 'medium',
                color: '#1a237e'
              }}
            >
              Productos en Stock
            </Typography>
          </Box>
          
          <Table>
            <TableHead>
              <TableRow >
                <TableCell sx={{ fontWeight: 'bold', width: '15%' }}>Imagen</TableCell>
                <TableCell sx={{ fontWeight: 'bold', width: '25%' }}>Nombre</TableCell>
                <TableCell sx={{ fontWeight: 'bold', width: '15%' }}>Precio</TableCell>
                <TableCell sx={{ fontWeight: 'bold', width: '10%' }}>Stock</TableCell>
                <TableCell sx={{ fontWeight: 'bold', width: '15%' }}>Categoría</TableCell>
                <TableCell sx={{ fontWeight: 'bold', width: '10%' }}>Rating</TableCell>
                <TableCell sx={{ fontWeight: 'bold', width: '10%' }}>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productos.map((producto) => (
                <TableRow 
                  key={producto.id}
                  sx={{ 
                    '&:hover': { 
                      
                      transition: 'background-color 0.2s'
                    }
                  }}
                >
                  <TableCell>
                    <Avatar 
                      alt={producto.nombre} 
                      src={producto.imagen} 
                      variant="rounded"
                      sx={{ 
                        width: 80,
                        height: 80,
                        boxShadow: 1,
                        '&:hover': {
                          transform: 'scale(1.05)',
                          transition: 'transform 0.2s'
                        }
                      }} 
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
                      {producto.nombre}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {producto.variante}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ color: '#1a237e', fontWeight: 'medium' }}>
                      s/.{producto.precio.toFixed(2)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography 
                      sx={{ 
                        color: producto.stock < 50 ? '#d32f2f' : '#2e7d32',
                        fontWeight: 'medium'
                      }}
                    >
                      {producto.stock}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">
                      {producto.categoria}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box>
                      <Rating 
                        value={producto.rating} 
                        readOnly 
                        precision={0.1} 
                        size="small"
                      />
                      <Typography variant="body2" color="text.secondary">
                        {producto.rating} ({producto.reviews})
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Tooltip title="Ver detalles">
                      <IconButton size="small" sx={{ mr: 1 }}>
                        <VisibilityIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Descargar información">
                      <IconButton size="small">
                        <DownloadIcon />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}