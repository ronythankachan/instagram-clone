function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="rounded-full w-16 h-16 border p-[2px]"
        src="https://avatars.githubusercontent.com/u/19921533?v=4"
        alt=""
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">rony thankachan</h2>
        <h3 className="text-sm text-gray-500">Welcome to my instagram</h3>
      </div>
      <button className="text-sm text-blue-500 font-semibold">Sign Out</button>
    </div>
  );
}

export default MiniProfile;
