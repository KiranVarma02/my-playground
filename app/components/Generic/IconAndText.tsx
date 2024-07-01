import Link, { LinkProps } from "next/link"
import SvgIcon from "../Svg/SvgIcon"
import classNames from "classnames"

function IconAndText(
  {Icon, content, link, style}:
  {Icon: React.ComponentType, link: string, content?: string, style?: string}) {

  return (
    <Link href={link}>
      <button className={classNames('flex hover:bg-red-200 space-x-2 rounded w-full p-1', style)} >
        <SvgIcon Icon={Icon}/>
        <span>
            {content}
        </span>
      </button>
    </Link>
  )
}

export default IconAndText