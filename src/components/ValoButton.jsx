import React from "react";

const ValoButton = () => {
    return (
        <button className="m-0 text-white text-sm font-thin focus:outline-none hover:bg-gray-950 h-15 w-fit cursor-pointer ring-1 ring-gray-800 flex items-center justify-center gap-3 px-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                <path fill="#FC455C" d="M23.792 2.152a.25.25 0 0 0-.098.083q-5.077 6.345-10.15 12.69c-.107.093-.025.288.119.265c2.439.003 4.877 0 7.316.001a.66.66 0 0 0 .552-.25l2.324-2.903a.72.72 0 0 0 .144-.49c-.002-3.077 0-6.153-.003-9.23c.016-.11-.1-.206-.204-.167zM.077 2.166c-.077.038-.074.132-.076.205q.002 4.612.001 9.225a.68.68 0 0 0 .158.463l7.64 9.55c.12.152.308.25.505.247c2.455 0 4.91.003 7.365 0c.142.02.222-.174.116-.265C10.661 15.176 5.526 8.766.4 2.35c-.08-.094-.174-.272-.322-.184z" />
            </svg>
            <p className="text-white/50">Valorant</p>
        </button>
    );
};

export default ValoButton;