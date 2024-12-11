import { useContext } from "react" // Hook de React utilizado para acceder al contexto global de la aplicación, en este caso, AuthContext. Permite obtener información sobre el estado de autenticación del usuario.
import { AuthContext } from "../context/User/userContext" // Contexto personalizado que contiene información sobre el usuario actual y su estado de autenticación.
import { Navigate } from "react-router-dom" // Componente de react-router-dom que permite redirigir a los usuarios no autenticados a una ruta específica, como la página de inicio de sesión (/login).

export const PrivateRoute = ({children}) => {  // Se define el componente funcional PrivateRoute que recibe una propiedad llamada children. children representa los componentes o elementos que se deben renderizar si el usuario está autenticado.
    const { user } = useContext(AuthContext)  // Acceso al Contexto de Autenticación: Utiliza useContext para obtener la información del usuario desde AuthContext.La clave principal en el contexto es user, que indica si un usuario está autenticado
                                                // AuthContext devuelve un objeto con información del usuario. En este caso, solo se desestructura la propiedad user.
    return user ? children : <Navigate to="/login" />
}

//Se verifica si user tiene un valor (indicando que el usuario está autenticado):
// Si user existe: Se renderizan los componentes hijos (children).
// Si user no existe: El componente redirige al usuario a la ruta /login utilizando <Navigate>.
