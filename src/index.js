import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';

// !====================
// * react 68

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// !====================
// * react 22

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// !====================
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
// !====================
// const elem1 = React.createElement('span', { children: 'Hello' });
// const elem2 = React.createElement('span', { children: 'world' });

// const element = React.createElement('div', {
//   1: 5,
//   b: 10,
//   children: [elem1, ' ', elem2],
// });

// console.log(element);

// ReactDOM.render(element, document.getElementById('root'));
// !====================
// const elem1 = <span>Hello</span>;
// const elem2 = <span>world</span>;

// // const jsxElement = <div> 'Hello World'</div>;
// const jsxElement = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// );

// console.log(jsxElement);

// !====================

// const data = {
//   id: 'id-1',
//   url: 'https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg',
//   title: 'Feathers. Art abstract',
//   price: 500,
//   author: {
//     tag: 'ractapopulous',
//     url: 'https://pixabay.com/users/ractapopulous-24766/',
//   },
//   quantity: 10,
// };

// const data = paintings[2];

// function Painting(props) {
//   const { url, title, profileUrl, author, price } = props;
//   console.log(props);
//   return (
//     <div>
//       <img src={url} alt={title} width="480" />
//       <h2>{title}</h2>
//       <p>
//         Автор: <a href={profileUrl}>{author}</a>
//       </p>
//       <p>Цена: {price} кредитов</p>
//       <p>Доступность: заканчивается или есть в наличии </p>
//       <button type="button"> Добавить B корзину</button>
//     </div>
//   );
// }

//  <Painting
//    url={data.url}
//    title={data.title}
//    author={data.author.tag}
//    profileUrl={data.author.url}
//    price={data.price}
//  />;

// ReactDOM.render(<App />, document.getElementById('root'));
