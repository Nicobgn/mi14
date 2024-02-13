import Link from "next/link"

const page = () => {
  return (
    <p className="text">
      Listo mi amor, ya me llegó la data, nos vemos en la fecha acordada, priorizando esa vestimenta que elegiste:)
      <br/><Link href="/">Podes volver al inicio, hermosa</Link>
    </p>
  )
}

export default page
