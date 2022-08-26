import client from "."
import {IssueCategoryCreateForm, IssueCategoryUpdateForm} from "./Model"

class IssueCategoryService {
    findAll = () => client.get(`/issue-categorys`)
    newOne = (issueCategoryCreateForm: IssueCategoryCreateForm) => client.post(`/issue-categorys`, issueCategoryCreateForm)
    findOne = (code: string) => client.get(`/issue-categorys/${code}`)
    delete = (code: string) => client.delete(`/issue-categorys/${code}`)
    update = (code: string, issueCategoryUpdateForm: IssueCategoryUpdateForm) => client.patch(`/issue-categorys/${code}`, issueCategoryUpdateForm)
}

export default new IssueCategoryService()