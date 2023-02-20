import { ThemeProvider } from "styled-components";
import { Container, GlobalStyles } from "./styles/global";
import { theme } from "./config/theme";
import { Header } from "./components/header";
import { ListItems } from "./components/list-items";

export const App = () => {
  return (
    <ThemeProvider theme={theme.light}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <ListItems />
        </Container>
      </>
    </ThemeProvider>
  )
}
