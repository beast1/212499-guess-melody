const createResetWindow = () => {
  const app = document.querySelector(`.app`);
  return () => {
    app.innerHTML = ``;
  };
};
const resetWindow = createResetWindow();

export default resetWindow;
