import { useMemo } from "react";
import "./App.css";
import { cn } from "@/lib/utils";

function App() {
  const endDate = new Date(new Date().getFullYear(), 7, 7); // Sept = 8 (0-based)
  const dateArray: Date[] = [];
  const startDate = new Date(new Date().getFullYear(), 5, 9);

  const diff: number =
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24);
  for (let i = diff; i >= 0; i--) {
    const date = new Date(endDate);
    date.setDate(endDate.getDate() - i);
    dateArray.push(date);
  }

  const comp = useMemo(() => {
    console.table(dateArray);
    return dateArray.map((e) => new Date() > e);
  }, [dateArray]);
  const count = useMemo(
    () => ((comp.filter(Boolean).length / comp.length) * 100).toFixed(1),
    [comp]
  );

  return (
    <div className="h-screen w-screen bg-orange-100 flex flex-col items-center py-24 space-y-4">
      <div className="grid grid-cols-6 h-3/4 lg:h-full w-full lg:w-2/3 xl:w-1/2 gap-1 px-12 lg:px-24">
        {comp?.map((e, i) => (
          <div className="flex justify-center items-center">
            <span
              key={i}
              className={cn(
                e && "bg-stone-800",
                "border-1 size-4 lg:size-8 rounded-full"
              )}
            />
          </div>
        ))}
      </div>
      <div className="oswald italic lg:text-3xl">{count}%</div>
    </div>
  );
}

export default App;
