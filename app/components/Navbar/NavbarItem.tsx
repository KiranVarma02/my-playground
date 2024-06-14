import Link, { LinkProps } from "next/link"
import SvgIcon from "../Svg/SvgIcon"

function NavbarItem(
  {Icon, content, link}:
  {Icon: React.ComponentType, content: string, link: string}) {

  return (
    <Link href={link}>
      <button className="flex hover:bg-red-200 space-x-2 rounded w-full p-1" >
        <SvgIcon Icon={Icon} />
        <span className="content-center">
            {content}
        </span>
      </button>
    </Link>
  )
}

export default NavbarItem