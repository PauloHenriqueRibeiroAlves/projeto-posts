import { ReactNode, createContext, useContext, useEffect, useReducer } from "react";
import { Post } from "../types/Post";
import { postReducers } from "../Reducers/postReducers";

type PostContextType = {
    post: Post [];
    AddPost: (title: string, body: string) => void;
    removePost: (id: number) => void;
}

const STORAGE_KEY = 'postContextContent';

export const PostContext = createContext<PostContextType | null>(null);

export const PostPovider = ({ children }: { children: ReactNode }) => {
    const [post, dispatch] = useReducer(
        postReducers, 
        JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    );
    const AddPost = (title: string, body: string) => {
        dispatch({ type: 'add', payload: { title, body}})
    }
    const removePost = (id: number) => {
        dispatch ({type: 'remove', payload: {id}})
    }
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(post));
    }, [post]);
    return(
        <PostContext.Provider value={{ post, AddPost, removePost }}>{children}</PostContext.Provider>
    );
}
export const usePosts = () => useContext(PostContext);