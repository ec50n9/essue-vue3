import client from "./index";
import {ResourceCreateForm, ResourceUpdateForm} from "./Model";

class ResourceService {
    findAll = () => client.get(`/resources`)
    newOne = (resourceCreateForm: ResourceCreateForm) => client.post(`/resources`, resourceCreateForm)
    findOne = (code: string) => client.get(`/resources/${code}`)
    delete = (code: string) => client.delete(`/resources/${code}`)
    update = (code: string, resourceUpdateForm: ResourceUpdateForm) => client.patch(`/resources/${code}`, resourceUpdateForm)
    getRoles = (code: string) => client.get(`/resources/${code}/roles`)
}

export default new ResourceService()