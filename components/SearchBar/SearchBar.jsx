"use client";

import styles from './SearchBar.module.css';
import recipes from '@/private/recipes.json';
import TagList from '@/components/TagList/TagList';
import { useEffect, useState } from 'react';

export default function SearchBar() {

  function readIngredients(){
    const tmp = new Set();
    for (const i of recipes.map(r => r.ingredients)) {
      for (const ii of i){
        tmp.add(ii.ingredient[0].toUpperCase() + ii.ingredient.slice(1).toLowerCase());}
    }
    return [...tmp].sort();
  }

  const ingredients = readIngredients();

  function readUstensils(){
    const tmp = new Set();
    for (const i of recipes.map(r => r.ustensils)) {
      for (const ii of i){
        tmp.add(ii[0].toUpperCase() + ii.slice(1).toLowerCase());}
    }
    return [...tmp].sort();
  }

  const ustensils = readUstensils();

  function readAppliances(){
    const tmp = new Set();
    for (const i of recipes.map(r => r.appliance)) {
      tmp.add(i[0].toUpperCase() + i.slice(1).toLowerCase());
    }
    return [...tmp].sort();
  }

  const appliances = readAppliances();

  const selectedIngredientsState = useState([]);
  const selectedAppliancesState = useState([]);
  const selectedUstensilsState = useState([]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <TagList tags={ingredients} title="Ingredients" selectionState={selectedIngredientsState}></TagList>
        <TagList tags={appliances} title="Appareils" selectionState={selectedAppliancesState}></TagList>
        <TagList tags={ustensils} title="Ustensiles" selectionState={selectedUstensilsState}></TagList>
        <span>{recipes.length} recettes</span>
      </div>
      <div className={styles.tags}>
        {selectedIngredientsState[0].map((ingredient) => <span key={ingredient}>{ingredient}<span className={styles.cross} onClick={() => selectedIngredientsState[1](selectedIngredientsState[0].filter(i => i !== ingredient))}></span></span>)}
        {selectedAppliancesState[0].map((appliance) => <span key={appliance}>{appliance}<span className={styles.cross} onClick={() => selectedAppliancesState[1](selectedAppliancesState[0].filter(a => a !== appliance))}></span></span>)}
        {selectedUstensilsState[0].map((ustensil) => <span key={ustensil}>{ustensil}<span className={styles.cross} onClick={() => selectedUstensilsState[1](selectedUstensilsState[0].filter(u => u !== ustensil))}></span></span>)}
      </div>
    </section>
  );
}