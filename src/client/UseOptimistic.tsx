import { useOptimistic, useState } from "react";



interface Message {
    text: string,
    sending: boolean,
    key: number
}
export default function Demo() {
    const [messages, setMessages] = useState<Message[]>([
        { text: "你好，在这儿！", sending: false, key: 1 }
    ]);
    const [optimisticMessages, addOptimisticMessage] = useOptimistic<Message[], string>(
        messages,
        (state, newMessage) => [
            ...state,
            {
                text: newMessage,
                sending: true,
                key: Math.random()
            }
        ]
    );
    function sendMessage(text: string) {
        // 模拟发送消息
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    setMessages(prev => [...prev, { text, sending: false, key: Math.random() }]);
                    resolve();
                } else {
                    reject();
                }
            }, 1000);
        })
    }

    return <>
        {optimisticMessages.map(message => <div key={message.key}>
            {message.text}
            <span>{message.sending ? "发送中..." : ""}</span>
        </div>)}
        <form action={async (formData) => {
            const text = formData.get("text") as string;
            if (text) {
                addOptimisticMessage(text);
                try {
                    await sendMessage(text);
                } catch (error) {
                    console.log(error);
                }
            }
            return
        }}>
            <input type="text" name="text" />
            <button type="submit">发送</button>
        </form>
        <div>
            `useOptimistic` 可以用来在发送消息时显示一个乐观的更新，即使消息发送失败，用户仍然可以看到他们的消息。语法是：
            `const [optimisticState, addOptimisticUpdate] = useOptimistic(state, updateFunction);`，
            其中optimisticState是当前状态，addOptimisticUpdate是一个函数，用于添加乐观更新。updateFunction是一个函数，它接受当前状态和一个新值作为参数，并返回一个新的状态。
            optimisticState的最终值是和state一样，但是中间可能会出现一些乐观的更新。
        </div>
    </>

}