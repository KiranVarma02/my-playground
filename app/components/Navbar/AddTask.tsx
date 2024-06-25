import IconAndText from "../Generic/IconAndText"
import AddTaskPlusIcon from "../Svg/AddTaskPlusIcon"
import SvgIcon from "../Svg/SvgIcon"

function AddTask() {
  return (
    <div className="font-bold">
      <IconAndText Icon={AddTaskPlusIcon} content="Add task" link="/today"/>
    </div>
  )
}

export default AddTask


