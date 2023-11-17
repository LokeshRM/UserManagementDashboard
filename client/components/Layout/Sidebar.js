import Link from "next/link";
import { useRouter } from "next/router";

function Sidebar({ show, setter }) {
    const router = useRouter();

    const className =
        "bg-black w-[280px] min-h-full transition-[margin-left] ease-in-out duration-500 fixed top-0 left-0  md:static z-30 text-center";

    const appendClass = show ? "ml-0" : "ml-[-280px] md:ml-0";
    const MenuItem = ({ name, route }) => {
        const color =
            router.pathname === route
                ? "text-white"
                : "text-white/50 hover:text-white";
        return (
            <Link
                href={route}
                onClick={() => setter((show) => !show)}
                className={`flex gap-1 my-auto text-md py-3 border-b-[1px] border-b-white/20 ${color}`}
            >
                <h3 className="mx-auto">{name}</h3>
            </Link>
        );
    };

    const Overlay = () => {
        return (
            <div
                className="md:hidden fixed top-0 left-0 bottom-0 right-0 bg-black/30 z-20"
                onClick={() => setter((show) => !show)}
            />
        );
    };
    return (
        <>
            <div className={`${className} ${appendClass}`}>
                <h1 className="text-white/90 font-medium text-xl my-16 border-b-[1px] border-b-white/20 pb-6 invisible md:visible">
                    User Management <br /> DashBoard
                </h1>
                <MenuItem name="User Details" route="/" />
                <MenuItem name="Account Creation" route="/create" />
            </div>
            {show ? <Overlay setter={setter} /> : <></>}
        </>
    );
}

export default Sidebar;
