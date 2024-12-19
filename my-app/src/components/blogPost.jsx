const BlogPost = ({ post }) => {
    return (
        <article className="blog-post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </article>
    );
};

export default BlogPost;
