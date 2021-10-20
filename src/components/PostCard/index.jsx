import './styles.css'

export const PostCard = (props) => {
  const post = props.post;

  return (
    <div className="post">
      <img src={post.cover} alt="" />
      <div className="post-content">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
};
