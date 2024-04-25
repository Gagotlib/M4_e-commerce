"use client"
import { createContext, useContext, useState, useEffect } from 'react'

interface AuthContextProps {
	token: string | null
	setToken: (token: string | null) => void
}
const AuthContext = createContext<AuthContextProps>({
	token: null,
	setToken: () => {}
})
interface AuthProviderProps {
	children: React.ReactNode
}
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [token, setToken] = useState<string | null>(null)

	useEffect(() => {
		const tokenFromCookie = localStorage.getItem('authToken')
		if (tokenFromCookie) {
			setToken(tokenFromCookie)
		}
	}, [])
	return <AuthContext.Provider value={{ token, setToken }}>{children}</AuthContext.Provider>
}
export const useAuth = () => useContext(AuthContext)
