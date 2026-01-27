import HeaderMessage from "../components/HeaderMessage/HeaderMessage";
import Footer from "../components/Footer/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <Link href="/">
      <HeaderMessage message="La page que vous demandez est introuvable." title="404 :("></HeaderMessage>
      <Footer></Footer>
    </Link>
  );
}
