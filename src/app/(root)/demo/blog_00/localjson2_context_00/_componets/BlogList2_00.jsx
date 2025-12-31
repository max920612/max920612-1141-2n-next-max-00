'use client';

import Wrapper from "../../../_assets/wrapper/Blog2_00";
import Blog2_00 from "./Blog2_00";
import { useBlogContext_00 } from "../_blogContext_00";

const BlogList2_00 = ( ) => {
  const {blogs_00, removeItem} = useBlogContext_00();
    return (
      <Wrapper>
            <div className="blogs-center">
            {blogs_00.map((item) => {
            const { id, title, descrip, category, img } = item;
            return (
            <Blog2_00
            key={id}
            id={id}
            title={title}
            descrip={descrip}
            category={category}
            img={img}
            removeItem={removeItem} />
        );
      })}
    </div>
    </Wrapper>
  );
};

export default BlogList2_00;