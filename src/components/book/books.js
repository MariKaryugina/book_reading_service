import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import DisableElevation from '../read/read';
import Click from '../click/click';

const Book = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
        <Tekst/>
        <DisableElevation/>
        <Click/>
        </Typography>  
      </Container>
    </React.Fragment>
  );
}
 
const Tekst = () => {
    return (
        <div>
     Вдовец Эгмонд Дрэп ведет жизнь полунищего ученого отшельника: уже 15 лет он пишет двухтомное научное исследование, труд всей своей жизни. Его единственная дочь Тавиния с шестилетнего возраста живет у дальней родственницы. Перед Новым годом приходит телеграмма: дочь приезжает в гости к отцу. Разыскивая единственную оставшуюся денежную ассигнацию, ученый втискивает страницы созданной рукописи в сорную корзину и мчится на вокзал. Через несколько минут после этого швейцар впускает в захламленную квартиру Тави, которая разминулась с отцом, и та приступает к предновогодней уборке, затопив камин сорной бумагой.
        </div>
    )
}
export default Book;
