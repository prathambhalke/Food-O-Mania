import MealsItem from "./MealsItem";

const MealsGrid = ({ meals }: { meals: {} }) => {
  return (
    <ul>
      {meals.map((item: string) => {
        <li key={item.id}>
          <MealsItem meals = {...meals}/>
        </li>;
      })}
    </ul>
  );
};

export default MealsGrid;
