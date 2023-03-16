import axios from "axios"
import Config from "react-native-config"

export const createUser = async (email: string, phone: string, password: string) => {
    return axios.post(`${Config.BASE_API_URL}/users`, { email, phone, password })
}
