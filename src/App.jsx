import React, { useCallback, useEffect, useRef, useState } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeChars, setIncludeChars] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(password);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEEFGHIJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

    if (includeNumbers) str += "0123456789";
    if (includeChars) str += "`~!@#$%^&*-_+=[]{}";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, includeChars, includeNumbers, setPassword]);

  // Copied to clipboard functionaliy
  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, includeChars, includeNumbers, passwordGenerator]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-850 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md backdrop-blur-md bg-gray-800/30 rounded-2xl p-8 shadow-2xl border border-gray-700/50">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
            SecurePass
          </h1>
          <p className="mt-2 text-gray-400">
            Generate strong passwords instantly
          </p>
        </div>

        {/* Password Input + Copy Button */}
        <div className="flex gap-3 mb-8">
          <input
            ref={passwordRef}
            type="text"
            value={password}
            placeholder="Your secure password"
            readOnly
            className="w-full px-5 py-4 rounded-lg border border-gray-600 bg-gray-700/50 text-orange-400 placeholder-orange-300/60 focus:outline-none focus:ring-2 focus:ring-orange-400/50 focus:border-transparent text-xl font-mono"
          />
          <button
            onClick={copyPasswordToClipBoard}
            className="px-6 cursor-pointer py-4 bg-gradient-to-br from-orange-400/90 to-orange-600 hover:from-orange-400 hover:to-orange-500 rounded-lg text-gray-900 font-semibold transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-orange-400/20"
          >
            Copy
          </button>
        </div>

        {/* Custom Range Slider */}
        <div className="mb-8">
          <div className="flex justify-between text-gray-300 mb-3">
            <span>Password Length</span>
            <span className="text-orange-400 font-bold">{length}</span>
          </div>
          <input
            type="range"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            min="6"
            max="32"
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb"
          />
        </div>

        {/* Checkboxes */}
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              defaultChecked={includeNumbers}
              onChange={() => {
                setIncludeNumbers((prev) => !prev);
              }}
              type="checkbox"
              className="w-5 h-5 rounded-md bg-gray-700 border border-gray-600 checked:bg-orange-400 checked:border-orange-400 focus:ring-0 focus:ring-offset-0 accent-orange-400"
            />
            <span className="text-gray-300 group-hover:text-orange-300 transition-colors">
              Include Numbers (0-9)
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              defaultChecked={includeChars}
              onChange={() => {
                setIncludeChars((prev) => !prev);
              }}
              type="checkbox"
              className="w-5 h-5 rounded-md bg-gray-700 border border-gray-600 checked:bg-orange-400 checked:border-orange-400 focus:ring-0 focus:ring-offset-0 accent-orange-400"
            />
            <span className="text-gray-300 group-hover:text-orange-300 transition-colors">
              Include Special Characters (!@#$%^&*)
            </span>
          </label>
        </div>

        {/* Generate Button */}
        <button
          onClick={passwordGenerator}
          className="w-full cursor-pointer mt-8 py-4 bg-gradient-to-r from-orange-400 to-amber-500 hover:from-orange-300 hover:to-amber-400 rounded-xl text-gray-900 font-bold text-lg transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-xl hover:shadow-orange-400/20"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default App;
