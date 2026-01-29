"use client";
import { useEffect, useState, useMemo } from "react";
import styles from "./TagList.module.css";

const TagList = ({ tags, title, selection, setSelection }) => {
  // texte de la saisie
  const [filter, setFilter] = useState("");

  // affiche/cache le détail de la liste
  const [show, setShow] = useState(false);

  // Filtre les éléments sélectionnables en fonction de la sélection actuelle
  const selectable = useMemo(() => {
    return tags.filter(
      (t) =>
        t.toLowerCase().includes(filter.toLowerCase()) &&
        !selection.includes(t),
    );
  }, [tags, filter, selection]);

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <label>{title}</label>
      </div>
      {show && (
        <div className={styles.popup}>
          <div className={styles.filterContent}>
            <input
              type="search"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
            {filter && (
              <span
                className={styles.cross}
                onClick={() => setFilter("")}
              ></span>
            )}
            <span className={styles.find}></span>
          </div>
          <div>
            {selection.map((tag, index) => (
              <span
                key={`tag-sel-${index}`}
                className={`${styles.item} ${styles.selected}`}
                onClick={() => setSelection(selection.filter((t) => t !== tag))}
              >
                <span className={styles.close}></span>
                {tag}
              </span>
            ))}
          </div>
          <div className={styles.list}>
            {selectable.map((tag, index) => (
              <span
                key={`tag-${index}`}
                className={styles.item}
                onClick={() => setSelection([...selection, tag])}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
      <div
        className={`${styles.arrow} ${show ? styles.reversedY : ""}`}
        onClick={() => setShow(!show)}
      ></div>
    </div>
  );
};

export default TagList;
