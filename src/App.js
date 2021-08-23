import "./App.css";
import Search from "./components/search/search";
import Book from "./components/book/books";
import styles from './App.css';
import { Avatar } from "@material-ui/core";
import ImportContactsIcon from '@material-ui/icons/ImportContacts';



const App = () => {
  return (
    <div>
      <img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAlVmOtyedVcqdrhCNptBnDOQsLiHOJxfHMg&usqp=CAU'/>
      <img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMOha5LFf3oj9iKA-u-J9O3_e6wpREC10c0Q&usqp=CAU'/>
      <Avatar />
      <Search />
      <div>Жанр</div>
      <div className="App">
        <ul>
          <li>История</li>
          <li>Бизнес</li>
          <li>Спорт</li>
          <li>Красота</li>
          <li>Здоровье</li>
          <li>Детские книги</li>
          <li>Дом, дача</li>
          <li>Фантастика</li>
          <li>Детективы</li>
          <li>Романы</li>
          <li>Проза</li>
          <li>Зарубежная литература</li>
          <li>Фэнтези</li>
          <li>Хобби</li>
          <li>Досуг</li>
          <li>Публицистика</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
