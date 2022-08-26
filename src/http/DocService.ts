import client from "."
import {DocCreateForm, DocUpdateForm} from "./Model"

class DocService {
    findAll = () => client.get(`/docs`)
    newOne = (docCreateForm: DocCreateForm) => client.post(`/docs`, docCreateForm)
    findOne = (id: string) => client.get(`/docs/${id}`)
    delete = (id: string) => client.delete(`/docs/${id}`)
    update = (id: string, docUpdateForm: DocUpdateForm) => client.patch(`/docs/${id}`, docUpdateForm)
}

export default new DocService()