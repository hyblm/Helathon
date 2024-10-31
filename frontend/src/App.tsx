import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import "./App.css";
import { api } from "@/lib/api";

function App() {
  const [totalSpent, setTotalSpent] = useState(0);

  useEffect(() => {
    async function fetchTotal() {
      const response = await api.expenses["total-spent"].$get();
      const data = await response.json();
      setTotalSpent(data.total);
    }
    fetchTotal();
  });

  return (
    <>
      <body className="min-h-full">
        <h1>Blackbird App</h1>
        <div className="flex flex-col gap-y-3">
          <Button onClick={() => setTotalSpent((count) => count + 1)}>
            up
          </Button>
          <Button onClick={() => setTotalSpent((count) => count - 1)}>
            down
          </Button>
          count is {totalSpent}
        </div>
      </body>
    </>
  );
}

export default App;
