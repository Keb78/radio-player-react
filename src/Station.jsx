import React, { useEffect, useState } from "react";
import axios from "axios";

function Station() {
  const [radio, setRadio] = useState([]);
  const url = "https://api.sr.se/api/v2/channels?format=json&size=100";

  useEffect(() => {
    axios.get(url).then((data) => {
      console.log(data); // Check structure of response
      setRadio(data.data.channels); // If data.data.channels is an array
    });
  }, []);

  // Conditional rendering for loading state
  if (radio.length === 0) {
    return (
      <div className="text-center text-gray-600 font-semibold text-xl">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {radio.map((channel, i) => (
        <div
  key={i}
  className="border-4 border-black flex items-center rounded-3xl overflow-hidden shadow-xl hover:shadow-4x2 transition-shadow duration-100"
  style={{
    backgroundColor: channel.color
      ? `rgba(${parseInt(channel.color.slice(0, 2), 16)}, ${parseInt(channel.color.slice(2, 4), 16)}, ${parseInt(channel.color.slice(4, 6), 16)}, 0.5)` // RGBA with 50% opacity
      : "rgba(0, 0, 0, 0.5)", // Default black background with 50% opacity
  }}
>

          {/* Channel Image */}
          <img
            src={channel.image || "fallback-image.jpg"} // Fallback image if no image
            alt={`${channel.name} logo`}
            className="w-24 h-24 sm:w-32 sm:h-32 object-contain overflow-hidden shadow-md p-2 rounded-3xl"
          />

          {/* Channel Info */}
          <div className="flex flex-col justify-content flex-1 px-2  py-1 text-center sm:text-center">
            <h3 className="text-2xl font-semibold text-white overflow-hidden shadow-md pl-1 rounded-md">{channel.name}</h3>

            {/* Audio Player */}
            <div className="mt-2">
              {channel.liveaudio?.url ? (
                <audio controls className="w-full p-2">
                  <source src={channel.liveaudio.url} type="audio/mp3" />
                </audio>
              ) : (
                <p className="text-sm text-gray-300">No audio available</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Station;
