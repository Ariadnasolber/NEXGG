import React from "react";

const LolButton = () => {
    return (
        <button className="m-0 text-white text-sm font-thin hover:text-white hover:bg-gray-950 h-15 w-fit cursor-pointer flex items-center justify-center gap-3 px-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24">
                        <path
                            fill="#D39018"
                            d="m1.912 0l1.212 2.474v19.053L1.912 24h14.73l1.337-4.682H8.33V0ZM12 1.516c-.913 0-1.798.112-2.648.312v1.74A9.7 9.7 0 0 1 12 3.2c5.267 0 9.536 4.184 9.536 9.348a9.2 9.2 0 0 1-2.3 6.086l-.273.954l-.602 2.112c2.952-1.993 4.89-5.335 4.89-9.122C23.25 6.468 18.213 1.516 12 1.516m0 2.673c-.924 0-1.814.148-2.648.414v13.713h8.817a8.25 8.25 0 0 0 2.36-5.768c0-4.617-3.818-8.359-8.529-8.359M2.104 7.312A10.86 10.86 0 0 0 .75 12.576c0 1.906.492 3.7 1.355 5.266z"
                        />
                    </svg>
            <p className="text-white/50">League of Legends</p>
        </button>
    );
};

export default LolButton;