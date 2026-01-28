"use client";
import { useEffect, useState } from 'react';
import styles from './TagList.module.css';

const TagList = ({tags, title, selectionState}) => {

  // contient les éléments sélectionnables
  const [selectable, setSelectable] = useState([...tags]);

  // contient les éléments sélectionnés
  const [selection, setSelection] = selectionState ?? useState([]);

  // texte de la saisie
  const [filter, setFilter] = useState("");

  // affiche/cache le détail de la liste
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log(selection)
  }, [selection])

  // Filtre les éléments sélectionnables en fonction de la saisie utilisateur
  useEffect(() => {
    setSelectable(tags.filter(t => t.toLowerCase().includes(filter.toLowerCase()) && !selection.includes(t)));
  }, [filter])

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <label>{title}</label>
      </div>
      {show &&
        <div className={styles.popup}>
          <div className={styles.filterContent}>
            <input type="search" value={filter} onChange={(e) => setFilter(e.target.value)} />
            {filter && <span className={styles.cross} onClick={() => setFilter("")}></span>}
            <span className={styles.find}></span>
          </div>
          <div>
            {selection.map((tag, index) => (
              <span key={`tag-sel-${index}`} className={`${styles.item} ${styles.selected}`} onClick={() => {setSelectable([...selectable, tag]); setSelection(selection.filter(t => t !== tag))}}>{tag}</span>
            ))}
          </div>
          <div className={styles.list}>
            {selectable.map((tag, index) => (
              <span key={`tag-${index}`} className={styles.item} onClick={() => {setSelection([...selection, tag]); setSelectable(selectable.filter(t => t !== tag))}}>{tag}</span>
            ))}
          </div>
        </div>
      }
      <div className={`${styles.arrow} ${show ? styles.reversedY : ''}`} onClick={() => setShow(!show)}></div>
    </div>
  )
}

export default TagList;
