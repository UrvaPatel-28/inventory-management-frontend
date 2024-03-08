import { twMerge } from "tailwind-merge";
import { JSONObject } from "../lib/types/json-value.type";

const DataTable = ({ data }: { data: JSONObject[] }) => {
  if (data.length === 0) {
    return <div className="w-full text-center">Empty</div>;
  }
  const keys = Object.keys(data[0]);
  return (
    <table className="w-full table-auto h-full text-lg">
      <thead>
        <tr className="divide-x-4 divide-outline">
          {keys.map((key) =>
            key.endsWith("id") ? null : (
              <th className="px-6 py-4 text-center text-on-primary-container/70 bg-primary-container/70 border-outline border-b-4 uppercase">
                {key}
              </th>
            )
          )}
        </tr>
      </thead>
      <tbody className="divide-y-4 divide-outline">
        {data.map((entry) => (
          <tr className="divide-x-4 divide-outline">
            {Object.entries(entry).map(([key, property]) =>
              key.endsWith("id") ? null : (
                <td className="p-3">
                  {typeof property != "object" ? (
                    property.toString()
                  ) : Array.isArray(property) ? (
                    <DataTable data={property} />
                  ) : (
                    <VerticalTable data={property} />
                  )}
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const VerticalTable = ({ data }: { data: JSONObject }) => {
  return (
    <div className="overflow-hidden h-full rounded-3xl border border-outline">
      <table className="w-full table-auto h-full">
        <tbody className="divide-y divide-outline">
          {Object.entries(data).map(([key, value]) =>
            key.endsWith("id") ? null : (
              <tr className="divide-x divide-outline">
                <td className="text-center text-on-primary-container bg-primary-container py-1 px-3">
                  {key}
                </td>
                <td>
                  <span
                    className={twMerge(
                      "py-1 px-3",
                      key.endsWith("id") && "line-clamp-1 py-0"
                    )}
                  >
                    {typeof value != "object" ? (
                      value.toString()
                    ) : Array.isArray(value) ? (
                      <DataTable data={value} />
                    ) : (
                      <VerticalTable data={value} />
                    )}
                  </span>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
