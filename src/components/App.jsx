import RecipeApp from "./RecipeApp/RecipeApp";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        color: '#010101'
      }}
    >
     <RecipeApp/>
    </div>
  );
};
