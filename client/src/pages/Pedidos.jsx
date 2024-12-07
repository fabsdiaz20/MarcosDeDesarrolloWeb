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
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { Avatar, Chip, Tooltip, Stack } from '@mui/material';

const pedidos = [
  {
    id: 'PED-2024-001',
    cliente: {
      nombre: 'María González',
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
    fecha: '2024-03-20',
    productos: [
      { nombre: 'Anillo de Plata', cantidad: 1 },
      { nombre: 'Pendientes Estrella', cantidad: 2 },
    ],
    total: 299.99,
    estado: 'Pendiente',
    metodoPago: 'Tarjeta de Crédito',
    direccion: 'Av. Arequipa 985',
    trackingNumber: 'TRK123456789'
  },
  {
    id: 'PED-2024-002',
    cliente: {
      nombre: 'Carlos Rodríguez',
      avatar: 'https://i.pravatar.cc/150?img=2',
    },
    fecha: '2024-03-19',
    productos: [
      { nombre: 'Collar de Perlas', cantidad: 1 },
    ],
    total: 159.99,
    estado: 'Enviado',
    metodoPago: 'PayPal',
    direccion: 'Avenida Libertad 45',
    trackingNumber: 'TRK987654321'
  },
  {
    id: 'PED-2024-003',
    cliente: {
      nombre: 'Ana Martínez',
      avatar: 'https://i.pravatar.cc/150?img=3',
    },
    fecha: '2024-03-18',
    productos: [
      { nombre: 'Pulsera de Plata', cantidad: 1 },
      { nombre: 'Anillo Zafiro', cantidad: 1 },
      { nombre: 'Pendientes Perla', cantidad: 2 },
    ],
    total: 499.99,
    estado: 'Entregado',
    metodoPago: 'Transferencia',
    direccion: 'Av los lirios 251',
    trackingNumber: 'TRK456789123'
  },
  {
    id: 'PED-2024-004',
    cliente: {
      nombre: 'Juan López',
      avatar: 'https://i.pravatar.cc/150?img=4',
    },
    fecha: '2024-03-17',
    productos: [
      { nombre: 'Anillo de Compromiso', cantidad: 1 },
    ],
    total: 899.99,
    estado: 'Cancelado',
    metodoPago: 'Tarjeta de Crédito',
    direccion: 'Calle Sol 89',
    trackingNumber: 'TRK789123456'
  },
];

const getEstadoColor = (estado) => {
  switch (estado) {
    case 'Pendiente':
      return 'warning';
    case 'Enviado':
      return 'info';
    case 'Entregado':
      return 'success';
    case 'Cancelado':
      return 'error';
    default:
      return 'default';
  }
};

export default function Pedidos() {
  const SIDEBAR_WIDTH = 240;

  const formatFecha = (fecha) => {
    return new Date(fecha).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <Box 
      sx={{ 
        padding: '24px',
        marginLeft: `${SIDEBAR_WIDTH}px`,
        width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
        minHeight: '100vh',
        
        

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
          Gestión de Pedidos
        </Typography>
        
        <TableContainer 
          component={Paper} 
          sx={{ 
            boxShadow: 3,
            borderRadius: 2,
            overflow: 'hidden',
            width:'1100px'
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
                color: '#73816E'
              }}
            >
              Lista de Pedidos
            </Typography>
          </Box>
          
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                <TableCell sx={{ fontWeight: 'bold' }}>Pedido</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Cliente</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Productos</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Total</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Estado</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Envío</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pedidos.map((pedido) => (
                <TableRow 
                  key={pedido.id}
                  sx={{ 
                    '&:hover': { 
                     
                      transition: 'background-color 0.2s'
                    }
                  }}
                >
                  <TableCell>
                    <Typography variant="subtitle2" sx={{ color: '#1a237e', fontWeight: 'medium' }}>
                      {pedido.id}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {formatFecha(pedido.fecha)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar 
                        src={pedido.cliente.avatar} 
                        alt={pedido.cliente.nombre}
                        sx={{ width: 40, height: 40 }}
                      />
                      <div>
                        <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                          {pedido.cliente.nombre}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {pedido.metodoPago}
                        </Typography>
                      </div>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Stack spacing={0.5}>
                      {pedido.productos.map((producto, index) => (
                        <Typography key={index} variant="body2">
                          {producto.cantidad}x {producto.nombre}
                        </Typography>
                      ))}
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ color: '#1a237e', fontWeight: 'medium' }}>
                      s/.{pedido.total.toFixed(2)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={pedido.estado}
                      color={getEstadoColor(pedido.estado)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ maxWidth: 200 }} noWrap>
                      {pedido.direccion}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {pedido.trackingNumber}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Tooltip title="Ver detalles">
                      <IconButton size="small" sx={{ mr: 1 }}>
                        <VisibilityIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Ver envío">
                      <IconButton size="small" sx={{ mr: 1 }}>
                        <LocalShippingIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Factura">
                      <IconButton 
                        size="small"
                        sx={{ 
                          color: '#1976d2',
                        }}
                      >
                        <ReceiptIcon />
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