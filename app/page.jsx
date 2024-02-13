import Link from "next/link";
import { Heart3 } from "./ui/components/Heart";
import Hearts from "./ui/components/Hearts";

export default function Home() {
  return (
    <main>
      <div className="text">
        <p className="text--top">
          <Heart3/> 
          Mi Brujita Hermosa, ¿Quisieras ser mi San Valentín este 2024? 
          <Heart3/>
        </p>
        <div className="text--bot">
          <Link href={'/acepto'}>Sí, quiero</Link>
          <Link href={'/rechazo'}>No, no quiero</Link>
        </div>
      </div>
    </main>
  );
}
