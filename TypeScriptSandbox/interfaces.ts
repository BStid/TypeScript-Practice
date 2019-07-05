//Creating objects inline
// const showTodo = (todo: { title: string; text: string }) => {
//   console.log(todo.title + "....." + todo.text);
// };
// let myTodo = { title: "Trash", text: "Take out trash" };

// showTodo(myTodo);

//Interface -- cleaner prefered way to do it
interface Todo {
  title: string;
  text: string;
}

const showTodo = (todo: Todo) => {
  console.log(todo.title + "....." + todo.text);
};
let myTodo = { title: "Trash", text: "Take out trash" };

showTodo(myTodo);
