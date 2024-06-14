import { InboxIcon } from "lucide-react";
import NavbarItem from "./NavbarItem";
import SearchIcon from "../Svg/SearchIcon";
import TodayIcon from "../Svg/TodayIcon";
import UpcomingIcon from "../Svg/UpcomingIcon";
import FiltersLabelsIcon from "../Svg/FiltersLabelsIcon";

export default function NavbarItems() {
    return (
        <div className="space-y-2">
            <div className="flex">
                <NavbarItem Icon={SearchIcon} content="Search" link="/today" />
            </div>
            <div>
                <NavbarItem Icon={InboxIcon} content="Inbox" link="/today" />
            </div>
            <div>
                <NavbarItem Icon={TodayIcon} content="Today" link="/todo/today" />
            </div>
            <div>
                <NavbarItem Icon={UpcomingIcon} content="Upcoming" link="/today" />
            </div>
            <div>    
                <NavbarItem Icon={FiltersLabelsIcon} content="Filters & Labels" link="/today" />
            </div>
        </div>
    );
}