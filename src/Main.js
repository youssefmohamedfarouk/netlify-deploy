import { useEffect, useState } from "react";

export default function Main() {
  const [apis, setApis] = useState([]);

  useEffect(() => {
    fetch("https://api.publicapis.org/entries")
      .then((response) => response.json())
      .then((data) => setApis(data.entries));
  }, []);

  return (
    <div>
      {apis
        .filter((api) => api.Auth === "apiKey")
        .map((entry) => {
          return (
            <div>
              <a href={entry.Link}>{entry.API}</a>
            </div>
          );
        })}
    </div>
  );
}
