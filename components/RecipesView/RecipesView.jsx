"use client";

import styles from './RecipesView.module.css';
import Link from 'next/link';
import RecipeCard from '@/components/RecipeCard/RecipeCard';
import { useShared } from "@/components/SharedContext/SharedContext";

export default function RecipesView() {

  const {selectedIngredients, setSelectedIngredients} = useShared();
  const {selectedAppliances, setSelectedAppliances} = useShared();
  const {selectedUstensils, setSelectedUstensils} = useShared();
  const {searchText, setSearchText} = useShared();
  const {recipes} = useShared();

  return (
      <section className={styles.recipes}>
        {recipes.map((r) => (
          <Link key={`recipe-link-${r.id}`} href={`/recette/${r.slug}`}>
        <RecipeCard key={`recipe-${r.id}`} {...r}></RecipeCard>
        </Link>
        ))}
      </section>
  )
}
