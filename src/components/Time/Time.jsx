import React, { useState } from "react"

import useInterval from "use-interval"

const Time = ({ showTimeToGo }) => {
    let [time, setTime] = useState(0)

    useInterval(() => {
        const date = new Date()
        const MT =
            (date.getSeconds() / 86400 +
                date.getMinutes() / 1440 +
                date.getHours() / 24) *
            100
        setTime(showTimeToGo ? 10 - (MT % 10) : MT)
    }, 50)

    return (
        <span style={{ whiteSpace: "nowrap" }}>
            {(time * 1)
                .toFixed(3)
                .padStart(6, "0")
                .replace(".", " : ")}
        </span>
    )
}

export default Time
