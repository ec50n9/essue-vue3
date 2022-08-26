import {defineStore} from "pinia";

export const useUserStore = defineStore('user', {
    state() {
        return {
            satoken: ''
        }
    },
    actions: {
        setToken(value: string) {
            this.satoken = value
        }
    },
    persist: {
        enabled: true
    }
})