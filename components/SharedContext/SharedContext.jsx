"use client";

import { createContext, useContext, useState } from "react";
import data from '@/private/recipes.json';

const SharedContext = createContext(null);

export function SharedProvider({ children }) {

  // la liste des tags ingredients sélectionnés
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  // la liste des tags appareils sélectionnés
  const [selectedAppliances, setSelectedAppliances] = useState([]);
  // la liste des tags ustensils sélectionnés
  const [selectedUstensils, setSelectedUstensils] = useState([]);
  // le texte de recherche
  const [searchText, setSearchText] = useState([]);
  // la liste des recettes
  const [recipes] = useState(data);
  // la liste des recettes filtrées
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  return (
    <SharedContext.Provider value={
      { 
        selectedIngredients, setSelectedIngredients, 
        selectedAppliances, setSelectedAppliances, 
        selectedUstensils, setSelectedUstensils, 
        searchText, setSearchText,
        filteredRecipes, setFilteredRecipes,
        recipes
      }}>
      {children}
    </SharedContext.Provider>
  );
}

export function useShared() {
  return useContext(SharedContext);
}
