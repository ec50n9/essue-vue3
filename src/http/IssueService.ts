import client from "."
import {IssueCreateForm, IssueUpdateForm} from "./Model"

class IssueService {
    findAll = () => client.get(`/issues`)
    newOne = (issueCreateForm: IssueCreateForm) => client.post(`/issues`, issueCreateForm)
    findOne = (id: string) => client.get(`/issues/${id}`)
    delete = (id: string) => client.delete(`/issues/${id}`)
    update = (id: string, issueUpdateForm: IssueUpdateForm) => client.patch(`/issues/${id}`, issueUpdateForm)
}

export default new IssueService()