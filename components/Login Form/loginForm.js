import Link from "next/link";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Logo</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="phoneNumber" className={styles.label}>
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className={styles.input}
            placeholder="Enter your phone number"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            className={styles.input}
            placeholder="Enter your password"
          />
        </div>
        <Link href="/forget" className={styles.link}>
          Forgot Password?
        </Link>

        <div className={styles.buttonContainer}>
          {/* <button className={styles.button}>Login</button> */}
          <Link href="/" className={styles.button}>
            Login
          </Link>
        </div>
      </form>
      <div className={styles.signup}>
        Don't have an account?{" "}
        <Link href="/signup" className={styles.signupLink}>
          Sign up
        </Link>
      </div>
    </div>
  );
}
