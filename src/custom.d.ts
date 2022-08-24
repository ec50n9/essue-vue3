interface MixtureListItem {
    type: string| {text:string, class: string},
    title: string,
    preview: string,
    date: string,
    tags: (string | { text: string, class: string })[],
    voteCount: number,
    commentCount: number
}