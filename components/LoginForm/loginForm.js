"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      identifier: email,
      password: password,
    };
    try {
      const response = await fetch("/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        // Handle successful login here, e.g., redirect to the user dashboard
        console.log("Login successful");
      } else {
        console.error("Login failed.");
        // Handle authentication error here, e.g., show an error message
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle other errors, e.g., network issues
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>Logo</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
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

          <button type="submit" className={styles.button}>
            Login
          </button>
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
