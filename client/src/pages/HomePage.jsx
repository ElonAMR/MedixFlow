// import {Header} from "../components/common/Header";
import {Footer} from "../components/common/Footer";
// import {LoginPage} from "./LoginPage";
//import {AddUser} from "./AddUser";
import {HeaderConnect} from "../components/common/HeaderConnect";

export function HomePage(){
    return(
        <>
            <HeaderConnect/>
                <h1>Hello Home Page</h1>
            <Footer/>
        </>
    )
}