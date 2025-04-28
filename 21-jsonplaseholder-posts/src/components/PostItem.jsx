export default function PostItem(props) {
  const {id, userId, body, title} = props;
  return (
      <div className="postItem">
        <h2>Post {id}</h2>
        <div>
          <h4>{title}</h4>
          <div>
            <h5>User ID: {userId}</h5>
            <p>{body}</p>
          </div>
        </div>
      </div>
  );
}