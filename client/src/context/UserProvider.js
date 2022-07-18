import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const UserProvider = (props) => {
    const initialState = { 
        user: JSON.parse(localStorage.getItem("user")) || {}, 
        token: localStorage.getItem("token") || "",
        tickets: [],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initialState)


    const signup = (credentials) => {
        axios.post("https://symphonious-truffle-6fc66f.netlify.app/api/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    const login = (credentials) => {
        axios.post("https://symphonious-truffle-6fc66f.netlify.app/api/auth/login", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            tickets: []
        })
    }

    const handleAuthErr = (errMsg) => {
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    const resetAuthErr = () => {
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }

    const getAllTickets = () => {
        userAxios.get("https://symphonious-truffle-6fc66f.netlify.app/api/ticket")
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    tickets: res.data
            }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    const getUserTickets = () => {
        userAxios.get("https://symphonious-truffle-6fc66f.netlify.app/api/ticket/user")
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    tickets: res.data
            }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    const addTicket = (newTicket) => {
        userAxios.post("https://symphonious-truffle-6fc66f.netlify.app/api/ticket", newTicket)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    tickets: [...prevState.tickets, res.data]
            }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    const deleteTicket = (ticketId) => {
        userAxios.delete(`https://symphonious-truffle-6fc66f.netlify.app/api/ticket/${ticketId}`)
            .then(res => {
                setUserState(prevState => 
                prevState.filter(ticket => ticket._id !== ticketId))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    const editTicket = (updates, ticketId) => {
        axios.put(`https://symphonious-truffle-6fc66f.netlify.app/api/ticket/${ticketId}`, updates)
            .then(res => {
            setUserState(prevState => prevState.map(ticket => ticket._id !== ticketId ? ticket : res.data))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                resetAuthErr,
                getAllTickets,
                getUserTickets,
                addTicket,
                deleteTicket,
                editTicket
            }}>
            {props.children}
        </UserContext.Provider>
  );
}

export default UserProvider;