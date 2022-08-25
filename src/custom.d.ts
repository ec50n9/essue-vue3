declare module 'nprogress'

interface MixtureListItem {
    id?: string
    type?: string | { text: string, color: string }
    title: string
    preview?: string
    covers?: string[]
    author?: string
    date: string
    tags?: (string | { text: string, color: string })[]
    voteCount: number
    commentCount: number
}
