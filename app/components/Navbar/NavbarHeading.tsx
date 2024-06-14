import NavbarHeadingItems from "./NavbarHeadingItems"
import NavbarUser from "./NavbarUser"

function NavbarHeading() {
  return (
    <div className="flex justify-between">
      <div className="content-center">
        <NavbarUser />
      </div>
      <div>
        <NavbarHeadingItems />
      </div>
    </div>
  )
}

export default NavbarHeading