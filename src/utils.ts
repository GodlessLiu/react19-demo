export function fetch() {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve("data")
        }, 2000)
    })
}