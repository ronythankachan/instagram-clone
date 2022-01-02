import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "rony thankachan",
    userImg: "https://avatars.githubusercontent.com/u/19921533?v=4",
    img: "https://avatars.githubusercontent.com/u/19921533?v=4",
    caption: "This is really cool",
  },
  {
    id: "324",
    username: "david beckham",
    userImg:
      "https://media.gq.com/photos/56e853e7161e63486d04d6c8/4:3/w_1600,h_1200,c_limit/david-beckham-gq-0416-2.jpg",
    img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spl5156739-019-1584393251.jpg",
    caption: "Travelling this week",
  },
];
function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
