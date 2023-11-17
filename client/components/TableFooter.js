import React, { useEffect } from "react";

const TableFooter = ({ range, setPage, page, slice }) => {
    useEffect(() => {
        if (slice.length < 1 && page !== 1) {
            setPage(page - 1);
        }
    }, [slice, page, setPage]);
    return (
        <div className="bg-[#fafafa] w-full font-medium text-left text-base text-[#2c3e50] flex items-center justify-center px-0 py-2">
            {range.map((el, index) => (
                <button
                    key={index}
                    className={`cursor-pointer mx-1 px-3.5 py-[5px] rounded-[10px] border-[none] ${
                        page === el
                            ? "text-[white] bg-[#185adb]"
                            : "text-[#2c3e50] bg-[#f9f9f9]"
                    }`}
                    onClick={() => setPage(el)}
                >
                    {el}
                </button>
            ))}
        </div>
    );
};

export default TableFooter;
