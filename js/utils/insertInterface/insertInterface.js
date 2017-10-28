const createInsertInterface = () => {
  const app = document.querySelector(`.app`);
  return (element) => {
    app.innerHTML = ``;
    app.appendChild(element);
  };
};
const insertInterface = createInsertInterface();

export default insertInterface;
