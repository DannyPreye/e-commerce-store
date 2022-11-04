import { useState } from "react"

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false)
  return {isOpen, setIsOpen}
}
export default Modal