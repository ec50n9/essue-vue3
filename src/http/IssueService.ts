import client from "."
import {IssueCreateForm, IssueUpdateForm} from "./Model"

class IssueService {
    findAllWithPaging = (page?: number, size?: number) => client.get(`/issues`, {params: {page, size}})
    newOne = (issueCreateForm: IssueCreateForm) => client.post(`/issues`, issueCreateForm)
    findOne = (id: string) => client.get(`/issues/${id}`)
    delete = (id: string) => client.delete(`/issues/${id}`)
    update = (id: string, issueUpdateForm: IssueUpdateForm) => client.patch(`/issues/${id}`, issueUpdateForm)

    voteIt = (id: string)=>client.post(`/issues/${id}/vote`)

    getCommentsById = (issueId: string) => client.get(`/issues/${issueId}/comments`)
    createComment = (issueId: string, content: string)=>client.post(`/issues/${issueId}/comments`, {content})
}

export default new IssueService()