import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar } from "./components/Navbar";
import Sidebar from './components/Sidebar';
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./routes";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { LoginPage } from "./pages/LoginPage";
import { TasksPage } from "./pages/TaskPage";
import { TaskProvider } from "./context/tasksContext";
import Productos from './pages/Productos';
import Pedidos from './pages/Pedidos';
import Proyectos from './pages/Proyectos';
import Clientes from './pages/Clientes';
import Dashboard from './pages/Dashboard';

import Products from "./pages/Products";
import CreateProduct from "./pages/CreateProduct";
import UpdateProduct from "./pages/UpdateProduct";

import Clients from "./pages/Clients";
import CreateClient from "./pages/CreateClient";
import UpdateClient from "./pages/UpdateClient";

import Providers from "./pages/Providers";
import CreateProvider from "./pages/CreateProvider";
import UpdateProvider from "./pages/UpdateProvider";


function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Content />
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

function Content() {
  const location = useLocation();

  // Ocultar Sidebar en las rutas específicas
  const hideSidebar = ["/", "/login", "/register"].includes(location.pathname);

  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      {/* Sidebar: se posiciona de forma fija, sin sobreponerse al contenido */}
      <div className={`sidebar ${!hideSidebar ? 'd-block' : 'd-none'}`}>
        <Sidebar />
      </div>

      {/* Contenedor principal con margen a la izquierda cuando el Sidebar está visible */}
      <main className={`container-fluid px-10 md:px-0 ${!hideSidebar ? 'ml-250' : 'ml-0'}`} style={{ minHeight: '100vh', backgroundColor: 'white' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/add-task" element={<TaskFormPage />} />
            <Route path="/tasks/:id" element={<TaskFormPage />} />
            <Route path="/profile" element={<h1>Profile</h1>} />
            <Route path="/Dashboard" exact element={<Dashboard />} />
            <Route path="/Productos" exact element={<Productos />} />
            <Route path="/Pedidos" exact element={<Pedidos />} />
            <Route path="/Proyectos" exact element={<Proyectos />} />
            <Route path="/Clientes" exact element={<Clientes />} />
            <Route path='/products' exact element={<Products />} />
            <Route path='/create' exact element={<CreateProduct />} />
            <Route path='/update/:id' exact element={<UpdateProduct />} />

            <Route path='/clients' exact element={<Clients />} />
            <Route path='/create-client' exact element={<CreateClient />} />
            <Route path='/update-client/:id' exact element={<UpdateClient />} />

            <Route path='/providers' exact element={<Providers />} />
            <Route path='/create-provider' exact element={<CreateProvider />} />
            <Route path='/update-provider/:id' exact element={<UpdateProvider />} />


          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
