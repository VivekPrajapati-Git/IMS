import { useEffect } from "react"
import '../css/Error.css'

export default function ErrorToast({message,onClose}){
    useEffect(()=>{
        const timer = setTimeout(()=>{
            onClose();
        },5000)

        return () => clearTimeout(timer)
    },[onClose]);

    if (!message) return null;

    return (
        <>
        <div className="toast">
            {message}
        </div>
        </>
    )
}