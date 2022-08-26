import client from "."
import {EbookCreateForm, EbookUpdateForm} from "./Model"

class EbookService {
    findAll = () => client.get(`/ebooks`)
    newOne = (ebookCreateForm: EbookCreateForm) => client.post(`/ebooks`, ebookCreateForm)
    findOne = (id: string) => client.get(`/ebooks/${id}`)
    delete = (id: string) => client.delete(`/ebooks/${id}`)
    update = (id: string, ebookUpdateForm: EbookUpdateForm) => client.patch(`/ebooks/${id}`, ebookUpdateForm)
}

export default new EbookService()