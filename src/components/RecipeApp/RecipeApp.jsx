import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './RecipeApp.module.scss';
import ponyGif from './pinkiepie-mlp.gif';

const RecipeApp = () => {
  const [year, setYear] = useState('');
  const [recipe, setRecipe] = useState([]);
  const [error, setError] = useState('');
  const [showAnimation, setShowAnimation] = useState(false);

  const handleInputChange = (event) => {
    setYear(event.target.value);
  };

  const text = [
    '1. У великій місцевості, де зібрано достатньо магічної енергії, наберіть 330мл води;',
    '2. У магічному колі додайте 3 гр Блакитного Місячного Пилу. Намагайтеся зберегти його ніжну синю кольорову силу.',
    '3. Обережно влийте 1 гр Вогняного Драконового Соку. Спостерігайте, як він додає різкість та енергію до зілля.',
    '4. Потім додайте 1 гр Золотої Сонячної Роси, даруючи зіллю світлу та теплу ауру.',
    '5. Гарно змішайте всі інгрідієнти, доки вони не набудуть потужної енергії.',
    '6. Перелийте зілля в чарівну посудину і підготуйтеся до використання магічного зілля "Колірні чари".'
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    if (year === '2020') {
      setRecipe(text);
      setError('');
      setShowAnimation(true);
    } else {
      setRecipe([]);
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
        <label className={styles.labels}>
          Введіть рік:
          <input type="text" value={year} onChange={handleInputChange} className={styles.input} />
        </label>
        <button type="submit" className={styles.button}>Пошук</button>
      </form>
      {recipe.length > 0 && (
        <ul className={styles.recipe}>
          {recipe.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      )}
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
