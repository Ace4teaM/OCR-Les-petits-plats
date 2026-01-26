import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import SearchBar from "../components/SearchBar/SearchBar";
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Header></Header>
      <SearchBar></SearchBar>
      <main>
        <section className={styles.recipes}>
          <RecipeCard></RecipeCard>
          <RecipeCard></RecipeCard>
          <RecipeCard></RecipeCard>
          <RecipeCard></RecipeCard>
          <RecipeCard></RecipeCard>
          <RecipeCard></RecipeCard>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
