import {  usePosts } from "../Contexts/PostContext"

export const Footer = () => {
    const postCtx = usePosts ()
    return (
        <footer>
            Total de posts: {postCtx?.post.length}
        </footer>
    )
}