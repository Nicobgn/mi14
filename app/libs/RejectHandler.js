import { useRouter } from "next/navigation";

const RejectHandler = () => {
  const router = useRouter();

  setTimeout(() => router.push('/'), 2000);
}

export default RejectHandler
