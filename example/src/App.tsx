import React from "react";
import {
  Column,
  Input,
  Row,
  PlainUIProvider,
  Button,
} from "@x-niroshan-x/react-plain-ui";

import DefaultPlainUITheme from "@x-niroshan-x/react-plain-ui/src/theme/defaultTheme.json";

function App() {
  return (
    <PlainUIProvider
      themes={{
        ...DefaultPlainUITheme,
        dark: {
          ...DefaultPlainUITheme.dark,
          row: { ...DefaultPlainUITheme.dark.row, padding: "0" },
          column: { ...DefaultPlainUITheme.dark.column, padding: "0" },
        },
      }}
    >
      <Row justifyContent="right" alignItems="middle" height="screenFull">
        <Column
          width="full"
          justifyContent="center"
          alignItems="middle"
          size={"1"}
        >
          <h1>Welome to the page</h1>
        </Column>
        <Column
          justifyContent="center"
          alignItems="middle"
          contentDirection="column"
          height="full"
        >
          <Input label="Username" />
          <Input label="Password" />
          <Button label="Login" variant="secondary" />
        </Column>
      </Row>
    </PlainUIProvider>
  );
}

export default App;
