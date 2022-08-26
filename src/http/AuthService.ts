import {AuthLoginForm, UserCreateForm} from "./Model";
import client from "./index";

class AuthService {
    register = (createForm: UserCreateForm) => client.post("/auth/register", createForm)
    login = (loginForm: AuthLoginForm) => client.post("/auth/token", loginForm)
    self = () => client.get("/auth/self")
    logout = () => client.delete("/auth/logout")
}

export default new AuthService()
