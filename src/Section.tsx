import React, { PropsWithChildren } from "react"

export const Section: React.FC<PropsWithChildren<{ title?: string }>> = (props) => {
    const { children, title = "" } = props
    return <div style={{ border: "1px dashed black", padding: "0 10px 20px 10px", marginTop: "10px" }}>
        <h2 style={{ padding: 0, margin: "4px 0 10px 0", fontStyle: "italic" }}>{title}</h2>
        {children}
    </div>
}