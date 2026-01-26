import styles from './SearchBar.module.css';

export default function SearchBar() {
  return (
    <section className={styles.container}>
      <select>
        <option>Ingrédients</option>
      </select>
      <select>
        <option>Appareils</option>
      </select>
      <select>
        <option>Ustensiles</option>
      </select>
      <span>50 recettes</span>
    </section>
  );
}