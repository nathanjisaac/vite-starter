import "./App.css";
import { useDB } from "@vlcn.io/react";

function App({ dbid }: { dbid: string }) {
  const ctx = useDB(dbid);
  // get their site id
  // see if we have a reigstered name for them
  // if not, ask them to register and seed them
  return <div>Welcome to Poke-Pass!</div>;
}

export default App;

const nanoid = (t = 21) =>
  crypto
    .getRandomValues(new Uint8Array(t))
    .reduce(
      (t, e) =>
        (t +=
          (e &= 63) < 36
            ? e.toString(36)
            : e < 62
            ? (e - 26).toString(36).toUpperCase()
            : e > 62
            ? "-"
            : "_"),
      ""
    );
