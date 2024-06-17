import { FormEvent } from "react";

export default function AddTaskForm() {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const response = await fetch('/api/submit', {
            method: 'POST',
            body: formData,
        })

        const data = await response.json()
        console.log("🚀 ~ onSubmit ~ data:", data)
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="name" />
            <button type="submit">Add task</button>
        </form>
    )
}