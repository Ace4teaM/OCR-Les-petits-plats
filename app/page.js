import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import SearchBar from "../components/SearchBar/SearchBar";
import styles from './page.module.css';
import recipes from '@/private/recipes.json'
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header></Header>
      <SearchBar></SearchBar>
      <main>
        <section className={styles.recipes}>
          {recipes.map((r) => (
            <Link key={`recipe-link-${r.id}`} href={`/recette/${r.slug}`}>
          <RecipeCard key={`recipe-${r.id}`} {...r}></RecipeCard>
          </Link>
          ))}
        </section>
      </main>
      <Footer></Footer>
    </>
  );
}
