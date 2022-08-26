/**
 *
 * @export
 * @interface AuthLoginForm
 */
export interface AuthLoginForm {
    /**
     *
     * @type {string}
     * @memberof AuthLoginForm
     */
    username?: string;
    /**
     *
     * @type {string}
     * @memberof AuthLoginForm
     */
    password?: string;
}

/**
 *
 * @export
 * @interface Doc
 */
export interface Doc {
    /**
     *
     * @type {string}
     * @memberof Doc
     */
    name?: string;
    /**
     *
     * @type {DocContent}
     * @memberof Doc
     */
    content?: DocContent;
    /**
     *
     * @type {Ebook}
     * @memberof Doc
     */
    ebook?: Ebook;
    /**
     *
     * @type {number}
     * @memberof Doc
     */
    sort?: number;
    /**
     *
     * @type {Doc}
     * @memberof Doc
     */
    parent?: Doc;
    /**
     *
     * @type {number}
     * @memberof Doc
     */
    viewCount?: number;
    /**
     *
     * @type {number}
     * @memberof Doc
     */
    voteCount?: number;
    /**
     *
     * @type {string}
     * @memberof Doc
     */
    id?: string;
    /**
     *
     * @type {Doc}
     * @memberof Doc
     */
    self?: Doc;
}

/**
 *
 * @export
 * @interface DocContent
 */
export interface DocContent {
    /**
     *
     * @type {string}
     * @memberof DocContent
     */
    content?: string;
    /**
     *
     * @type {string}
     * @memberof DocContent
     */
    id?: string;
    /**
     *
     * @type {DocContent}
     * @memberof DocContent
     */
    self?: DocContent;
}

/**
 *
 * @export
 * @interface DocCreateForm
 */
export interface DocCreateForm {
    /**
     *
     * @type {string}
     * @memberof DocCreateForm
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof DocCreateForm
     */
    content?: string;
    /**
     *
     * @type {string}
     * @memberof DocCreateForm
     */
    ebookId?: string;
    /**
     *
     * @type {number}
     * @memberof DocCreateForm
     */
    sort?: number;
}

/**
 *
 * @export
 * @interface DocDetailRendered
 */
export interface DocDetailRendered {
    /**
     *
     * @type {string}
     * @memberof DocDetailRendered
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof DocDetailRendered
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof DocDetailRendered
     */
    content?: string;
    /**
     *
     * @type {Doc}
     * @memberof DocDetailRendered
     */
    parent?: Doc;
    /**
     *
     * @type {EbookDetailRendered}
     * @memberof DocDetailRendered
     */
    ebook?: EbookDetailRendered;
    /**
     *
     * @type {number}
     * @memberof DocDetailRendered
     */
    sort?: number;
    /**
     *
     * @type {number}
     * @memberof DocDetailRendered
     */
    viewCount?: number;
    /**
     *
     * @type {number}
     * @memberof DocDetailRendered
     */
    voteCount?: number;
}

/**
 *
 * @export
 * @interface DocListRendered
 */
export interface DocListRendered {
    /**
     *
     * @type {string}
     * @memberof DocListRendered
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof DocListRendered
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof DocListRendered
     */
    ebookName?: string;
    /**
     *
     * @type {number}
     * @memberof DocListRendered
     */
    sort?: number;
    /**
     *
     * @type {number}
     * @memberof DocListRendered
     */
    viewCount?: number;
    /**
     *
     * @type {number}
     * @memberof DocListRendered
     */
    voteCount?: number;
}

/**
 *
 * @export
 * @interface DocUpdateForm
 */
export interface DocUpdateForm {
    /**
     *
     * @type {string}
     * @memberof DocUpdateForm
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof DocUpdateForm
     */
    content?: string;
    /**
     *
     * @type {string}
     * @memberof DocUpdateForm
     */
    parentId?: string;
    /**
     *
     * @type {string}
     * @memberof DocUpdateForm
     */
    ebookId?: string;
    /**
     *
     * @type {number}
     * @memberof DocUpdateForm
     */
    sort?: number;
    /**
     *
     * @type {number}
     * @memberof DocUpdateForm
     */
    viewCount?: number;
    /**
     *
     * @type {number}
     * @memberof DocUpdateForm
     */
    voteCount?: number;
}

/**
 *
 * @export
 * @interface Ebook
 */
export interface Ebook {
    /**
     *
     * @type {string}
     * @memberof Ebook
     */
    name?: string;
    /**
     *
     * @type {EbookCategory}
     * @memberof Ebook
     */
    category?: EbookCategory;
    /**
     *
     * @type {string}
     * @memberof Ebook
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof Ebook
     */
    cover?: string;
    /**
     *
     * @type {number}
     * @memberof Ebook
     */
    docCount?: number;
    /**
     *
     * @type {number}
     * @memberof Ebook
     */
    viewCount?: number;
    /**
     *
     * @type {number}
     * @memberof Ebook
     */
    voteCount?: number;
    /**
     *
     * @type {string}
     * @memberof Ebook
     */
    id?: string;
    /**
     *
     * @type {Ebook}
     * @memberof Ebook
     */
    self?: Ebook;
}

/**
 *
 * @export
 * @interface EbookCategory
 */
export interface EbookCategory {
    /**
     *
     * @type {string}
     * @memberof EbookCategory
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof EbookCategory
     */
    code?: string;
    /**
     *
     * @type {Array<EbookCategory>}
     * @memberof EbookCategory
     */
    childrens?: Array<EbookCategory>;
    /**
     *
     * @type {string}
     * @memberof EbookCategory
     */
    id?: string;
    /**
     *
     * @type {EbookCategory}
     * @memberof EbookCategory
     */
    self?: EbookCategory;
}

/**
 *
 * @export
 * @interface EbookCategoryCreateForm
 */
export interface EbookCategoryCreateForm {
    /**
     *
     * @type {string}
     * @memberof EbookCategoryCreateForm
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof EbookCategoryCreateForm
     */
    code?: string;
}

/**
 *
 * @export
 * @interface EbookCategoryQueryRendered
 */
export interface EbookCategoryQueryRendered {
    /**
     *
     * @type {string}
     * @memberof EbookCategoryQueryRendered
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof EbookCategoryQueryRendered
     */
    code?: string;
}

/**
 *
 * @export
 * @interface EbookCategoryUpdateForm
 */
export interface EbookCategoryUpdateForm {
    /**
     *
     * @type {string}
     * @memberof EbookCategoryUpdateForm
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof EbookCategoryUpdateForm
     */
    code?: string;
}

/**
 *
 * @export
 * @interface EbookCreateForm
 */
export interface EbookCreateForm {
    /**
     *
     * @type {string}
     * @memberof EbookCreateForm
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof EbookCreateForm
     */
    categoryName?: string;
    /**
     *
     * @type {string}
     * @memberof EbookCreateForm
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof EbookCreateForm
     */
    cover?: string;
    /**
     *
     * @type {number}
     * @memberof EbookCreateForm
     */
    docCount?: number;
    /**
     *
     * @type {number}
     * @memberof EbookCreateForm
     */
    viewCount?: number;
    /**
     *
     * @type {number}
     * @memberof EbookCreateForm
     */
    voteCount?: number;
}

/**
 *
 * @export
 * @interface EbookDetailRendered
 */
export interface EbookDetailRendered {
    /**
     *
     * @type {string}
     * @memberof EbookDetailRendered
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof EbookDetailRendered
     */
    name?: string;
    /**
     *
     * @type {EbookCategoryQueryRendered}
     * @memberof EbookDetailRendered
     */
    category?: EbookCategoryQueryRendered;
    /**
     *
     * @type {string}
     * @memberof EbookDetailRendered
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof EbookDetailRendered
     */
    cover?: string;
    /**
     *
     * @type {number}
     * @memberof EbookDetailRendered
     */
    docCount?: number;
    /**
     *
     * @type {number}
     * @memberof EbookDetailRendered
     */
    viewCount?: number;
    /**
     *
     * @type {number}
     * @memberof EbookDetailRendered
     */
    voteCount?: number;
}

/**
 *
 * @export
 * @interface EbookListRendered
 */
export interface EbookListRendered {
    /**
     *
     * @type {string}
     * @memberof EbookListRendered
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof EbookListRendered
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof EbookListRendered
     */
    categoryName?: string;
    /**
     *
     * @type {string}
     * @memberof EbookListRendered
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof EbookListRendered
     */
    cover?: string;
    /**
     *
     * @type {number}
     * @memberof EbookListRendered
     */
    docCount?: number;
    /**
     *
     * @type {number}
     * @memberof EbookListRendered
     */
    viewCount?: number;
    /**
     *
     * @type {number}
     * @memberof EbookListRendered
     */
    voteCount?: number;
}

/**
 *
 * @export
 * @interface EbookUpdateForm
 */
export interface EbookUpdateForm {
    /**
     *
     * @type {string}
     * @memberof EbookUpdateForm
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof EbookUpdateForm
     */
    categoryName?: string;
    /**
     *
     * @type {string}
     * @memberof EbookUpdateForm
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof EbookUpdateForm
     */
    cover?: string;
    /**
     *
     * @type {number}
     * @memberof EbookUpdateForm
     */
    docCount?: number;
    /**
     *
     * @type {number}
     * @memberof EbookUpdateForm
     */
    viewCount?: number;
    /**
     *
     * @type {number}
     * @memberof EbookUpdateForm
     */
    voteCount?: number;
}

/**
 *
 * @export
 * @interface Issue
 */
export interface Issue {
    /**
     *
     * @type {string}
     * @memberof Issue
     */
    title?: string;
    /**
     *
     * @type {string}
     * @memberof Issue
     */
    content?: string;
    /**
     *
     * @type {IssueCategory}
     * @memberof Issue
     */
    category?: IssueCategory;
    /**
     *
     * @type {User}
     * @memberof Issue
     */
    author?: User;
    /**
     *
     * @type {string}
     * @memberof Issue
     */
    slug?: string;
    /**
     *
     * @type {string}
     * @memberof Issue
     */
    launchedAt?: string;
    /**
     *
     * @type {string}
     * @memberof Issue
     */
    id?: string;
}

/**
 *
 * @export
 * @interface IssueCategory
 */
export interface IssueCategory {
    /**
     *
     * @type {string}
     * @memberof IssueCategory
     */
    name?: string;
    /**
     *
     * @type {IssueCategory}
     * @memberof IssueCategory
     */
    parent?: IssueCategory;
    /**
     *
     * @type {string}
     * @memberof IssueCategory
     */
    id?: string;
}

/**
 *
 * @export
 * @interface IssueCategoryCreateForm
 */
export interface IssueCategoryCreateForm {
    /**
     *
     * @type {string}
     * @memberof IssueCategoryCreateForm
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof IssueCategoryCreateForm
     */
    code?: string;
}

/**
 *
 * @export
 * @interface IssueCategoryQueryRendered
 */
export interface IssueCategoryQueryRendered {
    /**
     *
     * @type {string}
     * @memberof IssueCategoryQueryRendered
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof IssueCategoryQueryRendered
     */
    code?: string;
}

/**
 *
 * @export
 * @interface IssueCategoryUpdateForm
 */
export interface IssueCategoryUpdateForm {
    /**
     *
     * @type {string}
     * @memberof IssueCategoryUpdateForm
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof IssueCategoryUpdateForm
     */
    code?: string;
}

/**
 *
 * @export
 * @interface IssueCreateForm
 */
export interface IssueCreateForm {
    /**
     *
     * @type {string}
     * @memberof IssueCreateForm
     */
    title?: string;
    /**
     *
     * @type {string}
     * @memberof IssueCreateForm
     */
    content?: string;
    /**
     *
     * @type {string}
     * @memberof IssueCreateForm
     */
    category?: string;
    /**
     *
     * @type {string}
     * @memberof IssueCreateForm
     */
    author?: string;
}

/**
 *
 * @export
 * @interface IssueDetailRendered
 */
export interface IssueDetailRendered {
    /**
     *
     * @type {string}
     * @memberof IssueDetailRendered
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof IssueDetailRendered
     */
    title?: string;
    /**
     *
     * @type {string}
     * @memberof IssueDetailRendered
     */
    content?: string;
    /**
     *
     * @type {IssueCategoryQueryRendered}
     * @memberof IssueDetailRendered
     */
    category?: IssueCategoryQueryRendered;
    /**
     *
     * @type {UserQueryRendered}
     * @memberof IssueDetailRendered
     */
    author?: UserQueryRendered;
}

/**
 *
 * @export
 * @interface IssueListRendered
 */
export interface IssueListRendered {
    /**
     *
     * @type {string}
     * @memberof IssueListRendered
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof IssueListRendered
     */
    title?: string;
    /**
     *
     * @type {string}
     * @memberof IssueListRendered
     */
    content?: string;
    /**
     *
     * @type {string}
     * @memberof IssueListRendered
     */
    category?: string;
    /**
     *
     * @type {string}
     * @memberof IssueListRendered
     */
    author?: string;
}

/**
 *
 * @export
 * @interface IssueUpdateForm
 */
export interface IssueUpdateForm {
    /**
     *
     * @type {string}
     * @memberof IssueUpdateForm
     */
    title?: string;
    /**
     *
     * @type {string}
     * @memberof IssueUpdateForm
     */
    content?: string;
    /**
     *
     * @type {string}
     * @memberof IssueUpdateForm
     */
    category?: string;
    /**
     *
     * @type {string}
     * @memberof IssueUpdateForm
     */
    author?: string;
}

/**
 *
 * @export
 * @interface PageRenderedUserQueryRendered
 */
export interface PageRenderedUserQueryRendered {
    /**
     *
     * @type {Array<UserQueryRendered>}
     * @memberof PageRenderedUserQueryRendered
     */
    content?: Array<UserQueryRendered>;
    /**
     *
     * @type {number}
     * @memberof PageRenderedUserQueryRendered
     */
    total?: number;
    /**
     *
     * @type {number}
     * @memberof PageRenderedUserQueryRendered
     */
    size?: number;
    /**
     *
     * @type {number}
     * @memberof PageRenderedUserQueryRendered
     */
    current?: number;
}

/**
 *
 * @export
 * @interface Resource
 */
export interface Resource {
    /**
     *
     * @type {string}
     * @memberof Resource
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof Resource
     */
    method?: string;
    /**
     *
     * @type {string}
     * @memberof Resource
     */
    uri?: string;
    /**
     *
     * @type {string}
     * @memberof Resource
     */
    id?: string;
}

/**
 *
 * @export
 * @interface ResourceCreateForm
 */
export interface ResourceCreateForm {
    /**
     *
     * @type {string}
     * @memberof ResourceCreateForm
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof ResourceCreateForm
     */
    code?: string;
    /**
     *
     * @type {string}
     * @memberof ResourceCreateForm
     */
    method?: string;
    /**
     *
     * @type {string}
     * @memberof ResourceCreateForm
     */
    uri?: string;
    /**
     *
     * @type {number}
     * @memberof ResourceCreateForm
     */
    status?: number;
}

/**
 *
 * @export
 * @interface ResourceQueryRendered
 */
export interface ResourceQueryRendered {
    /**
     *
     * @type {string}
     * @memberof ResourceQueryRendered
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof ResourceQueryRendered
     */
    method?: string;
    /**
     *
     * @type {string}
     * @memberof ResourceQueryRendered
     */
    uri?: string;
}

/**
 *
 * @export
 * @interface ResourceUpdateForm
 */
export interface ResourceUpdateForm {
    /**
     *
     * @type {string}
     * @memberof ResourceUpdateForm
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof ResourceUpdateForm
     */
    code?: string;
    /**
     *
     * @type {string}
     * @memberof ResourceUpdateForm
     */
    method?: string;
    /**
     *
     * @type {string}
     * @memberof ResourceUpdateForm
     */
    uri?: string;
    /**
     *
     * @type {number}
     * @memberof ResourceUpdateForm
     */
    status?: number;
}

/**
 *
 * @export
 * @interface Role
 */
export interface Role {
    /**
     *
     * @type {string}
     * @memberof Role
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof Role
     */
    code?: string;
    /**
     *
     * @type {Array<User>}
     * @memberof Role
     */
    users?: Array<User>;
    /**
     *
     * @type {Array<Resource>}
     * @memberof Role
     */
    resources?: Array<Resource>;
    /**
     *
     * @type {string}
     * @memberof Role
     */
    id?: string;
}

/**
 *
 * @export
 * @interface RoleCreateForm
 */
export interface RoleCreateForm {
    /**
     *
     * @type {string}
     * @memberof RoleCreateForm
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof RoleCreateForm
     */
    code?: string;
}

/**
 *
 * @export
 * @interface RoleQueryRendered
 */
export interface RoleQueryRendered {
    /**
     *
     * @type {string}
     * @memberof RoleQueryRendered
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof RoleQueryRendered
     */
    code?: string;
}

/**
 *
 * @export
 * @interface RoleUpdateForm
 */
export interface RoleUpdateForm {
    /**
     *
     * @type {string}
     * @memberof RoleUpdateForm
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof RoleUpdateForm
     */
    code?: string;
}

/**
 *
 * @export
 * @interface SaTokenInfo
 */
export interface SaTokenInfo {
    /**
     *
     * @type {string}
     * @memberof SaTokenInfo
     */
    tokenName?: string;
    /**
     *
     * @type {string}
     * @memberof SaTokenInfo
     */
    tokenValue?: string;
    /**
     *
     * @type {boolean}
     * @memberof SaTokenInfo
     */
    isLogin?: boolean;
    /**
     *
     * @type {object}
     * @memberof SaTokenInfo
     */
    loginId?: object;
    /**
     *
     * @type {string}
     * @memberof SaTokenInfo
     */
    loginType?: string;
    /**
     *
     * @type {number}
     * @memberof SaTokenInfo
     */
    tokenTimeout?: number;
    /**
     *
     * @type {number}
     * @memberof SaTokenInfo
     */
    sessionTimeout?: number;
    /**
     *
     * @type {number}
     * @memberof SaTokenInfo
     */
    tokenSessionTimeout?: number;
    /**
     *
     * @type {number}
     * @memberof SaTokenInfo
     */
    tokenActivityTimeout?: number;
    /**
     *
     * @type {string}
     * @memberof SaTokenInfo
     */
    loginDevice?: string;
    /**
     *
     * @type {string}
     * @memberof SaTokenInfo
     */
    tag?: string;
}

/**
 *
 * @export
 * @interface User
 */
export interface User {
    /**
     *
     * @type {string}
     * @memberof User
     */
    username?: string;
    /**
     *
     * @type {string}
     * @memberof User
     */
    password?: string;
    /**
     *
     * @type {string}
     * @memberof User
     */
    nickname?: string;
    /**
     *
     * @type {string}
     * @memberof User
     */
    avatar?: string;
    /**
     *
     * @type {string}
     * @memberof User
     */
    description?: string;
    /**
     *
     * @type {Array<Role>}
     * @memberof User
     */
    roles?: Array<Role>;
    /**
     *
     * @type {string}
     * @memberof User
     */
    id?: string;
}

/**
 *
 * @export
 * @interface UserCreateForm
 */
export interface UserCreateForm {
    /**
     *
     * @type {string}
     * @memberof UserCreateForm
     */
    username?: string;
    /**
     *
     * @type {string}
     * @memberof UserCreateForm
     */
    nickname?: string;
    /**
     *
     * @type {string}
     * @memberof UserCreateForm
     */
    password?: string;
    /**
     *
     * @type {string}
     * @memberof UserCreateForm
     */
    avatar?: string;
    /**
     *
     * @type {string}
     * @memberof UserCreateForm
     */
    description?: string;
}

/**
 *
 * @export
 * @interface UserQueryRendered
 */
export interface UserQueryRendered {
    /**
     *
     * @type {string}
     * @memberof UserQueryRendered
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof UserQueryRendered
     */
    username?: string;
    /**
     *
     * @type {string}
     * @memberof UserQueryRendered
     */
    nickname?: string;
    /**
     *
     * @type {string}
     * @memberof UserQueryRendered
     */
    avatar?: string;
    /**
     *
     * @type {string}
     * @memberof UserQueryRendered
     */
    description?: string;
}

/**
 *
 * @export
 * @interface UserReplaceForm
 */
export interface UserReplaceForm {
    /**
     *
     * @type {string}
     * @memberof UserReplaceForm
     */
    username?: string;
    /**
     *
     * @type {string}
     * @memberof UserReplaceForm
     */
    nickname?: string;
    /**
     *
     * @type {string}
     * @memberof UserReplaceForm
     */
    password?: string;
    /**
     *
     * @type {string}
     * @memberof UserReplaceForm
     */
    avatar?: string;
    /**
     *
     * @type {string}
     * @memberof UserReplaceForm
     */
    description?: string;
}

/**
 *
 * @export
 * @interface UserUpdateForm
 */
export interface UserUpdateForm {
    /**
     *
     * @type {string}
     * @memberof UserUpdateForm
     */
    username?: string;
    /**
     *
     * @type {string}
     * @memberof UserUpdateForm
     */
    nickname?: string;
    /**
     *
     * @type {string}
     * @memberof UserUpdateForm
     */
    password?: string;
    /**
     *
     * @type {string}
     * @memberof UserUpdateForm
     */
    avatar?: string;
    /**
     *
     * @type {string}
     * @memberof UserUpdateForm
     */
    description?: string;
}