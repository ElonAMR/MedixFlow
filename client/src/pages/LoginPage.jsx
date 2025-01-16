

export function LoginPage(){
    return(
        <div className="login-container">
            <form className="login-form">
                <h2>Login</h2>
                <label>User Name:</label>
                <input type="text" id="username" name="username" required/>

                <label>Password:</label>
                <input type="password" id="password" name="password" required/>

                <button type="submit">Sign In</button>
                <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
            </form>

        </div>
    )
}