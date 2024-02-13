import { Poppins } from "next/font/google";
import "./ui/globals.sass";
import Hearts from "./ui/components/Hearts"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200','500', '800'],
  style: ['normal', 'italic']
})

export const metadata = {
  title: "Para Luna",
  description: "Hola mi amor, ¿Querés ser mi San Valentín?",
  author: 'Nicobgn'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <main>{children}</main>
        <Hearts />
      </body>
    </html>
  );
}
