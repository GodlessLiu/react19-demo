import { useFormStatus } from "react-dom"
import { fetch } from "../utils";

function Submit() {
    const formState = useFormStatus();
    return <div>
        <button type="submit" disabled={formState.pending}>提交</button>
        {JSON.stringify(formState)}
    </div>
}

export default function Demo() {
    return <>
        <form action={async (formData) => {
            const name = formData.get("name")
            const email = formData.get("email")
            console.log(name, email);
            await fetch()
        }}>
            name: <input type="text" name="name" />
            <br />
            email: <input type="email" name="email" />
            <br />
            <Submit />
        </form>
    </>
}