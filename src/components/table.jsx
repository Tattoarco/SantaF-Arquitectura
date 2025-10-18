import React from "react";
import PropTypes from "prop-types";

export default function Table({ columns, data }) {
  return (
    <section className="overflow-x-auto py-6">
      <div className="bg-[#f8f7f3]/90 backdrop-blur-md p-5 rounded-xl border border-amber-200/40 shadow-md">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-amber-100 to-amber-200 text-[#4b3f2f]">
              {columns.map((col, i) => (
                <th
                  key={i}
                  className="px-4 py-2 text-center text-sm font-semibold tracking-wide border-b border-amber-300/40"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={i}
                className={`transition-colors duration-300 ${
                  i % 2 === 0
                    ? "bg-[#ffffff]/80 hover:bg-amber-50/80"
                    : "bg-[#f7f5ef]/80 hover:bg-amber-50/80"
                }`}
              >
                {columns.map((col, j) => (
                  <td
                    key={j}
                    className="px-4 py-2 text-xs md:text-sm text-gray-700 border-b border-amber-100 text-center"
                  >
                    {row[col.toLowerCase().replace(/\s+/g, "_")] || ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
