import Axios from "axios";
import router from "../router";
import {useUserStore} from "../stores/userStore";
import toast from "../components/toast";

const client = Axios.create({
    baseURL: 'http://localhost:8080/api',
})

client.interceptors.request.use(config => {
    // 请求时注入token
    const userStore = useUserStore()
    if (userStore.satoken) {
        // @ts-ignore
        config.headers['satoken'] = userStore.satoken
    }

    console.log('请求参数: ', config)
    return config
}, error => {
    toast.error(error.message)
    return Promise.reject(error)
})

client.interceptors.response.use(response => {
    console.log('返回结果: ', response)
    const {data: {code, success, message: msg}} = response
    if (!success) {
        switch (code) {
            case 3001:
                toast.warning("请登录!")
                router.push("/login")
                break
            default:
                toast.error(msg)
                break
        }
        return Promise.reject(Error(msg))
    }
    return response
}, error => {
    toast.error(error.message)
    return Promise.reject(error)
})

export default client