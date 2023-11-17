import { useState } from "react";
import TableItem from "./TableItem";

function Table({ columns, data }) {
    const [query, setQuery] = useState("");

    return (
        <>
            <div className="mt-14 pt-2 max-w-[85%] overflow-x-auto shadow-md sm:rounded-lg">
                <div className="ml-4 mb-2 bg-white dark:bg-gray-900">
                    <div className="relative mt-1">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="table-search"
                            onChange={(e) => setQuery(e.target.value)}
                            className="block py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search for Users"
                        />
                    </div>
                </div>

                <TableItem data={data} columns={columns} query={query} />
            </div>
        </>
    );
}

export default Table;
