import Table from "@/components/Table";
import { useEffect, useState } from "react";

const columns = ["Username", "Email", "Phone", "ID", "CreationDate"];

export default function Home() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((info) => setData(info));
    }, []);

    return (
        <div className="flex flex-col items-center h-full mt-[60px] md:mt-0 w-full">
            {data && <Table columns={columns} data={data} />}
        </div>
    );
}
