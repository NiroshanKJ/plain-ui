import {
  ThemeProvider,
  Row,
  Column,
  Button,
  UIVariations,
  useTheme,
} from "@x-niroshan-x/react-plain-ui";

const Template: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  const onClickHandler = () => {
    toggleDarkMode();
  };
  const themeData = useTheme();
  console.log(themeData.darkMode);
  return (
    <>
      <Button
        textWhite={true}
        onClick={onClickHandler}
        variant={UIVariations.PRIMARY}
      >
        Now {darkMode ? "Dark" : "light"}
      </Button>
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Row>
        <Column>{<Template />}</Column>
      </Row>
    </ThemeProvider>
  );
}

export default App;
