export const getCurrUserRole = () => {
    return typeof window !== "undefined" ? localStorage.getItem("role") : null
}

export const getCurrUser = () => {
    return typeof window !== "undefined" ? localStorage.getItem("user") : null
}