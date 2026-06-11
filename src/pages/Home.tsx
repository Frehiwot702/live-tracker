// import React from 'react'
import { useState } from 'react';
import MapView from '../components/MapView';
import { useLocation } from '../hooks/useLocation';

const Home = () => {
  const position = useLocation();
  console.log({position})

  const [isSharing, setIsSharing] = useState(false);
//   const [lastUpdated, setLastUpdated] = useState<string>("Never");

  const startSharing = () => {
    setIsSharing(true);
  };

  const stopSharing = () => {
    setIsSharing(false);
  };

  if (!position) return <div>Getting location...</div>;

  return (
    <div className="relative h-screen w-full">
        <MapView position={position} />
        <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="bg-white rounded-t-3xl shadow-xl p-5">
                <h3 className="font-semibold text-lg"> John Doe </h3>

                <p className="text-sm text-gray-500">
                {isSharing
                    ? "🟢 Sharing Location"
                    : "🔴 Not Sharing"}
                </p>

                <p className="text-sm mt-2">
                Last Update: idk
                </p>

                <div className="flex gap-3 mt-4">
                <button
                    onClick={startSharing}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-xl"
                >
                    Share Location
                </button>

                <button
                    onClick={stopSharing}
                    className="flex-1 bg-red-500 text-white py-3 rounded-xl"
                >
                    Stop Sharing
                </button>
                </div>
            </div>
        </div>
    </div> 
  )

}

export default Home