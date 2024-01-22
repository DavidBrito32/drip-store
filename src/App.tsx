import { AuthProvider } from "./contexts/AuthContext";
import Router from "./routes/router";

const App = (): JSX.Element => {
  return (
    <>
    <AuthProvider>
      <Router />
    </AuthProvider>
    </>
  );
};

export default App;
