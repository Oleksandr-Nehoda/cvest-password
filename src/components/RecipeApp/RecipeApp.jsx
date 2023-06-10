

import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './RecipeApp.module.scss';
import ponyGif from './pinkiepie-mlp.gif';

const RecipeApp = () => {
  const [year, setYear] = useState('');
  const [recipe, setRecipe] = useState('');
  const [error, setError] = useState('');
  const [showAnimation, setShowAnimation] = useState(false);

  const handleInputChange = (event) => {
    setYear(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (year === '2020') {
      setRecipe('2 яблука і слива');
      setError('');
      setShowAnimation(true);
    } else {
      setRecipe('');
      setError('Помилка: неправильний рік!');
      setShowAnimation(false);
    }
  };

  const animationProps = useSpring({
    to: { opacity: showAnimation ? 1 : 0, transform: showAnimation ? 'translateY(0)' : 'translateY(-100%)' },
    from: { opacity: 0, transform: 'translateY(-100%)' },
  });

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          Введіть рік:
          <input type="text" value={year} onChange={handleInputChange} className={styles.input} />
        </label>
        <button type="submit" className={styles.button}>Пошук</button>
      </form>
      {recipe && <p className={styles.recipe}>Рецепт: {recipe}</p>}
      {error && <p className={styles.error}>{error}</p>}
      {showAnimation && (
        <animated.div className={styles.animation} style={animationProps}>
          <img src={ponyGif} alt="Jumping Pony with Stars" className={styles.pony} />
        </animated.div>
        
      )}
    </div>
  );
};

export default RecipeApp;



// const RecipeApp = () => {
//   const [year, setYear] = useState('');
//   const [recipe, setRecipe] = useState('');
//   const [error, setError] = useState('');

//   const handleInputChange = (event) => {
//     setYear(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (year === '2020') {
//       setRecipe('2 яблука і слива');
//       setError('');
//     } else {
//       setRecipe('');
//       setError('Помилка: неправильний рік!');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Введіть рік:
//           <input type="text" value={year} onChange={handleInputChange} />
//         </label>
//         <button type="submit">Пошук</button>
//       </form>
//       {recipe && <p>Рецепт: {recipe}</p>}
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default RecipeApp;
