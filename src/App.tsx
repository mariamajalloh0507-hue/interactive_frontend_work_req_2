import React, { useEffect, useState } from "react";

interface FunFact {
  text: string;
}

function App() {
  const [facts, setFacts] = useState<FunFact[]>([]);
  const [currentFact, setCurrentFact] = useState<string>("");

  // Load fun facts from local JSON on mount
  useEffect(() => {
    fetch("/funfacts.json")
      .then((res) => res.json())
      .then((data) => {
        setFacts(data.funFacts);
        if (data.funFacts.length > 0) {
          setCurrentFact(data.funFacts[0].text);
        }
      })
      .catch((err) => console.error("Error loading fun facts:", err));
  }, []);

  // Change fact every 2 seconds
  useEffect(() => {
    if (facts.length === 0) return;

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * facts.length);
      setCurrentFact(facts[randomIndex].text);
    }, 2000);

    return () => clearInterval(interval); // cleanup
  }, [facts]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        Random Fun Fact Viewer
      </h1>
      <div className="bg-white shadow-lg rounded-2xl p-6 text-center w-96 transition-all duration-500">
        <p className="text-lg">{currentFact}</p>
      </div>
    </div>
  );
}

export default App;