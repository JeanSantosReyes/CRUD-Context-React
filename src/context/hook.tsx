import { useContext } from "react"
import { Context } from "./Context"

export const useContextHook = () => {
    const context = useContext(Context)
    return context
}