const createInsertInterface = () => {
  const app = document.querySelector(`.app`);
  return (element) => {
    app.appendChild(element);
  };
};
const insertInterface = createInsertInterface();

export default insertInterface;
