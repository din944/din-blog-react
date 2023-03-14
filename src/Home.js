import { useState } from "react";

const Home = () => {
  //   let name = "mario";

  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName("luigi");
    setAge(30);
  };

  return (
    <div className="home">
      <h2>Homepage by din</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click me by din</button>
    </div>
  );
};

export default Home;
