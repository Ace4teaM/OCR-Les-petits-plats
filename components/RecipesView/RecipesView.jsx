"use client";

import styles from "./RecipesView.module.css";
import Link from "next/link";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
import { useShared } from "@/components/SharedContext/SharedContext";
import { useState, useEffect } from "react";

export default function RecipesView() {
  const { selectedIngredients, setSelectedIngredients } = useShared();
  const { selectedAppliances, setSelectedAppliances } = useShared();
  const { selectedUstensils, setSelectedUstensils } = useShared();
  const { filteredRecipes, setFilteredRecipes } = useShared();
  const { searchText, setSearchText } = useShared();
  const { recipes } = useShared();

  useEffect(() => {
    let list = [...recipes];

    if (searchText.length >= 3) {
      list = list.filter(
        (r) =>
          r.name.toLowerCase().includes(searchText.toLowerCase()) ||
          r.description.toLowerCase().includes(searchText.toLowerCase()) ||
          r.ingredients.some((i) =>
            i.ingredient.toLowerCase().includes(searchText.toLowerCase()),
          ),
      );
    }

    if (selectedIngredients.length > 0) {
      list = list.filter((r) =>
        selectedIngredients.every((ing) =>
          r.ingredients.some(
            (i) => i.ingredient.toLowerCase() === ing.toLowerCase(),
          ),
        ),
      );
    }

    if (selectedAppliances.length > 0) {
      list = list.filter((r) =>
        selectedAppliances.every(
          (app) => r.appliance.toLowerCase() === app.toLowerCase(),
        ),
      );
    }

    if (selectedUstensils.length > 0) {
      list = list.filter((r) =>
        selectedUstensils.every((ust) =>
          r.ustensils.some((u) => u.toLowerCase() === ust.toLowerCase()),
        ),
      );
    }

    setFilteredRecipes(list);
  }, [
    selectedIngredients,
    selectedAppliances,
    selectedUstensils,
    searchText,
    recipes,
  ]);

  return (
    <section className={styles.recipes}>
      {filteredRecipes.map((r) => (
        <Link key={`recipe-link-${r.id}`} href={`/recette/${r.slug}`}>
          <RecipeCard key={`recipe-${r.id}`} {...r}></RecipeCard>
        </Link>
      ))}
    </section>
  );
}
