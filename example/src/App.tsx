import React from "react";
import { Button, PlainUIProvider, usePlainUI } from "react-plain-ui";

const ButtonWrapper: React.FC = () => {
  const { dark, setDark } = usePlainUI();
  return (
    <Button onClick={() => setDark(!dark)}>
      Test {dark ? "dark" : "no dark"}
    </Button>
  );
};

function App() {
  return (
    <main className="App">
      <PlainUIProvider>
        <ButtonWrapper />
      </PlainUIProvider>
    </main>
  );
}

export default App;
