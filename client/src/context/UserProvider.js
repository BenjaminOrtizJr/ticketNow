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


    function signup(credentials){
        axios.post("/auth/signup", credentials)
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

    function login(credentials){
        axios.post("/auth/login", credentials)
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

    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setUserState({
            user: {},
            token: "",
            tickets: []
        })
    }

    function handleAuthErr(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    function resetAuthErr(){
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }

    function getAllTickets() {
        userAxios.get("/api/ticket")
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    tickets: res.data
            }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function getUserTickets() {
        userAxios.get("/api/ticket/user")
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    tickets: res.data
            }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function addTicket(newTicket) {
        userAxios.post("/api/ticket", newTicket)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    tickets: [...prevState.tickets, res.data]
            }))
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
                addTicket
            }}>
            {props.children}
        </UserContext.Provider>
  );
}

export default UserProvider;