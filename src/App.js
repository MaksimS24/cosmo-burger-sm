import './App.css';
import AppHeader from './component/app-header/app-header';
import BurgerIngredients from "./component/burger-ingredients/burger-ingredients";


const App = () => {
    return (
        <>
            <header>
                <AppHeader/>
            </header>
            <main>
                <BurgerIngredients/>
            </main>
        </>
    );
};
export default App;
