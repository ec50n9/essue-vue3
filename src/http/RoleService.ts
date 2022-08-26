import client from "./index";
import {RoleCreateForm, RoleUpdateForm} from "./Model";

class RoleService {
    addResource = (code: string, resourceCode: string) => client.put(`/roles/${code}/resources/${resourceCode}`)
    findAll = () => client.get(`/roles`)
    newOne = (roleCreateForm: RoleCreateForm) => client.post(`/roles`, roleCreateForm)
    getResources = (code: string) => client.get(`/roles/${code}/resources`)
    replaceResources = (code: string, resources: string[]) => client.post(`/roles/${code}/resources`, resources)
    findOne = (code: string) => client.get(`/roles/${code}`)
    delete = (code: string) => client.delete(`/roles/${code}`)
    update = (code: string, roleUpdateForm: RoleUpdateForm) => client.patch(`/roles/${code}`, roleUpdateForm)
    getUsers = (code: string) => client.get(`/roles/${code}/users`)
    removeResource = (code: string, resourceCode: string) => client.delete(`/roles/${code}/resources/${resourceCode}`)
}

export default new RoleService()