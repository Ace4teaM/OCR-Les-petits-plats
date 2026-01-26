import styles from './RecipeCard.module.css';

export default function RecipeCard() {
  return (
    <article className={styles.card}>
      <img src='/recipes/Recette01.jpg' className={styles.banner} alt="recipe image"></img>
      <span className={styles.badge}>10min</span>
      <h2>Limonade de coco</h2>
      <div className={styles.content}>
    <h3>RECETTE</h3>
    <p>Mettre les glaçons à votre goût dans le blender, Ajouter le lait  la crème de coco, le jus de 2 citrons et le sucre ensemble. Mixer jusqu'à obtenir la consistance désirée.</p>
    <h3>INGRÉDIENTS</h3>
    <div className={styles.ingredients}>
        <span>
            <div className={styles.ingredient}>Lait de coco</div>
            <div className={styles.quantite}>400ml</div>
        </span>
        <span>
            <div className={styles.ingredient}>Jus de citron</div>
            <div className={styles.quantite}>2</div>
        </span>
        <span>
            <div className={styles.ingredient}>Crème de coco</div>
            <div className={styles.quantite}>4 cuillères</div>
        </span>
        <span>
            <div className={styles.ingredient}>Sucre</div>
            <div className={styles.quantite}>20g</div>
        </span>
        <span>
            <div className={styles.ingredient}>Glaçons</div>
            <div className={styles.quantite}>2</div>
        </span>
    </div>
    </div>
    </article>
  );
}