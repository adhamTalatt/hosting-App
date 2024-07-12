export default async function page() {
  await fetch("https://jsonplaceholder.typicode.com//posts")
    .then((response) => response.json())
    .then((json) => console.log(json));

  return (
    <div>
      <h1>Artcles</h1>
    </div>
  );
}
