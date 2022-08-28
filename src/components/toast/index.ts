import {createApp} from "vue";
import EcToast from './EcToast.vue'

class Toast {
    dom = document.createElement("div")

    constructor() {
        this.dom.style.position = 'fixed'
        this.dom.style.top = '2rem'
        this.dom.style.right = '100px'
        document.body.appendChild(this.dom)
    }

    info(message: string, duration: number = 3000) {
        this.create({
            type: 'info',
            message
        }, duration)
    }

    success(message: string, duration: number = 3000) {
        this.create({
            type: 'success',
            message
        }, duration)
    }

    error(message: string, duration: number = 3000) {
        this.create({
            type: 'error',
            message
        }, duration)
    }

    warning(message: string, duration: number = 3000) {
        this.create({
            type: 'warn',
            message
        }, duration)
    }

    create(props: any, duration: number) {
        const container = document.createElement("div")
        const app = createApp(EcToast, props)

        let timeOut: number
        const close = () => {
            app.unmount()
            container.remove()
            if (timeOut) {
                clearTimeout(timeOut)
            }
        }
        app.mount(container)
        this.dom.appendChild(container)

        timeOut = setTimeout(() => {
            close()
        }, duration)
    }
}

export default new Toast()