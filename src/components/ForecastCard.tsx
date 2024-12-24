import { Sun } from "lucide-react";

export default function ForecastCard({ day }: { day: number }) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center">
      <p className="font-semibold mb-2">{days[day]}</p>
      <Sun className="w-12 h-12 mx-auto text-yellow-400 mb-2" />
      <p className="text-xl font-bold mb-1">72°F</p>
      <p className="text-sm text-gray-500">Sunny</p>
    </div>
  );
}
