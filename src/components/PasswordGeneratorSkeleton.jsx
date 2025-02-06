import React from "react";

const PasswordGeneratorSkeleton = () => {
    
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-850 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md backdrop-blur-md bg-gray-800/30 rounded-2xl p-8 shadow-2xl border border-gray-700/50">
        {/* Header Skeleton */}
        <div className="mb-8 text-center">
          <div className="h-10 bg-gray-700 rounded-full w-3/4 mx-auto mb-4 animate-pulse" />
          <div className="h-4 bg-gray-700 rounded w-1/2 mx-auto animate-pulse" />
        </div>

        {/* Password Input + Copy Button Skeleton */}
        <div className="flex gap-3 mb-8">
          <div className="w-full h-14 bg-gray-700/50 rounded-lg animate-pulse" />
          <div className="w-24 h-14 bg-gray-700/50 rounded-lg animate-pulse" />
        </div>

        {/* Range Slider Skeleton */}
        <div className="mb-8">
          <div className="flex justify-between mb-3">
            <div className="h-4 bg-gray-700 rounded w-1/4 animate-pulse" />
            <div className="h-4 bg-gray-700 rounded w-8 animate-pulse" />
          </div>
          <div className="w-full h-2 bg-gray-700 rounded-lg animate-pulse" />
        </div>

        {/* Checkboxes Skeleton */}
        <div className="flex flex-col gap-4">
          {[1, 2].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gray-700 rounded-md animate-pulse" />
              <div className="h-4 bg-gray-700 rounded w-1/3 animate-pulse" />
            </div>
          ))}
        </div>

        {/* Generate Button Skeleton */}
        <div className="w-full mt-8 h-14 bg-gray-700/50 rounded-xl animate-pulse" />
      </div>
    </div>
  );
};

export default PasswordGeneratorSkeleton;
