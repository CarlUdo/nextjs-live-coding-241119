export default function Home() {
  const data = {
    name: "Carl"
  };

  return (
    <main>
    <h1>Hej hej!</h1>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </main> 
  );
}
