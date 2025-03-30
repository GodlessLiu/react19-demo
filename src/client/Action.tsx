import { useState, useTransition } from "react"
import { fetch } from "../utils"

export default function Demo() {
    const [name, setName] = useState("")
    const [isPending, startTransiation] = useTransition()
    const handleBtnClick = () => {
        startTransiation(async () => {
            // 模拟异步操作
            const data = await fetch()
            setName(data)
        })
    }
    return <div>
        数据：<small>{isPending ? "加载中..." : name}</small>
        <p></p>
        <button onClick={handleBtnClick}>模拟点击</button>
        <p></p>
        useTransation 用户执行一些异步操作，并且希望这些操作在执行过程中不会阻塞 UI 的渲染，那么就可以使用 useTransition 这个 Hook。
        返回一个数组：[isPending, startTransition]
    </div>

}