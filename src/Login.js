import { useState } from "react";
const Login=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState("")
    const [showuser,setShowUser]=useState(false)
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setShowUser(false)
        if(validateEmail(email)){
            setShowUser(true)
            setError("")
            return;
        }
        setError('email is not valid')
        return false
    }
    return(
        <div>
            <h1>Login Form to test</h1>
            {
                showuser&&(
                    <p data-testid="successmsg">you are authenticated</p>
                )
            }
            {
                error&&(
                    <p>{error}</p>
                )
            }
            <form onSubmit={(e)=>handleSubmit(e)}>
            <input type='email'
            name='useremail'
            placeholder="enter email"
            value={email}
            onChange={(e)=>handleEmail(e)}></input>
            <input type='password'
            name='userpassword'
            placeholder="enter password"
            value={password}
            onChange={(e)=>handlePassword(e)}></input>
            <button type='submit'>Login</button>
            <button type='reset'>Reset</button>
            </form>
        </div>
    )
}
export const validateEmail=(email)=>{
    if(email==='admin@gmail.com'){
        return true
    }
    return false
}
export default Login