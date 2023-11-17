import { useState } from "react";
import TableFooter from "./TableFooter";
import Helper from "./helper";
import Modal from "./Modal";

function TableItem({ query, data, columns, col }) {
    const [page, setPage] = useState(1);
    const [userData, setUserData] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const { slice, range } = Helper(
        data.filter((e) => e[col].toLowerCase().includes(query)),
        query,
        page,
        6
    );
    return (
        <>
            <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {columns.map((col) => {
                            return (
                                <th scope="col" className="px-6 py-3">
                                    {col}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {slice.map((dat) => {
                        return (
                            <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                onClick={() => {
                                    setUserData(dat);
                                    setShowModal(true);
                                }}
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {dat.Username}
                                </th>
                                <td className="px-6 py-4">{dat.Email}</td>
                                <td className="px-6 py-4">{dat.Phone}</td>
                                <td className="px-6 py-4">{dat.ID}</td>
                                <td className="px-6 py-4">
                                    {dat.CreationDate}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <TableFooter
                range={range}
                slice={slice}
                setPage={setPage}
                page={page}
            />

            {userData && (
                <Modal
                    show={showModal}
                    setter={setShowModal}
                    data={userData}
                    setUser={setUserData}
                />
            )}
        </>
    );
}

export default TableItem;
