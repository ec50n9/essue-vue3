import client from "./index";
import {PagingHttpService} from "./BaseService";

class UserService extends PagingHttpService<string> {
    // findAllWithPaging = (page?: number, size?: number) => client.get(`/users`, {params: {page, size}})
    // findOne = (username: string) => client.get(`/users/${username}`)
    // replace = (username: string, userReplaceForm: UserReplaceForm) => client.put(`/users/${username}`, userReplaceForm)
    // newOne = (userCreateForm: UserCreateForm) => client.post(`/users`, userCreateForm)
    // delete = (username: string) => client.delete(`/users/${username}`)
    // update = (username: string, userUpdateForm: UserUpdateForm) => client.patch(`/users/${username}`, userUpdateForm)

    addRole = (username: string, roleCode: string) => client.put(`/users/${username}/roles/${roleCode}`)
    removeRole = (username: string, roleCode: string) => client.delete(`/users/${username}/roles/${roleCode}`)
    getRoles = (username: string) => client.get(`/users/${username}/roles`)
    replaceRoles = (username: string, roles: string[]) => client.post(`/users/${username}/roles`, roles)
    getResources = (username: string) => client.get(`/users/${username}/resources`)
}

export const userService = new UserService("users")