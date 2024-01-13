import { useState } from "react";
import memory from "../assets/images/icon-memory.svg";
import reaction from "../assets/images/icon-reaction.svg";
import verbal from "../assets/images/icon-verbal.svg";
import visual from "../assets/images/icon-visual.svg";
import dataList from "../data.js";
function HomePage() {
  const [data] = useState([...dataList]);

  function getIcon(icon) {
    switch (icon) {
      case "memory":
        return memory;
      case "reaction":
        return reaction;
      case "verbal":
        return verbal;
      case "visual":
        return visual;
      default:
        return null;
    }
  }
  function RenderColor(category) {
    if (category === "Reaction") {
      return "bg-[#FFF6F5]";
    } else if (category === "Memory") {
      return "bg-[#FFFBF2]";
    } else if (category === "Verbal") {
      return "bg-[#F2FAFA]";
    } else if (category === "Visual") {
      return "bg-[#F3F3FD]";
    }
  }

  console.log(data);
  return (
    <>
      <div className="group flex flex-col mt-40 w-96 mx-auto lg:w-[768px] lg:mx-auto lg:flex-row bg-white drop-shadow-2xl rounded-2xl lg:drop-shadow-2xl lg:rounded-2xl">
        <div className="rounded-b-3xl lg:w-96 lg:h-[450px] lg:rounded-3xl bg-gradient-to-b from-[#7857ff] to-[#2e2be9] flex flex-col items-center">
          <div className="top text-white font-grotesk mt-6 text-xl lg:text-2xl">
            Your Result
          </div>
          <div className="score flex flex-col w-32 h-32 lg:w-40 lg:h-40 mt-5 lg: justify-center items-center bg-gradient-to-t from-[#2421ca] to-[#4e21ca] rounded-full">
            <div className="upside text-white font-grotesk font-bold text-5xl">
              76
            </div>
            <div className="downside font-grotesk text-gray-400 -mb-5 mt-3">
              of 100
            </div>
          </div>
          <div className="great text-white font-grotesk text-2xl mt-3 lg:mt-8 lg:text-3xl">
            Great
          </div>
          <div className="percent text-white font-grotesk text-center mx-12 mb-5 lg:text-[18px] lg:mt-10 ">
            You scored higher than 65% of the people who have taken these tests.
          </div>
        </div>
        <div className="mx-8 mb-8 lg:mb-0 lg:pl-5 lg: lg:w-96 lg:h-[450px] lg:flex lg:flex-col">
          <div className="summary font-grotesk font-bold mt-5 text-[18px] mb-5">
            Summary
          </div>
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className={`bar flex flex-row justify-between ${RenderColor(item.category)} rounded-md w-[320px] h-14 px-5 mb-4 lg:items-center`}
              >
                <div className="flex items-center gap-4">
                  <img src={getIcon(item.icon)} alt={item.category} />
                  <p>{item.category}</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="text-[#303B59] font-bold">{item.score}</p>
                  <p className="text-gray-400 font-bold">/ 100</p>
                </div>
              </div>
            );
          })}

          <button className="bg-[#303B59] hover:bg-gradient-to-b hover:from-[#7857ff] hover:to-[#2e2be9] h-12 w-[320px] text-white font-bold font-grotesk rounded-3xl">
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
export default HomePage;
