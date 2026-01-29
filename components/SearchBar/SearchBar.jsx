"use client";

import styles from "./SearchBar.module.css";
import TagList from "@/components/TagList/TagList";
import { useMemo } from "react";
import { useShared } from "@/components/SharedContext/SharedContext";

export default function SearchBar() {
  const { filteredRecipes } = useShared();
  const { selectedIngredients, setSelectedIngredients } = useShared();
  const { selectedAppliances, setSelectedAppliances } = useShared();
  const { selectedUstensils, setSelectedUstensils } = useShared();

  const readIngredients = (recipes) => {
    const tmp = new Set();
    for (const i of recipes.map((r) => r.ingredients)) {
      for (const ii of i) {
        tmp.add(
          ii.ingredient[0].toUpperCase() + ii.ingredient.slice(1).toLowerCase(),
        );
      }
    }
    return [...tmp].sort();
  };

  const readUstensils = (recipes) => {
    const tmp = new Set();
    for (const i of recipes.map((r) => r.ustensils)) {
      for (const ii of i) {
        tmp.add(ii[0].toUpperCase() + ii.slice(1).toLowerCase());
      }
    }
    return [...tmp].sort();
  };

  const readAppliances = (recipes) => {
    const tmp = new Set();
    for (const i of recipes.map((r) => r.appliance)) {
      tmp.add(i[0].toUpperCase() + i.slice(1).toLowerCase());
    }
    return [...tmp].sort();
  };

  const ingredients = useMemo(
    () => readIngredients(filteredRecipes),
    [filteredRecipes],
  );

  const ustensils = useMemo(
    () => readUstensils(filteredRecipes),
    [filteredRecipes],
  );

  const appliances = useMemo(
    () => readAppliances(filteredRecipes),
    [filteredRecipes],
  );

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <TagList
          tags={ingredients}
          title="Ingredients"
          selection={selectedIngredients}
          setSelection={setSelectedIngredients}
        ></TagList>
        <TagList
          tags={appliances}
          title="Appareils"
          selection={selectedAppliances}
          setSelection={setSelectedAppliances}
        ></TagList>
        <TagList
          tags={ustensils}
          title="Ustensiles"
          selection={selectedUstensils}
          setSelection={setSelectedUstensils}
        ></TagList>
        <span>{filteredRecipes.length} recettes</span>
      </div>
      <div className={styles.tags}>
        {selectedIngredients.map((ingredient) => (
          <span key={ingredient}>
            {ingredient}
            <span
              className={styles.cross}
              onClick={() =>
                setSelectedIngredients(
                  selectedIngredients.filter((i) => i !== ingredient),
                )
              }
            ></span>
          </span>
        ))}
        {selectedAppliances.map((appliance) => (
          <span key={appliance}>
            {appliance}
            <span
              className={styles.cross}
              onClick={() =>
                setSelectedAppliances(
                  selectedAppliances.filter((a) => a !== appliance),
                )
              }
            ></span>
          </span>
        ))}
        {selectedUstensils.map((ustensil) => (
          <span key={ustensil}>
            {ustensil}
            <span
              className={styles.cross}
              onClick={() =>
                setSelectedUstensils(
                  selectedUstensils.filter((u) => u !== ustensil),
                )
              }
            ></span>
          </span>
        ))}
      </div>
    </section>
  );
}
