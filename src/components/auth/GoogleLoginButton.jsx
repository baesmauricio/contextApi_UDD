import { useContext } from "react"
import { AuthContext } from "../../context/User/userContext"


export const GoogleLoginButton = () => {
    const {  loginWithGoogle } = useContext(AuthContext);

    return (
        <div className="google-button-container">
            {/* <img src="logo Google" alt="" /> */}
            <button className="google-button" onClick={loginWithGoogle}>Entrar con Google</button>
        </div>
    )
}