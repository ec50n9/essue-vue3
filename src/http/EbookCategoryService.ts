import client from "."
import {EbookCategoryCreateForm, EbookCategoryUpdateForm} from "./Model"

class EbookCategoryService {
    findAll = () => client.get(`/ebook-categorys`)
    newOne = (ebookCategoryCreateForm: EbookCategoryCreateForm) => client.post(`/ebook-categorys`, ebookCategoryCreateForm)
    findOne = (code: string) => client.get(`/ebook-categorys/${code}`)
    delete = (code: string) => client.delete(`/ebook-categorys/${code}`)
    update = (code: string, ebookCategoryUpdateForm: EbookCategoryUpdateForm) => client.patch(`/ebook-categorys/${code}`, ebookCategoryUpdateForm)
}

export default new EbookCategoryService()