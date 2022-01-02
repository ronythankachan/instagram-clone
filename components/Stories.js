import { useEffect, useState } from "react";
import Story from "./Story";
const sugg = [
  {
    id: 1,
    avatar:
      "https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg",
    username: "virat kohli",
    company: {
      name: "BCC",
    },
  },
  {
    id: 2,
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/9/98/Tom_Cruise_%2834450932580%29.jpg",
    username: "Tom cruise",
    company: {
      name: "Hollywood",
    },
  },
  {
    id: 3,
    avatar:
      "https://upload.wikimedia.org/wikipedia/commons/0/0c/Angelina_Jolie_by_Gage_Skidmore.jpg",
    username: "Angelina jolie",
    company: {
      name: "Hollywood",
    },
  },
];

function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    setSuggestions(sugg);
  }, []);

  return (
    <div
      className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 
    border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black scrollbar-track-white "
    >
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
