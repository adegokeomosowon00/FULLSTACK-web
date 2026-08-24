function Welcome() {
  const currentUser = {
    name: "Ade",
    age: 16,
    hobby: "gaming",
  };
  const name = currentUser.name;
  const age = currentUser.age;
  const hobby = currentUser.hobby;
  return (
    <>
      <h1 className="welcome">welcome to React</h1>
      <p>my name is {name}</p>
      <p>he is {age} years old</p>
      <p>he loves {hobby}</p>
    </>
  );
}
export default Welcome;
