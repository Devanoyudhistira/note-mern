/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import Mainpage from "./components/mainpage";
import { useAuth0 } from "@auth0/auth0-react";
import image from "./components/profile-user.png"
import Loginpage from "./components/loginpage";

function App() {
  const [isuser, setuser] = useState(false)
  const [notedata, setnotedata] = useState();
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0()
  useEffect(() => {
    async function getnote() {
      await fetch("https://noteapi-pink.vercel.app/getnote", {
        headers: { passkey: "devano yudhistira jago banget bjir" },
      })
        .then((res) => res.json())
        .then((result) => setnotedata(result));
    }
    if (isAuthenticated) {
      getnote();
    }
  }, [isAuthenticated]);

  async function loginuser() {
    if(isAuthenticated){
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
    ).then(res => res.json()).then(res => res)}
  }
  loginuser()

  return (
    <div className="flex flex-col h-[95vh] justify-start px-2 items-center">
      {isAuthenticated ?
        <Mainpage image={user.picture} name={user.name || user.nickname} logout={() => logout({ logoutParams: { returnTo: window.location.origin } })} notedata={notedata}   /> :
        <Loginpage loginWithRedirect={loginWithRedirect} />
      }
    </div>
  );
}

export default App;
