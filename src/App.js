import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-black text-4xl mb-4">{number}</div>
      <div
        className="bg-red-500 w-fit px-5 text-2xl rounded-2xl hover:cursor-pointer select-none"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Botão
      </div>
    </div>
  );
}

export default App;
