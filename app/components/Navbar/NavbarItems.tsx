import IconAndText from "../Generic/IconAndText";
import SearchIcon from "../Svg/SearchIcon";
import TodayIcon from "../Svg/TodayIcon";
import UpcomingIcon from "../Svg/UpcomingIcon";
import FiltersLabelsIcon from "../Svg/FiltersLabelsIcon";
import InboxIcon from "../Svg/InboxIcon";

export default function NavbarItems() {
    return (
        <div className="space-y-2">
            <div>
                <IconAndText Icon={SearchIcon} content="Search" link="/todo/today" />
            </div>
            <div>
                <IconAndText Icon={InboxIcon} content="Inbox" link="/todo/today" />
            </div>
            <div>
                <IconAndText Icon={TodayIcon} content="Today" link="/todo/today" />
            </div>
            <div>
                <IconAndText Icon={UpcomingIcon} content="Upcoming" link="/todo/today" />
            </div>
            <div>    
                <IconAndText Icon={FiltersLabelsIcon} content="Filters & Labels" link="/todo/today" />
            </div>
        </div>
    );
}