export default function Modal({ show, setter, data, setUser }) {
    return (
        <>
            {show ? (
                <>
                    <div className="min-w-[50%] justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-full my-6 mx-auto max-w-[70%]">
                            <div className="border-0 rounded-lg shadow-lg w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Report on {data.Username}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => {
                                            setUser(null);
                                            setter(false);
                                        }}
                                    >
                                        <span className="text-black/60 h-6 w-6 text-2xl">
                                            x
                                        </span>
                                    </button>
                                </div>

                                <div className="flex items-center justify-center p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            setUser(null);
                                            setter(false);
                                        }}
                                    >
                                        Generate Report
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed top-0 right-0 left-0 bottom-0 z-45 bg-black" />
                </>
            ) : null}
        </>
    );
}
