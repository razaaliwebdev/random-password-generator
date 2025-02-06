import { useEffect, useState } from "react";
import PasswordGeneratorSkeleton from "./components/PasswordGeneratorSkeleton";
import PasswordGenerator from "./components/PasswordGenerator";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000); // Simulating loading delay
  }, []);

  return (
    <div>
      {isLoading ? <PasswordGeneratorSkeleton /> : <PasswordGenerator />}
    </div>
  );
};

export default App;
