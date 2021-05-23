export default function Home(props) {
  return (
    <div>
      <h1>POSTの一覧</h1>
      {props.posts.map((post) =>
        <p>{ post.title }</p>
      )}
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch("http://api:3000/posts", {method: "GET"});
  const json = await response.json();

  return {
    props: {
      posts: json
    },
  };
}