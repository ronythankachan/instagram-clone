import {
  DotsHorizontalIcon,
  HeartIcon,
  PaperAirplaneIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
function Post({ username, userImg, img, caption }) {
  return (
    <div className="bg-white my-7 border rounded-sm">
      <div className="flex items-center p-5">
        <img
          className="rounded-full h-12 w-12 object-fill border p-1 mr-3 "
          src={userImg}
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <img className="object-cover w-full" src={img} alt="" />
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
          <ChatIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username}</span> {caption}
      </p>
      {/* input box */}
      <form className="flex p-4 items-center">
        <EmojiHappyIcon className="btn" />
        <input type="text"  placeholder="Add a comment.." className="border-none flex-1 focus:ring-0 outline-none" />
        <button>Post</button>
      </form>
    </div>
  );
}

export default Post;
