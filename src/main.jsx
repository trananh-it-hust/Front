import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyles from "./components/GlobalStyles/index.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles>
      <AuthProvider>
        <App />
      </AuthProvider>
    </GlobalStyles>
  </React.StrictMode>
);
