import React, { useState, useEffect } from "react";
import User from "../Assets/User.svg";
import Response from "./Response.js";
import Input from "./Input";
import darkmode from "../Assets/darkmode.svg";
import Switch from "react-switch";
import { AiOutlineRightCircle } from "react-icons/ai";

function Threads() {
  const [checked, setchecked] = useState(false);
  const [input, setinput] = useState("");
  const [msg, setmsg] = useState(input);
  const [typing, settyping] = useState(false);

  const responses = [
    {
      input: "Hello bot",
      res: "Hi User",
    },
    {
      input: "Hey what are the prime laws of the country",
      res: "Hi User2",
    },
  ];

  const handleClick = () => {
    if (checked) {
      setchecked(false);
    } else {
      setchecked(true);
    }
  };
  console.log(msg);
  useEffect(() => {}, [msg]);
  return (
    <div className="flex flex-col justify-between h-[98vh]">
      <div className="bg-[#222222] flex mx-2 p-1 mt-4 px-2 rounded-2xl text-white justify-between">
        <div className="flex p-2">
          <img src={User} className="w-10 mx-2" alt="User" />
          <div>
            <p>Vakil Bot</p>
            <p className="text-xs">@legal.ly</p>
          </div>
        </div>
        <div className="flex justify-end p-4">
          <img src={darkmode} className="px-4" />
          <Switch
            onChange={handleClick}
            checked={checked}
            onColor={"#FFE600"}
            handleDiameter={30}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
          />
        </div>
      </div>
      {/* Message Area */}
      <div className="overflow-y-scroll h-[75vh]">
        {responses.map((res) => (
          <div className="py-2 px-16">
            <Response msg={res.res} />
            <Input msg={res.input} />
          </div>
        ))}
      </div>

      <div className="mx-2 bg-[#222222] flex justify-between w-[80vw] px-4 py-2 rounded-lg">
        <input
          value={input}
          type="text"
          placeholder="Type your query..."
          className="px-4 w-[60vw] h-[7vh] bg-[#222222] rounded-lg  text-white focus:outline-none focus:border-none"
          onChange={(e) => {
            setinput(e.target.value);
            if (input.length() > 0) {
              settyping(true);
            }
          }}
        />
        <button>
          <AiOutlineRightCircle
            className="text-white w-12 h-8 justify-center cursor-pointer mt-2"
            onClick={() => {
              setmsg(input);
              setinput("");
            }}
          />
        </button>
      </div>
    </div>
  );
}

export default Threads;
