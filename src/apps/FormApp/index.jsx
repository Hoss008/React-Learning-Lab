import React from "react";
import styles from "./form.module.css";
// import { useForm } from 'react-hook-form'

function FormApp() {
  return (
    <div className={styles.wrapper}>
      <form className={styles.formCard}>
        <h2 className={styles.title}>Create Account</h2>
        <p className={styles.subtitle}>Fill the form and submit your details</p>

        <label className={styles.label} htmlFor="name">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className={styles.input}
          placeholder="John Doe"
        />

        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={styles.input}
          placeholder="john@example.com"
        />

        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className={styles.input}
          placeholder="Enter secure password"
        />

        <label className={styles.label} htmlFor="role">
          Role
        </label>
        <select id="role" name="role" className={styles.select}>
          <option value="student">Student</option>
          <option value="developer">Developer</option>
          <option value="designer">Designer</option>
        </select>

        <label className={styles.checkboxRow} htmlFor="termsAccepted">
          <input id="termsAccepted" name="termsAccepted" type="checkbox" />
          <span>I agree to the terms and conditions</span>
        </label>

        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormApp;
