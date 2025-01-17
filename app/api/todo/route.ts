import Todo from "../../db/todoSchema";
import { UUID } from "mongodb";

export async function POST(req: Request) {

    const body = await req.formData()

    // Extract and log form data
    const formDataObj: { [key: string]: any } = {};
    body.forEach((value, key) => {
        formDataObj[key] = value;
    });
    
    const newTask = new Todo({id: new UUID().toBinary(), ...formDataObj })
    newTask.save();

    return Response.json(body)
}