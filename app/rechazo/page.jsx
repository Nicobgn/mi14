'use client'
import RejectHandler from "../libs/RejectHandler"

const page = () => {
  RejectHandler()

  return (
    <p className="text">
      Nah, no te mientas, vos no querés rechazar a este bombón.
    </p>
  )
}

export default page
