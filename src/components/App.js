// import { RecipeList } from './RecipeList';
// import recipes from '../recipes.json';

// export const App = () => {
//   return (
//     <>
//       <RecipeList items={recipes} />
//     </>
//   );
// };

// !====================
// * react 22

import PaintingList from './PaintingList';
import Section from './Section';
import paintings from './paintings.json';

export default function App() {
  return (
    <div>
      <Section title="Топ недели">
        <PaintingList items={paintings} />
      </Section>

      <Section title="Лучшее"></Section>
    </div>
  );
}
