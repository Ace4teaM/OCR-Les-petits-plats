import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import SearchBar from "../components/SearchBar/SearchBar";
import styles from './page.module.css';
import recipes from '@/private/recipes.json'

export default function Home() {
  return (
    <>
      <Header></Header>
      <SearchBar></SearchBar>
      <main>
        <section className={styles.recipes}>
          {recipes.map((r) => (
          <RecipeCard key={`recipe-${r.id}`} {...r}></RecipeCard>
          ))}
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
