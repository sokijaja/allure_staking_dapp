import { Icon } from "@iconify/react";
import { useEffect, useState } from "react"


export default function ScrollToTopButton() {
  const [show, setShow] = useState();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 300 ? setShow(true) : setShow(false);
    })
  })
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <span className={`btn border-none bg-neutral/50 hover:bg-neutral/70 btn-circle fixed 
    bottom-14 hover:bottom-[3.6rem] transition-all right-10 text-white
    ${show ? 'flex' : 'hidden'}`}
      onClick={handleClick}
    >
      <Icon icon={'fluent:chevron-up-12-filled'} width={24} height={24} />
    </span>
  )
}