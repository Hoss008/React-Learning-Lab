import { useActionState } from "react";
import { z } from "zod";
import styles from "./form.module.css";

// Zod schema: this is where we describe the rules for each field.
const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email"),
});

// The starting state for the form before the user submits anything.
const initialState = {
  success: false,
  message: "",
  values: {
    name: "",
    email: "",
  },
  errors: {},
};

// Action function: React calls this when the form is submitted.
async function submitForm(_prevState, formData) {
  // Read the values from the submitted form.
  const values = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
  };

  // Validate the form values with Zod.
  const result = formSchema.safeParse(values);

  // If validation fails, return the errors and keep the old values in the inputs.
  if (!result.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      values,
      errors: result.error.flatten().fieldErrors,
    };
  }

  // Small delay to simulate sending data to a server or API.
  await new Promise((resolve) => setTimeout(resolve, 500));

  // If validation succeeds, return a success message and clear the form values.
  return {
    success: true,
    message: `Thanks ${result.data.name}, your form was submitted.`,
    values: initialState.values,
    errors: {},
  };
}

export default function FormApp() {
  // useActionState connects the form to the action function
  // and gives us the current state, the form action, and loading status.
  const [state, formAction, isPending] = useActionState(
    submitForm,
    initialState
  );

  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        {/* Intro text for the demo */}
        <p className={styles.eyebrow}>React 19 + Zod</p>
        <h1 className={styles.title}>Simple Contact Form</h1>
        <p className={styles.subtitle}>
          This example uses <code>useActionState</code> to handle submission and
          Zod to validate the input.
        </p>

        {/* Show one message box for either success or validation feedback */}
        {state.message ? (
          <p
            className={
              state.success ? styles.successMessage : styles.errorMessage
            }
          >
            {state.message}
          </p>
        ) : null}

        {/* The form uses action={formAction} instead of onSubmit */}
        <form action={formAction} className={styles.form}>
          {/* Name field */}
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              defaultValue={state.values.name}
              disabled={isPending}
              className={state.errors.name ? styles.inputError : ""}
              placeholder="Enter your name"
            />
            {/* Show the first error message for the name field if it exists */}
            {state.errors.name ? (
              <p className={styles.fieldError}>{state.errors.name[0]}</p>
            ) : null}
          </div>

          {/* Email field */}
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={state.values.email}
              disabled={isPending}
              className={state.errors.email ? styles.inputError : ""}
              placeholder="Enter your email"
            />
            {/* Show the first error message for the email field if it exists */}
            {state.errors.email ? (
              <p className={styles.fieldError}>{state.errors.email[0]}</p>
            ) : null}
          </div>

          {/* Button text changes while the form is submitting */}
          <button
            type="submit"
            disabled={isPending}
            className={styles.submitButton}
          >
            {isPending ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}
