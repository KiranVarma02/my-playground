import NavbarItem from "@/app/components/Navbar/NavbarItem";
import AddTaskPlusIcon from "@/app/components/Svg/AddTaskPlusIcon";

export default function Page() {
    return (
        <div className="h-screen">
            <header className="font-bold text-2xl px-14 pb-14">
                Today
            </header>

            <div className="px-14">
                <button className="flex items-center space-x-2 hover:bg-red-200 rounded p-2">
                    <div className="">
                        <svg width="13" height="13"><path fill="currentColor" fillRule="evenodd" d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"></path></svg>
                    </div>
                    <div>
                        Add task
                    </div>
                </button>
            </div>
        </div>
    );
}