import ThemeButton from "../Context/ThemeButton";
import New from "./New";
import useFecth from "./Hooks/useFecth";

function Home() {
  const { data, loading } = useFecth(
    "https://jsonplaceholder.typicode.com/posts",
  );

  if (loading) return <p>loading...</p>;
  return (
    <div>
      <h1>THIS IS THE LANDING PAGE</h1>
      <New user="HomePage" />
      <ThemeButton />
      <ul>
        {data.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Home;
