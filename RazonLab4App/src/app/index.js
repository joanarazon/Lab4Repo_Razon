import Login from "./Login";

// Set the layout options to hide the header on the Login page
Login.getLayout = () => ({
  headerShown: false, // Hides the header on the Login page
});

export default Login;
