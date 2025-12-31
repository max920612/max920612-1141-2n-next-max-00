'use client';

import { useState } from "react";

import Wrapper from '../../_assets/wrapper/Blog2_00';
import Alert_00 from "../../_componets/Alert_00";
import { BlogContextProvider_00, useBlogContext_00 } from './_blogContext_00';
import BlogList2_00 from "./_componets/BlogList2_00";

// --- 1. 定義內容元件 (負責處理資料與 UI) ---
const BlogListContent = () => {
    // 這裡在 Provider 內部，所以可以正常抓到 Context 的值
    const { 
      name, 
      id, 
      alert, 
      showAlert, 
      clearAllBlogs, 
      loadAllBlogs 
    } = useBlogContext_00();

    return (
        <Wrapper>
            {alert.show && <Alert_00 alert={alert} showAlert={showAlert} />}
            <section className="blogs">
                <div className="section-title">
                    <h2>blog context from local json 2 -- {name} , {id} {' '}</h2>
                </div>
                <BlogList2_00/>
                <div className="flex justify-center items-center gap-8 mt-8">
                    <button type="button" className="text-red-700 bg-red-200 hover:bg-red-300 capitalize px-4 py-2 text-base rounded"
                        onClick={clearAllBlogs}>clear all blogs</button>
                    <button type="button" className="text-blue-700 bg-blue-200 hover:bg-blue-300 capitalize px-4 py-2 text-base rounded"
                        onClick={loadAllBlogs}>load all blogs</button>
                </div>
            </section>
        </Wrapper>
    );
};

const BlogLocalJsonPage2_00 = () => {
    return (
        <BlogContextProvider_00>
            <BlogListContent />
        </BlogContextProvider_00>
    );
};

export default BlogLocalJsonPage2_00;