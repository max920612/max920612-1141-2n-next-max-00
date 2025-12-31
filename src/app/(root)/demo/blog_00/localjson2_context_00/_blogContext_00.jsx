'use client';

import { useState, createContext, useContext } from 'react';

import blogData_00 from '../../_assets/data/blogData.json'
const BlogContext = createContext();

export const BlogContextProvider_00 = ({children}) => {
  const [name, setName] =useState ('max920612') ;
  const [id , setId] = useState(213410300);
  const [blogs_00, setBlogs_00] = useState(blogData_00);
  const [alert, setAlert] = useState({
    show:false,
    msg:'',
    type:'',
  });

const showAlert = (show = false, msg = '', type = '') =>{
  setAlert({show, msg, type});
};

  const removeItem = (id) => {
    showAlert(true, 'blog remove', 'danger')
    setBlogs_00((blogs_00.filter( (blog) => blog.id !==id)));
  };

  const clearAllBlogs = () => {
    showAlert(true, 'Clear all blogs', 'danger')
    setBlogs_00([]);
  }
    const loadAllBlogs = () => {
    showAlert(true, 'load All Blogs', 'success');
    setBlogs_00([]);
    setBlogs_00(blogData_00);
    };

    return (
    <BlogContext.Provider value={{
        blogs_00, 
        name,
        id,
        alert,
        showAlert,
        removeItem,
        clearAllBlogs,
        loadAllBlogs,
        }}>
        {children}
    </BlogContext.Provider>
    )
};

export const useBlogContext_00 =() => {
    return useContext(BlogContext);
};