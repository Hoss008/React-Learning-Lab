"use client";

import { useActionState } from "react";
import { z } from "zod";
import styles from "./form.module.css";

// Step 1: Define the validation schema with Zod
const formSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be less than 20 characters"),
  email: z.string().email("Please enter a valid email address"),
});

// Step 2: Create the server action (simulating server validation)
async function submitForm(prevState, formData) {
  // Get form data
  const username = formData.get("username");
  const email = formData.get("email");

  try {
    // Validate the data using Zod schema
    const validatedData = formSchema.parse({
      username,
      email,
    });

    // Simulate a small delay (like an API call)
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Return success state
    return {
      success: true,
      message: `Welcome ${validatedData.username}! 🎉`,
      data: validatedData,
      errors: {},
    };
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      const fieldErrors = {};
      error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });

      return {
        success: false,
        message: "Please fix the errors below",
        errors: fieldErrors,
      };
    }

    // Handle unexpected errors
    return {
      success: false,
      message: "An unexpected error occurred",
      errors: {},
    };
  }
}

// Step 3: Create the form component
export default function FormApp() {
  // useActionState manages form state, submission, and errors
  const [state, formAction, isPending] = useActionState(submitForm, {
    success: false,
    message: "",
    errors: {},
    data: null,
  });

  return (
    <div className={styles.container}>
      <h1>Simple Form with useActionState & Zod</h1>

      {/* Success message */}
      {state.success && (
        <div className={styles.successMessage}>
          ✅ {state.message}
          <p>Your email: {state.data?.email}</p>
        </div>
      )}

      {/* Error/info message */}
      {!state.success && state.message && (
        <div className={styles.infoMessage}>{state.message}</div>
      )}

      {/* Form */}
      <form action={formAction} className={styles.form}>
        {/* Username field */}
        <div className={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            defaultValue=""
            disabled={isPending}
            className={state.errors.username ? styles.inputError : ""}
          />
          {state.errors.username && (
            <span className={styles.errorText}>{state.errors.username}</span>
          )}
        </div>

        {/* Email field */}
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue=""
            disabled={isPending}
            className={state.errors.email ? styles.inputError : ""}
          />
          {state.errors.email && (
            <span className={styles.errorText}>{state.errors.email}</span>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isPending}
          className={styles.submitButton}
        >
          {isPending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
