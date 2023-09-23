import { usePosts } from "../Contexts/PostContext";

export const  PostList = () => {
    const postCtx = usePosts();

    const hundleRemoveButton = (id: number) => {
        postCtx?.removePost(id);
    }
    return (
        <div>
            {postCtx?.post.map(item => 
                <div key={item.id} className="p-3 border-b bordergray-500">
                    <div className="text-xl font-bold mb-2">{item.title}</div>
                    <div className="text-sm">{item.body}</div>
                    <button onClick={ () => hundleRemoveButton(item.id)}>[ remover ]</button>
                </div>
            )}
        </div>
    );
}