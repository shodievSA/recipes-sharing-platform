import styles from "./meals-grid.module.css"
import MealItem from "./meal-item";

export default function MealsGrid({ meals }) 
{
    return (
        <ul className={styles.meals}>
            {meals.map((meal) => (
                <li key={meal._id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    )
}
