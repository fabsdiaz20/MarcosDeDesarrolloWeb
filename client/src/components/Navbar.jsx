import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Box, IconButton, Badge } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  const handleProfileMenuOpen = (event) => {
    console.log("Abrir menú de perfil");
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: '#73816E' }} className="mb-4">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to={isAuthenticated ? "/Dashboard" : "/"} style={{ color: '#F9F9F4', textDecoration: 'none' }}>
                YourShine
              </Link>
            </Typography>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              {isAuthenticated ? (
                <>
                  <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <IconButton size="large" aria-label="show 4 new mails" sx={{ color: '#F9F9F4' }}>
                      <Badge badgeContent={4} color="error">
                        <MailIcon />
                      </Badge>
                    </IconButton>
                    <IconButton size="large" aria-label="show 17 new notifications" sx={{ color: '#F9F9F4' }}>
                      <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                      </Badge>
                    </IconButton>
                    <IconButton
                      size="large"
                      edge="end"
                      aria-label="account of current user"
                      aria-haspopup="true"
                      onClick={handleProfileMenuOpen}
                      sx={{ color: '#F9F9F4' }}
                    >
                      <AccountCircle />
                    </IconButton>
                  </Box>
                  {/* Verificar que user esté disponible antes de mostrar el nombre */}
                  <Typography variant="body1" sx={{ color: '#F9F9F4' }}>
                    Bienvenid@ {user ? user.username : "Usuario"}
                  </Typography>
                  <Button onClick={() => logout()} sx={{ color: '#F9F9F4' }}>
                    Cerrar Sesión
                  </Button>
                </>
              ) : (
                <>
                  <ButtonLink style={{ color: '#F9F9F4' }} to="/login">Iniciar Sesión</ButtonLink>
                  <ButtonLink style={{ color: '#F9F9F4' }} to="/register">Registrarse</ButtonLink>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      
      <Toolbar />
    </>
  );
}

