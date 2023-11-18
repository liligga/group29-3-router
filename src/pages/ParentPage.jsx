import { useState } from "react";

const ChildOne = ({ userName }) => {
  return <div>Ваше имя:{userName}</div>;
};

const ChildThree = ({ userName, changeName }) => {
  return (
    <div>
      child 3
      <input
        type="text"
        onChange={(e) => changeName(e.target.value)}
        value={userName}
      />
    </div>
  );
};

const ChildTwo = ({ userName, changeName }) => {
  return (
    <div>
      ChildTwo
      <ChildThree userName={userName} changeName={changeName} />
    </div>
  );
};

const ParentPage = () => {
  const [name, setName] = useState("Igor");

  return (
    <div>
      ParentPage name: {name}
      {/* <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      /> */}
      {/* <ChildOne userName={name} /> */}
      <ChildTwo userName={name} changeName={setName} />
    </div>
  );
};
export default ParentPage;
