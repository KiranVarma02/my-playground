import NavbarItem from "./NavbarItem"
import AddTaskPlusIcon from "../Svg/AddTaskPlusIcon"
import SvgIcon from "../Svg/SvgIcon"

function AddTask() {
  return (
    <div className="font-bold">
      <NavbarItem Icon={AddTaskPlusIcon} content="Add task" link="/today"/>
    </div>
  )
}

export default AddTask


