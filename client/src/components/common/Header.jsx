
export function Header(){
    return(
        <header style={{display:"flex",justifyContent:"center",}}>
            <nav>
                <ul style={{display:"flex",flexDirection:"row",gap:"20px"}}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Developers</li>
                    <li>Login</li>
                </ul>
            </nav>
        </header>
    )
}
