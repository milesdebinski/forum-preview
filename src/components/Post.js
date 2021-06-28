import { FaThumbtack, FaEye, FaComments } from "react-icons/fa";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="flex-group ">
        <div className="left">
          <div className="left-1">
            <h3>
              <FaThumbtack
                className={`pin ${post.isPinned ? "pinned" : " "}`}
              />
              {post.title}
            </h3>
          </div>
          <div className="left-2">
            <p>{post.date}</p>
          </div>
        </div>

        <div className="right">
          <div className="replies-views">
            <div className="replies">
              <FaEye className="icon" />
              200
            </div>
            <div className="views">
              <FaComments className="icon" />
              992
            </div>
          </div>
          <img src="./img/user1.jpg" alt="avatar" />
          <div className="user-time">
            <div className="user">{post.user}</div>
            <div className="time">5 hours ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
