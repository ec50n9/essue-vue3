import client from "./index";

export abstract class BaseHttpService<K> {
    name: string;

    constructor(name: string) {
        this.name = name
    }

    findAll = () => client.get(`/${this.name}`)
    findOne = (key: K) => client.get(`/${this.name}/${key}`)
    newOne = (createForm: any) => client.post(`/${this.name}`, createForm)
    update = (key: K, updateForm: any) => client.patch(`/${this.name}/${key}`)
    delete = (key: K) => client.delete(`/${this.name}/${key}`)
}

export abstract class PagingHttpService<K> extends BaseHttpService<K> {
    findAllWithPaging = (page?: number, size?: number) => client.get(`/${this.name}`, {params: {page, size}})
}
