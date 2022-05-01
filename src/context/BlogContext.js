import { getDatabase, ref, set, push, onValue, remove, update } from "firebase/database";
import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import {toastSuccessNotify} from "../helpers/toastNotify";

export const BlogContext = createContext()

const d = new Date();
const time = d.toLocaleDateString();


const BlogContextProvider = ({ children }) => {
    const { currentUser } = useContext(AuthContext);

   
    const AddNewBlog = (info) => {
        const database = getDatabase();
        const blogRef = ref(database, "milestone");
        const newBlogRef = push(blogRef)
        set((newBlogRef), {
            title: info.title,
            imageURL: info.imageURL,
            content: info.content,
            author: currentUser.email,
            date: time
        })
        toastSuccessNotify("Blog added")
    }

    
    const BlogFetch = () => {
        const [isLoading, setIsLoading] = useState();
        const [blogList, setBlogList] = useState();

        useEffect(() => {
            setIsLoading(true)
            const database = getDatabase();
            const blogRef = ref(database, "milestone");

            onValue(blogRef, (snapshot) => {
                const data = snapshot.val();
                const baglantiArray = []

                for (let id in data) {
                    baglantiArray.push({ id, ...data[id] })
                }
                setBlogList(baglantiArray)
                setIsLoading(false)
            })
        }, [])
        return { isLoading, blogList }

    }


    
    const DeleteBlog = (id) => {
        const database = getDatabase();


        remove(ref(database, "milestone/" + id))
        toastSuccessNotify("Blog Deleted")
    }


    
    const UpdateBlog = (info) => {
        const database = getDatabase();
        const updates = {};
        toastSuccessNotify("Blog Updated")

        updates["milestone/" + info.id] = info;
        return update(ref(database), updates)
    }



    return (
        <BlogContext.Provider value={{ BlogFetch, AddNewBlog, DeleteBlog, UpdateBlog }}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider;