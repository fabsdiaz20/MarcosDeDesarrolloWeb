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
import EditIcon from '@mui/icons-material/Edit';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Avatar, Chip, Tooltip } from '@mui/material';

const clientes = [
  {
    id: 1,
    nombre: 'María González',
    email: 'maria.gonzalez@email.com',
    telefono: '+34 612 345 678',
    ultimaCompra: '2024-03-15',
    totalCompras: 1250.50,
    estado: 'Activo',
    tipoCliente: 'Premium',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    nombre: 'Carlos Rodríguez',
    email: 'carlos.rodriguez@email.com',
    telefono: '+34 623 456 789',
    ultimaCompra: '2024-03-10',
    totalCompras: 850.75,
    estado: 'Activo',
    tipoCliente: 'Regular',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 3,
    nombre: 'Ana Martínez',
    email: 'ana.martinez@email.com',
    telefono: '+34 634 567 890',
    ultimaCompra: '2024-02-28',
    totalCompras: 2100.25,
    estado: 'Inactivo',
    tipoCliente: 'Premium',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 4,
    nombre: 'Juan López',
    email: 'juan.lopez@email.com',
    telefono: '+34 645 678 901',
    ultimaCompra: '2024-03-18',
    totalCompras: 450.00,
    estado: 'Activo',
    tipoCliente: 'Nuevo',
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
];

const getTipoClienteColor = (tipo) => {
  switch (tipo) {
    case 'Premium':
      return '#8e24aa';
    case 'Regular':
      return '#1976d2';
    case 'Nuevo':
      return '#2e7d32';
    default:
      return '#757575';
  }
};

const getEstadoColor = (estado) => {
  return estado === 'Activo' ? 'success' : 'error';
};

export default function Clientes() {
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
        padding: '55px',
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
          Gestión de Clientes
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
              Lista de Clientes
            </Typography>
          </Box>
          
          <Table>
            <TableHead>
              <TableRow >
                <TableCell sx={{ fontWeight: 'bold' }}>Cliente</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Contacto</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Última Compra</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Total Compras</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Estado</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Tipo</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clientes.map((cliente) => (
                <TableRow 
                  key={cliente.id}
                  sx={{ 
                    '&:hover': { 
                      backgroundColor: '#f5f5f5',
                      transition: 'background-color 0.2s'
                    }
                  }}
                >
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar 
                        src={cliente.avatar} 
                        alt={cliente.nombre}
                        sx={{ 
                          width: 50, 
                          height: 50,
                          boxShadow: 1
                        }}
                      />
                      <div>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'medium' }}>
                          {cliente.nombre}
                        </Typography>
                      </div>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      {cliente.email}
                    </Typography>
                    <Typography variant="body2">
                      {cliente.telefono}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {formatFecha(cliente.ultimaCompra)}
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ color: '#1a237e', fontWeight: 'medium' }}>
                      s/.{cliente.totalCompras.toFixed(2)}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={cliente.estado}
                      color={getEstadoColor(cliente.estado)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={cliente.tipoCliente}
                      sx={{ 
                        backgroundColor: getTipoClienteColor(cliente.tipoCliente),
                        color: 'white',
                      }}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Tooltip title="Ver perfil">
                      <IconButton size="small" sx={{ mr: 1 }}>
                        <VisibilityIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Editar">
                      <IconButton size="small" sx={{ mr: 1 }}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="WhatsApp">
                      <IconButton 
                        size="small"
                        sx={{ 
                          color: '#25D366',
                          '&:hover': { backgroundColor: 'rgba(37, 211, 102, 0.1)' }
                        }}
                      >
                        <WhatsAppIcon />
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