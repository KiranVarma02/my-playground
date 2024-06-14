import NavbarItem from "@/app/components/Navbar/NavbarItem";
import AddTaskPlusIcon from "@/app/components/Svg/AddTaskPlusIcon";

export default function Page() {
    return (
        <div>
            <header className="font-bold text-2xl px-14 pb-14">
                Today
            </header>

            <div className="flex-col grow px-14">
                <div className="flex space-x-2">
                    <div className="content-center">
                        <svg width="13" height="13"><path fill="currentColor" fill-rule="evenodd" d="M6 6V.5a.5.5 0 0 1 1 0V6h5.5a.5.5 0 1 1 0 1H7v5.5a.5.5 0 1 1-1 0V7H.5a.5.5 0 0 1 0-1H6z"></path></svg>
                    </div>
                    Add task
                </div>
                
            </div>
            
        </div>
    );
}