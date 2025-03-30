import { useActionState } from "react"
import { fetch } from "../utils"
const defaultState = {
    name: "default",
    age: 0
}
export default function Demo() {
    const [data, submitAction, isPending] = useActionState<typeof defaultState, FormData>(async (previousState, formData) => {
        console.log(previousState);
        const name = formData.get("name")
        const age = formData.get("age")
        const data = await fetch()
        if (!data) return defaultState
        return {
            name: String(name),
            age: Number(age)
        }
    }, defaultState)

    return <>
        数据：<small>{isPending ? "加载中..." : data.name}</small>
        <form action={submitAction}>
            name: <input type="text" name="name" />
            <br />
            age:<input type="number" name="age" />
            <br />
            <button type="submit" disabled={isPending}>Submit</button>
        </form>
        <p>
            `useActionState` 用于 处理异步操作，它接受一个函数，该函数接受两个参数：`previousState` 和 `formData`。`previousState` 是上一次操作的结果，`formData` 是当前表单的数据。
            函数应该返回[data,submitAction,isPending],其中`data` 是传入函数执行返回的结果，`submitAction` 是一个函数，用于提交操作，`isPending` 是一个布尔值，表示操作是否正在进行中
        </p>
    </>
}