"use client";

import { createContext, useContext, useState } from "react";
import data from '@/private/recipes.json';

const SharedContext = createContext(null);

export function SharedProvider({ children }) {

  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [selectedAppliances, setSelectedAppliances] = useState([]);
  const [selectedUstensils, setSelectedUstensils] = useState([]);
  const [searchText, setSearchText] = useState([]);
  const [recipes] = useState(data);

  return (
    <SharedContext.Provider value={
      { 
        selectedIngredients, setSelectedIngredients, 
        selectedAppliances, setSelectedAppliances, 
        selectedUstensils, setSelectedUstensils, 
        searchText, setSearchText , 
        recipes
      }}>
      {children}
    </SharedContext.Provider>
  );
}

export function useShared() {
  return useContext(SharedContext);
}
