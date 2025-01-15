import { useState } from "react";
import Header from "./components/Header/Header";

function App() {
  const [selectImg, setselectImg] = useState("/strawb.png");
  const [Img, setImg] = useState("/straw.png");
  const [bgcolor, setBgcolor] = useState("bg-red-600");
  const [title, setTitle] = useState("NEW Strawberry");
  const [description, setDescription] = useState(
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias remid harum. Distinctio porro accusantium culpa. Ipsum, quis ut, modi incidunt exercitationem natus reprehenderit, ipsa laborum v similique hic culpa?"
  );
  const [isVisible, setIsVisible] = useState(true);

  const handleImageClick = (img, bg, title, color) => {
    setIsVisible(false);

    setTimeout(() => {
      setselectImg(bg);
      setImg(img);
      setBgcolor(color);
      setTitle(title);
      setIsVisible(true);
    }, 100);
  };

  return (
    <div className={`w-full h-screen overflow-hidden ${bgcolor} relative`}>
      <Header />
      <div className="w-96 h-96  absolute">
        <img
          src={selectImg}
          alt=""
          className="opacity-50 w-full h-full object-contain"
        />
      </div>

      <div className="w-10/12 mx-auto my-10 flex flex-col gap-36">
        <div className="w-3/6 ">
          <h1 className="text-2xl text-white font-bold">{title}</h1>
          <p className="text-justify text-white   text-sm mt-5">
            {description}
          </p>
        </div>

        <div className="flex gap-4 items-center z-10">
          <Image
            src="/straw.png"
            onClick={() =>
              handleImageClick(
                "/straw.png",
                "/strawb.png",
                "NEW Strawberry",
                "bg-red-600"
              )
            }
          />
          <Image
            onClick={() =>
              handleImageClick(
                "/orange.png",
                "/orangeb.png",
                "NEW Orange",
                "bg-yellow-600"
              )
            }
            src="/orange.png"
          />
          <Image
            onClick={() =>
              handleImageClick(
                "/blue.png",
                "/blue.png",
                "NEW Blue",
                "bg-blue-600"
              )
            }
            src="/blue.png"
          />
        </div>
      </div>
      <div
        className={`md:w-60 md:h-60 w-44 h-44 bottom-12 md:bottom-20 right-12 z-10 absolute -rotate-45 transition-transform duration-500 transform ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <img src={Img} alt="" className=" w-full h-full  object-contain  " />
      </div>
      <div
        className={`md:w-96 md:h-96 w-80 h-80 bg-black opacity-30   absolute rounded-full -bottom-24 -right-32 `}
      ></div>
    </div>
  );
}

function Image({ src, onClick }) {
  return (
    <div
      onClick={onClick}
      className="md:w-30 md:h-30 w-20 h-20 cursor-pointer transition-transform duration-300 hover:scale-110"
    >
      <img src={src} alt="" className="w-full h-full object-contain " />
    </div>
  );
}

export default App;
