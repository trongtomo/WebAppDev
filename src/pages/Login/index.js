import Image from "next/image";
import LoginForm from "../../../components/LoginForm/loginForm"; // Make sure the import path is correct
import styles from "./LoginPage.module.css"; // Import styles from loginPage.module.css

const LoginPage = () => {
  return (
    <div className={styles.container}>
      {/* Left column with background image */}
      <div className="image-container">
        <Image alt="/logo" width={500} height={500} src="/logo.png" />
      </div>

      {/* Right column with login form */}
      <LoginForm />
    </div>
  );
};

export default LoginPage;
