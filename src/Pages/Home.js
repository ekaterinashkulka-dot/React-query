import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/products", {
      state: { from: "Home page" },
      replace: true,
    });
  };
  return (
    <>
      <p>Home</p>
      <button onClick={onClickHandler}>Перейти до товарів</button>
    </>
  );
};
export default Home;
