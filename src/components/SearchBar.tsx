import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar({
  searchValue,
}: {
  searchValue: (value: string) => void;
}) {
  const [input, setInput] = useState("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    searchValue(input);
    setInput("");
  };

  return (
    <div className="relative mb-6">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          placeholder="Search for a city..."
          className="w-full p-3 text-lg font-semibold pl-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </form>
    </div>
  );
}
