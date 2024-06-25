import Link, { LinkProps } from "next/link"
import SvgIcon from "../Svg/SvgIcon"

function IconAndText(
  {Icon, content, link, css}:
  {Icon: React.ComponentType, link: string, content?: string, css?: string}) {

  return (
    <Link href={link}>
      <button className={css ? css : 'flex hover:bg-red-200 space-x-2 rounded w-full p-1'} >
        <SvgIcon Icon={Icon} />
        <span className="content-center">
            {content}
        </span>
      </button>
    </Link>
  )
}

export default IconAndText