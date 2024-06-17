import { FormEvent } from "react";

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

    return (
        <form onSubmit={onSubmit} className="editor mx-auto flex flex-col border border-gray-300 p-4 shadow-lg rounded-lg">
            <input type="text" name="taskName" placeholder="Task name" className="bg-inherit outline-none"/>
            <input type="text" name="description" placeholder="Description" className="bg-inherit outline-none"/>

            <div className="space-x-2 flex justify-end">
                <button type="submit" className="bg-red-100 hover:bg-red-200 rounded px-3 py-1">Cancel</button>
                <button type="submit" disabled={true} className={`bg-red-300 ${false}hover:bg-red-400 rounded px-3 py-1`}>Add task</button>
            </div>
        </form>
    )
}