/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import Mainpage from "./components/mainpage";
import { useAuth0 } from "@auth0/auth0-react";
import Loginpage from "./components/loginpage";
import toast , {Toaster} from "react-hot-toast";

function App() {
  const [userid,setuserid] = useState("")
  const [isuser, setuser] = useState(false)
  const [hasfirstrender,sethasfirstrender] = useState(true)
  const [notedata, setnotedata] = useState();
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0()
  useEffect(() => {
    async function getnote() {
      await fetch("https://noteapi-pink.vercel.app/getnote/"+userid, {
        headers: { passkey: "devano yudhistira jago banget bjir" },
      })
        .then((res) => res.json())
        .then((result) => setnotedata(result));
    }
    if (isAuthenticated && userid !== null) {
      setTimeout(() => {
        getnote();
      }, 2000);
    }
  }, [isAuthenticated,userid]);

  async function loginuser() {
    if(isAuthenticated && hasfirstrender){
    await fetch("https://noteapi-pink.vercel.app/auth/login",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
            username:user.nickname,
            nickname:user.name
        })
      }
    ).then(res => res.json()).then((res) =>{
      setuserid(res.user.name)
      sessionStorage.setItem("id",res.user.name)
      toast.success("welcome " + user.nickname)
      sethasfirstrender(false)
    })}
    
  }
  loginuser()

  return (
    <div className="flex flex-col h-[95vh] justify-start px-2 items-center">
      <Toaster/>
      {isAuthenticated ?
        <Mainpage image={user.picture} setnote={setnotedata} name={user.name || user.nickname} logout={() => {sessionStorage.removeItem("id");logout({logoutParams: { returnTo: window.location.origin } })}} notedata={notedata}   /> :
        <Loginpage loginWithRedirect={loginWithRedirect} />
      }
    </div>
  );
}

export default App;
