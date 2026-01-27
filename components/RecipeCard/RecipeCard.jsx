import styles from './RecipeCard.module.css';

export default function RecipeCard({image, name, time, description, ingredients}) {
  return (
    <article className={styles.card}>
      <img src={`/recipes/${image}`} className={styles.banner} alt="recipe image"></img>
      <span className={styles.badge}>{time}min</span>
      <h2>{name}</h2>
      <div className={styles.content}>
    <h3>RECETTE</h3>
    <p>{description}</p>
    <h3>INGRÉDIENTS</h3>
    <div className={styles.ingredients}>
        {ingredients.map((ingredient, index) => (
            <span key={`ingredient-${index}`}>
                <div className={styles.ingredient}>{ingredient.ingredient}</div>
                <div className={styles.quantite}>{ingredient.quantity} {ingredient.unit ?? ""}</div>
            </span>
        ))}
    </div>
    </div>
    </article>
  );
}