import { useActionState } from "react";
import { z } from "zod";
import styles from "./form.module.css";

const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.email("Please enter a valid email"),
});

const initialState = {
  success: false,
  message: "",
  values: {
    name: "",
    email: "",
  },
  errors: {},
};

async function submitForm(_prevState, formData) {
  const values = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
  };

  const result = formSchema.safeParse(values);

  if (!result.success) {
    return {
      success: false,
      message: "Please fix the errors below.",
      values,
      errors: result.error.flatten().fieldErrors,
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    success: true,
    message: `Thanks ${result.data.name}, your form was submitted.`,
    values: initialState.values,
    errors: {},
  };
}

export default function FormApp() {
  const [state, formAction, isPending] = useActionState(
    submitForm,
    initialState
  );

  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <p className={styles.eyebrow}>React 19 + Zod</p>
        <h1 className={styles.title}>Simple Contact Form</h1>
        <p className={styles.subtitle}>
          This example uses <code>useActionState</code> to handle submission and
          Zod to validate the input.
        </p>

        {state.message ? (
          <p
            className={
              state.success ? styles.successMessage : styles.errorMessage
            }
          >
            {state.message}
          </p>
        ) : null}

        <form action={formAction} className={styles.form}>
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
            {state.errors.name ? (
              <p className={styles.fieldError}>{state.errors.name[0]}</p>
            ) : null}
          </div>

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
            {state.errors.email ? (
              <p className={styles.fieldError}>{state.errors.email[0]}</p>
            ) : null}
          </div>

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
