const getCurrentHour = () => {
    const date = new Date()
    const MT =
        (date.getSeconds() / 86400 +
            date.getMinutes() / 1440 +
            date.getHours() / 24) *
        10
    return Math.floor(MT)
}

const getDayOfTheYear = () => {
    const now = new Date()
    const start = new Date(now.getFullYear(), 0, 0)
    const diff = now - start
    const oneDay = 1000 * 60 * 60 * 24
    const day = Math.floor(diff / oneDay)
    return day
}

export const getCurrentHourOfYear = () => {
    const currentHour = getDayOfTheYear() * 10 + getCurrentHour()
    return currentHour
}
export const getCurrentPieceNumber = totalPieces => {
    const currentHour = getCurrentHourOfYear()
    const pieceToGet = (currentHour % totalPieces) + 1
    return pieceToGet
}
