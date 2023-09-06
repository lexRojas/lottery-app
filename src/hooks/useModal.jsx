import { useState } from "react"


export const useModal = (valorInicial =false)=> {
  
    const [isOpen, setIsOpen] = useState(valorInicial)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)
     

    console.log(isOpen)
    return [isOpen,openModal,closeModal]
}
