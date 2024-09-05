export function decodeJwt(token) {
    const parts = token.split(".")
    if (parts.length !== 3) {
        throw new Error("Invalid format")
    }
    const header = JSON.parse(atob(parts[0]))
    const payload = JSON.parse(atob(parts[1]))

    return {header, payload}
}