import Chart from "./Chart";
import { useLoaderData } from "react-router";

const PagesToRead = () => {
  const books = useLoaderData();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Books Page Chart</h1>

      <Chart book={books}></Chart>
    </div>
  );
};

export default PagesToRead;