import React, { useState, useEffect } from "react";

const ComingSoon = () => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [seconds]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🚀 Something Amazing is Coming Soon!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          We're working hard to bring you a fantastic experience. Stay tuned!
        </p>
        <div className="mb-8">
          <p className="text-xl font-semibold text-gray-800">
            Get ready to launch in
          </p>
          <p className="text-4xl font-bold text-blue-500">{seconds}s</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg text-gray-600 mb-4">
            While you wait, why not enjoy a little game?
          </p>
          <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            <button className="text-xl font-bold text-blue-500 hover:text-blue-700">
              🎮 Play Game
            </button>
          </div>
          <p className="text-sm text-gray-400">
            Just kidding! The game is on its way too. 😄
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
