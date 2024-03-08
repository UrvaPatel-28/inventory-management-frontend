import { useEffect, useState } from "react";
import DataTable from "./DataTable";

const DataTableUrl = ({ url, update }: { url: string; update: number }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url, { credentials: "include" })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setData(res.data);
        } else {
          throw new Error("Request For Data Fetching Failed");
        }
      });
  }, [url, update]);

  return data && <DataTable data={data} />;
};

export default DataTableUrl;
