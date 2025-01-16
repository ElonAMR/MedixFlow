import {Header} from "../components/common/Header";
import {Footer} from "../components/common/Footer";
// import {LoginPage} from "./LoginPage";
import {AddUser} from "./AddUser";

export function HomePage(){
    return(
        <>
            <Header/>
                <h1>Hello Home Page</h1>
                <AddUser/>
            <Footer/>
        </>
    )
}