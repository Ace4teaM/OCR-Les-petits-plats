import styles from "./Recipe.module.css";

export default function Recipe({
  id,
  image,
  name,
  time,
  description,
  ingredients,
  appliance,
  ustensils,
}) {
  return (
    <article className={styles.container}>
      <img src={`/recipes/${image}`} alt={name} />
      <div className={styles.content}>
        <h2>{name}</h2>
        <h3>TEMPS DE PRÉPARATION</h3>
        <span className={styles.badge}>{time}min</span>
        <h3>INGRÉDIENTS</h3>
        <div className={styles.ingredients}>
          {ingredients.map((ingredient, index) => (
            <span key={`ingredient-${index}`}>
              <div className={styles.ingredient}>{ingredient.ingredient}</div>
              <div className={styles.quantite}>
                {ingredient.quantity} {ingredient.unit ?? ""}
              </div>
            </span>
          ))}
        </div>
        <h3>USTENSILES NÉCESSAIRES</h3>
        <p>
          {ustensils
            .map((element) => {
              return element.substr(0, 1).toUpperCase() + element.substr(1);
            })
            .join(", ")}
        </p>
        <h3>APPAREILS NÉCESSAIRES</h3>
        <p>{appliance}</p>
        <h3>RECETTE</h3>
        <ul>
          {description.split(". ").map((step, index) => (
            <li key={`step-${index}`}>{step}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
