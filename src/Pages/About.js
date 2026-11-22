import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <p>About</p>
      <Link to="/" replace>
        На головну
      </Link>
    </div>
  );
};
export default About;
