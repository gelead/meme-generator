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
    <main className="w-4/5 m-auto">
      <div className="flex m-auto border mt-3">
        <div className="border px-2 py-2 flex-grow">
          <label htmlFor="top" className="font-bold">
            Top Text
          </label>
          <input
            id="top"
            onChange={handleTop}
            value={top}
            className="border mt-1 rounded-sm w-full py-1 px-2"
            type="text"
          />
        </div>
        <div className="border px-2 py-2 flex-grow">
          <label htmlFor="bottom" className="font-bold">
            Bottom Text
          </label>
          <input
            id="bottom"
            onChange={handleBottom}
            value={bottom}
            className="border mt-1 rounded-sm w-full py-1 px-2"
            type="text"
          />
        </div>
      </div>

      <button
        onClick={getMemeImage}
        className="bg-purple-700 cursor-pointer w-full text-xl rounded-xl py-3 text-white my-4 px-4"
      >
        Generate new template
      </button>

      <div className="border relative">
        <img
          className="w-4/5 h-70 m-auto"
          src={memeImage}
          alt="meme generator image"
        />

        <h1 className="text-4xl shadow-blue-950 decoration-pink-400 font-bold absolute top-3 left-44">
          {top}
        </h1>
        <h1 className="text-4xl font-bold absolute top-[13rem] left-44">
          {bottom}
        </h1>
      </div>
    </main>
  );
};

export default MyMainContent;
