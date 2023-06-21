import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './RecipeApp.module.scss';
import cryBoy from './i-want-chocolate.gif';
import germionaGif from './harry-potter-hermione-granger.gif'

const RecipeApp = () => {
  const [year, setYear] = useState('');
  const [recipe, setRecipe] = useState([]);
  const [error, setError] = useState('');
  const [showAnimation, setShowAnimation] = useState(false);

  const handleInputChange = (event) => {
    setYear(event.target.value);
  };

  const text = [
    '1. У великій місцевості, де зібрано достатньо магічної енергії, наберіть води;',
    '2. У магічному колі додайте Блакитного Місячного Пилу. Намагайтеся зберегти його ніжну синю кольорову силу.',
    '3. Обережно влийте 1 гр Вогняного Драконового Соку. Спостерігайте, як він додає різкість та енергію до зілля.',
    '4. Гарно змішайте всі інгрідієнти, доки вони не набудуть потужної енергії.',
    '5. Магічне зілля готове!'
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    setTimeout(() => {
        if (year === 'Фіzер') {
            setRecipe(text);
            setError('');
            setShowAnimation(true);
          } else {
           
            setRecipe([]);
            setError('Прикро, але це НЕ правильна відповідь');
            setShowAnimation(false);
          }
    }, 300)

  };

  const animationProps = useSpring({
    to: { opacity: showAnimation ? 1 : 0, transform: showAnimation ? 'scale(1) translateY(0)' : 'scale(1.5) translateY(-100%)' },
    from: { opacity: 0, transform: 'scale(1.5) translateY(-100%)' },
    config: { duration: 1500, delay: 500 }
  });

  return (
    <div className={styles.container}>
        {!showAnimation && (
            <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.labels}>
          Введіть прізвище автора статуї:
          <input type="text" value={year} onChange={handleInputChange} className={styles.input} />
        </label>
        <button type="submit" className={styles.button}>Спробувати</button>
      </form>
        ) }
      
      {recipe.length > 0 && (
        <>
        <h1 className={styles.title}>Рецепт підземель Хогвортсу</h1>
        <ul className={styles.recipe}>
          {recipe.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
        </>
      )}
      {error && <>
       <p className={styles.error}>{error}</p>
       <img src={cryBoy} alt="Cry boy" className={styles.boy}/>
       </>
      }
      {showAnimation && (
        <animated.div className={styles.animation} style={animationProps}>
          <img src={germionaGif} alt="Jumping Pony with Stars" className={styles.pony} />
        </animated.div>
      )}
    </div>
  );
};

export default RecipeApp;

    // '1. У великій місцевості, де зібрано достатньо магічної енергії, наберіть води;',
    // '2. У магічному колі додайте Блакитного Місячного Пилу. Намагайтеся зберегти його ніжну синю кольорову силу.',
    // '3. Обережно влийте 1 гр Вогняного Драконового Соку. Спостерігайте, як він додає різкість та енергію до зілля.',
    // '4. Потім додайте 1 гр Золотої Сонячної Роси, даруючи зіллю світлу та теплу ауру.',
    // '5. Гарно змішайте всі інгрідієнти, доки вони не набудуть потужної енергії.',
    // '6. Перелийте зілля в чарівну посудину і підготуйтеся до використання магічного зілля "Колірні чари".'