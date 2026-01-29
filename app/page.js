import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SearchBar from "@/components/SearchBar/SearchBar";
import RecipesView from "@/components/RecipesView/RecipesView";
import { SharedProvider } from "@/components/SharedContext/SharedContext";
import styles from "./page.module.css";

export default function Home() {
  return (
    <SharedProvider>
      <Header></Header>
      <SearchBar></SearchBar>
      <main>
        <RecipesView></RecipesView>
      </main>
      <Footer></Footer>
    </SharedProvider>
  );
}
