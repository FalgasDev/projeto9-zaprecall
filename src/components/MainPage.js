import { useState } from "react";
import Logo from "./Logo";
import Questions from "./Questions";
import Footer from "./Footer";

export default function MainPage() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <Logo/>
      <Questions counter={counter} setCounter={setCounter}/>
      <Footer counter={counter}/>
    </>
  )
}