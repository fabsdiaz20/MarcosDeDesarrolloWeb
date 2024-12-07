import React from 'react';
import Sidebar from '../components/Sidebar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const projects = [
  {
    title: "Rediseño del Catálogo de Anillos",
    status: "Finalizado",
    description: "Actualización del diseño del catálogo de anillos con nuevos modelos y fotos.",
    members: [
      { name: "María", avatar: "https://i.pravatar.cc/40?img=1" },
      { name: "Carlos", avatar: "https://i.pravatar.cc/40?img=2" },
      { name: "Lucía", avatar: "https://i.pravatar.cc/40?img=3" },
    ],
  },
  {
    title: "Promoción de Verano",
    status: "En progreso",
    description: "Campaña de marketing para la promoción de joyas en verano.",
    members: [
      { name: "Ana", avatar: "https://i.pravatar.cc/40?img=4" },
      { name: "Pedro", avatar: "https://i.pravatar.cc/40?img=5" },
      { name: "Sofia", avatar: "https://i.pravatar.cc/40?img=6" },
    ],
  },
  {
    title: "Actualización de Precios",
    status: "Finalizado",
    description: "Ajuste de precios en todas las líneas de productos para la nueva temporada.",
    members: [
      { name: "Javier", avatar: "https://i.pravatar.cc/40?img=7" },
      { name: "Sandra", avatar: "https://i.pravatar.cc/40?img=8" },
      { name: "Laura", avatar: "https://i.pravatar.cc/40?img=9" },
    ],
  },
  {
    title: "Mejora del Servicio al Cliente",
    status: "En progreso",
    description: "Optimización del sistema CRM para mejorar la atención al cliente.",
    members: [
      { name: "Miguel", avatar: "https://i.pravatar.cc/40?img=10" },
      { name: "Paula", avatar: "https://i.pravatar.cc/40?img=11" },
      { name: "Raul", avatar: "https://i.pravatar.cc/40?img=12" },
    ],
  },
];

const Proyectos = () => {
  // Asumiendo que el sidebar tiene un ancho de 240px
  const SIDEBAR_WIDTH = 240;

  return (
    <Box 
      sx={{ 
        padding: '20px',
        marginLeft: `${SIDEBAR_WIDTH}px`,
        width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
        minHeight: '100vh',
        width:'1200px' 
       
      }}
    >
      <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Typography variant="h4" gutterBottom sx={{ marginBottom: 4 }}>
          Proyectos de la Joyería
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <Card 
                variant="outlined" 
                sx={{ 
                  height: '100%',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 3
                  }
                }}
              >
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {project.title}
                  </Typography>
                  <Chip
                    label={project.status}
                    color={project.status === "Finalizado" ? "success" : "warning"}
                    sx={{ marginBottom: 2 }}
                  />
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
                    {project.members.map((member, index) => (
                      <Avatar
                        key={index}
                        alt={member.name}
                        src={member.avatar}
                        sx={{ 
                          marginRight: -1,
                          border: '2px solid #fff',
                          '&:hover': {
                            zIndex: 1
                          }
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <Box 
                  sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    padding: 2,
                    borderTop: '1px solid rgba(0, 0, 0, 0.12)'
                  }}
                >
                  <Button size="small" color="primary">Compartir</Button>
                  <Button size="small" color="primary">Aprender Más</Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Proyectos;