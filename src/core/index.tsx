import { useContext, createContext } from "react"
import { WeatherContext } from "./hooks"

export const useHooks = () => {
    const context = useContext(WeatherContext)
    return context
}