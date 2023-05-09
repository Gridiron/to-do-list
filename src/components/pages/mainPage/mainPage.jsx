import ToDoList from '../../organisms/toDoList/toDoList';
import Layout from '../../templates/Layout/layout';

const MainPage = () => {
  return (
    <div>
      <Layout content={<ToDoList />}></Layout>
    </div>
  );
};

export default MainPage;
