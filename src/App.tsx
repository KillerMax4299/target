import { useMemo } from "react";
import "./App.css";
import { cn } from "@/lib/utils";


function App() {

  const endDate = new Date(new Date().getFullYear(), 8, 5); // Sept = 8 (0-based)
  const dateArray:Date[] = [];

  for (let i = 87; i >= 0; i--) {
    const date = new Date(endDate);
    date.setDate(endDate.getDate() - i);
    dateArray.push(date);
  }

  const comp = useMemo(() => { 
    return dateArray.map(e=> new Date()>e)
   }, [dateArray])
  console.log(dateArray);
  return (
    <div className="h-screen w-screen bg-orange-100 flex justify-center py-24">
      <div className="grid grid-cols-8 h-3/4 lg:h-full w-full lg:w-2/3 xl:w-1/2 gap-1 px-12 lg:px-24">
        {comp?.map((e, i) => (
          <div className="flex justify-center items-center">
            <span key={i} className={cn(e && "bg-stone-800","border-1 size-4 lg:size-8 rounded-full")} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
