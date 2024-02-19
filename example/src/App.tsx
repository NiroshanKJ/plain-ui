import React from "react";
import {
  Button,
  Input,
  useTheme,
  Section,
  Column,
} from "@x-niroshan-x/react-plain-ui";
import { Row, UIVariations } from "@x-niroshan-x/react-plain-ui/dist/ui/index";

console.log("🚀 ~ UIVariations:", UIVariations);

function App() {
  const { toggleDarkMode, darkMode } = useTheme();

  return (
    <Row>
      <Column md='6'>
        <h1>Hi {darkMode ? "dark" : "light"}</h1>
        <Button
          variant={UIVariations.DANGER}
          label="Toggle Darkmode"
          onClick={toggleDarkMode}
        />
        <br />
        <br />
        <Section width="auto">
          <Section width="500px">
            <Input label="Email" />
            <Input type="password" label="Email" />
            <p>Here are some text</p>
          </Section>
        </Section>
      </Column>
    </Row>
  );
}

export default App;
