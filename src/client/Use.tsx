'use client';
import { Suspense, use } from "react";

const promiseFn = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("Hello World")
        } else {
            reject("Error")
        }
    }, 2000)
}).then((res) => res).catch((err) => err as string)

function Use() {
    const message = use<string>(promiseFn)
    return <p>{message}</p>
}

export default function Demo() {

    return <div>
        <Suspense fallback={<div>Loading...</div>}>
            <Use />
        </Suspense>
    </div>
}