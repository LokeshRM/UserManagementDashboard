import { useRef } from "react";

function CreatePage() {
    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        usernameRef.current.value = "";
        passwordRef.current.value = "";
        alert("Created User");
    };

    return (
        <div className="flex justify-center items-center h-full mt-[60px] md:mt-0">
            <form className="min-w-[40%]" onSubmit={handleSubmit}>
                <div className="mb-6 w-full">
                    <label
                        for="username"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        User Name
                    </label>
                    <input
                        type="text"
                        ref={usernameRef}
                        id="username"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-6 w-full">
                    <label
                        for="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Password
                    </label>
                    <input
                        ref={passwordRef}
                        type="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default CreatePage;
