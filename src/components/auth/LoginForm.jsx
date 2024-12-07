import { useState, useContext } from "react"
import { AuthContext } from "../../context/User/userContext"
import { useNavigate } from "react-router-dom";




export const LoginForm = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate()
    const [ credentials, setCredentials ] = useState({
        email: "",
        password: ""
    });

    const [ error, setError ] = useState("")


    const handleChange = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async(event) => {
        event.preventDefault()

        try {
            await login(credentials)
            navigate('/')
        } catch (error) {
            setError(`Error al iniciar Sesión. Verifica tus credenciales. ERROR: ${error}`)
        }
    }



    return (
      <form className="form flex-center" onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="email">Correo Electronico</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Por favor Ingresa tu email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form__group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Por favor Ingresa tu constrasela"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        {error && <p className="form-error">{error}</p>}
        <button type="submit" className="button login-button">
          Iniciar Sesión
        </button>
      </form>
    );

}