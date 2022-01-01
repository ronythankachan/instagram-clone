import { useEffect, useState } from "react";
import faker from "faker";
import Story from "./Story";

function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const sugg = [...Array(20)].map((_, i) => ({
      avatar: faker.image.people(),
      username: faker.helpers.contextualCard().username,
      id: i,
    }));
    console.log(suggestions);
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
