import React from "react";
import {
  Column,
  Input,
  Row,
  PlainUIProvider,
  DefaultTheme,
} from "@x-niroshan-x/react-plain-ui";

function App() {
  return (
    <PlainUIProvider
      themes={{
        ...DefaultTheme,
        dark: {
          ...DefaultTheme.dark,
          row: { ...DefaultTheme.dark.row, padding: "0" },
          column: { ...DefaultTheme.dark.column, padding: "0" },
        },
      }}
    >
      <Row justifyContent="right" alignItems="middle" height="screenFull">
        <Column>
          <h1>Welome to the page</h1>
        </Column>
        <Column
          justifyContent="center"
          alignItems="middle"
          contentDirection="column"
          height="full"
          width="quater"
          customCss={{ padding: "2rem" }}
        >
          <Input label="Username" />
          <Input label="Password" />
        </Column>
      </Row>
    </PlainUIProvider>
  );
}

export default App;
