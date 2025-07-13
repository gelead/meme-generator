import { useState } from "react";

const MyMainContent = () => {
  const [top, setTop] = useState("Edit Top Caption");
  const [bottom, setBottom] = useState("Edit Bottom Caption");
  const [memeImage, setMemeImage] = useState(
    "https://i.imgflip.com/a0568u.jpg"
  );

  const handleTop = (e) => setTop(e.target.value);
  const handleBottom = (e) => setBottom(e.target.value);

  const getMemeImage = async () => {
    const res = await fetch("https://api.imgflip.com/get_memes");
    const data = await res.json();
    const memes = data.data.memes;
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    setMemeImage(randomMeme.url);
  };

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-purple-700">
        Meme Generator 🎉
      </h1>

      {/* Inputs */}
      <div className="flex flex-col sm:flex-row gap-6 mb-6">
        <div className="flex flex-col flex-1">
          <label htmlFor="top" className="mb-2 font-semibold text-gray-700">
            Top Text
          </label>
          <input
            id="top"
            onChange={handleTop}
            value={top}
            type="text"
            placeholder="Enter top caption"
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
          />
        </div>
        <div className="flex flex-col flex-1">
          <label htmlFor="bottom" className="mb-2 font-semibold text-gray-700">
            Bottom Text
          </label>
          <input
            id="bottom"
            onChange={handleBottom}
            value={bottom}
            type="text"
            placeholder="Enter bottom caption"
            className="border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
          />
        </div>
      </div>

      {/* Button */}
      <button
        onClick={getMemeImage}
        className="w-full bg-purple-700 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-purple-800 transition mb-8"
      >
        Generate New Template
      </button>

      {/* Meme Display */}
      <div className="relative bg-gray-100 rounded-lg shadow-md max-w-full mx-auto p-4">
        <img
          src={memeImage}
          alt="meme generator"
          className="w-full max-h-[400px] object-contain rounded-md"
        />
        {/* Captions */}
        <h1
          className="absolute top-4 left-1/2 transform -translate-x-1/2 px-2 text-4xl font-extrabold text-white drop-shadow-lg select-none pointer-events-none"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
        >
          {top}
        </h1>
        <h1
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-2 text-4xl font-extrabold text-white drop-shadow-lg select-none pointer-events-none"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
        >
          {bottom}
        </h1>
      </div>
    </main>
  );
};

export default MyMainContent;
