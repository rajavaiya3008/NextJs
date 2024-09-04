export const getCurrUserRole = () => {
    return typeof window !== "undefined" ? localStorage.getItem("role") : null
}