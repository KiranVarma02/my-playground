import { FormEvent } from "react";
import IconAndText from "../Generic/IconAndText";
import TodayIcon from "../Svg/TodayIcon";
import PersonIcon from "../Svg/PersonIcon";
import FlagIcon from "../Svg/FlagIcon";
import ReminderIcon from "../Svg/ReminderIcon";

export default function AddTaskForm() {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const response = await fetch('/api/todo', {
            method: 'POST',
            body: formData,
        })

        const data = await response.json()
    }

    const buttonStyle = "bg-none hover:bg-red-200 rounded px-3 py-1 border border-gray-300"

    return (
        <form onSubmit={onSubmit} className="editor mx-auto border border-gray-300 p-4 shadow-lg rounded-lg">
            <div className="flex flex-col pb-2">
                <input type="text" name="taskName" placeholder="Task name" className="bg-inherit outline-none"/>
                <input type="text" name="description" placeholder="Description" className="bg-inherit outline-none"/>

                <div className="flex space-x-2 py-4">
                    <IconAndText Icon={TodayIcon} content="Today" link="/todo/today" style={buttonStyle} />
                    <IconAndText Icon={PersonIcon} content="Assignee" link="/todo/today" style={buttonStyle} />
                    <IconAndText Icon={FlagIcon} content="Priority" link="/todo/today" style={buttonStyle} />
                    <IconAndText Icon={ReminderIcon} content="Reminders" link="/todo/today" style={buttonStyle} />
                </div>
            </div>

            <div className="border-t border-gray-300 py-2"></div>

            <div className="space-x-2 flex justify-end">
                <button type="submit" className="bg-red-100 hover:bg-red-200 rounded px-3 py-1">Cancel</button>
                <button type="submit" disabled={true} className={`bg-red-300 ${false}hover:bg-red-400 rounded px-3 py-1`}>Add task</button>
            </div>
        </form>
    )
}