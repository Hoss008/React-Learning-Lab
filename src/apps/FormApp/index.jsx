import React, { useState } from "react";
import styles from "./form.module.css";

/* ─── Sub-components ─────────────────────────── */

function StepIndicator({ currentStep }) {
  const steps = [
    { number: 1, label: "Personal" },
    { number: 2, label: "Account" },
    { number: 3, label: "Confirm" },
  ];

  return (
    <div className={styles.stepIndicator}>
      {steps.map((s, i) => (
        <React.Fragment key={s.number}>
          <div className={styles.stepItem}>
            <div
              className={`${styles.stepCircle} ${
                currentStep === s.number
                  ? styles.stepActive
                  : currentStep > s.number
                    ? styles.stepDone
                    : ""
              }`}
            >
              {currentStep > s.number ? "✓" : s.number}
            </div>
            <span className={styles.stepLabel}>{s.label}</span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`${styles.stepLine} ${
                currentStep > s.number ? styles.stepLineDone : ""
              }`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function StepOne({ formData, onChange, errors, onNext }) {
  return (
    <div className={styles.stepContent}>
      <h2 className={styles.title}>Personal Info</h2>
      <p className={styles.subtitle}>Tell us a bit about yourself</p>

      <label className={styles.label} htmlFor="firstName">
        First name
      </label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        className={styles.input}
        placeholder="John"
        value={formData.firstName}
        onChange={onChange}
      />
      {errors.firstName && (
        <span className={styles.error}>{errors.firstName}</span>
      )}

      <label className={styles.label} htmlFor="lastName">
        Last name
      </label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        className={styles.input}
        placeholder="Doe"
        value={formData.lastName}
        onChange={onChange}
      />
      {errors.lastName && (
        <span className={styles.error}>{errors.lastName}</span>
      )}

      <label className={styles.label} htmlFor="email">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        className={styles.input}
        placeholder="john@example.com"
        value={formData.email}
        onChange={onChange}
      />
      {errors.email && <span className={styles.error}>{errors.email}</span>}

      <div className={styles.actions}>
        <button type="button" className={styles.primaryBtn} onClick={onNext}>
          Next →
        </button>
      </div>
    </div>
  );
}

function StepTwo({ formData, onChange, errors, onNext, onBack }) {
  return (
    <div className={styles.stepContent}>
      <h2 className={styles.title}>Account Setup</h2>
      <p className={styles.subtitle}>Choose your credentials</p>

      <label className={styles.label} htmlFor="username">
        Username
      </label>
      <input
        id="username"
        name="username"
        type="text"
        className={styles.input}
        placeholder="johndoe"
        value={formData.username}
        onChange={onChange}
      />
      {errors.username && (
        <span className={styles.error}>{errors.username}</span>
      )}

      <label className={styles.label} htmlFor="role">
        Role
      </label>
      <select
        id="role"
        name="role"
        className={styles.select}
        value={formData.role}
        onChange={onChange}
      >
        <option value="student">Student</option>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
      </select>

      <label className={styles.label} htmlFor="password">
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        className={styles.input}
        placeholder="Enter secure password"
        value={formData.password}
        onChange={onChange}
      />
      {errors.password && (
        <span className={styles.error}>{errors.password}</span>
      )}

      <label className={styles.label} htmlFor="confirmPassword">
        Confirm password
      </label>
      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        className={styles.input}
        placeholder="Repeat your password"
        value={formData.confirmPassword}
        onChange={onChange}
      />
      {errors.confirmPassword && (
        <span className={styles.error}>{errors.confirmPassword}</span>
      )}

      <div className={styles.actions}>
        <button type="button" className={styles.ghostBtn} onClick={onBack}>
          ← Back
        </button>
        <button type="button" className={styles.primaryBtn} onClick={onNext}>
          Next →
        </button>
      </div>
    </div>
  );
}

function StepThree({ formData, onBack, onSubmit }) {
  return (
    <div className={styles.stepContent}>
      <h2 className={styles.title}>Confirm Details</h2>
      <p className={styles.subtitle}>Review before submitting</p>

      <div className={styles.summaryCard}>
        <div className={styles.summaryRow}>
          <span className={styles.summaryKey}>Name</span>
          <span className={styles.summaryVal}>
            {formData.firstName} {formData.lastName}
          </span>
        </div>
        <div className={styles.summaryRow}>
          <span className={styles.summaryKey}>Email</span>
          <span className={styles.summaryVal}>{formData.email}</span>
        </div>
        <div className={styles.summaryRow}>
          <span className={styles.summaryKey}>Username</span>
          <span className={styles.summaryVal}>{formData.username}</span>
        </div>
        <div className={styles.summaryRow}>
          <span className={styles.summaryKey}>Role</span>
          <span className={styles.summaryVal}>{formData.role}</span>
        </div>
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.ghostBtn} onClick={onBack}>
          ← Back
        </button>
        <button type="button" className={styles.primaryBtn} onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}

function SuccessScreen({ formData }) {
  return (
    <div className={styles.stepContent}>
      <div className={styles.successIcon}>✓</div>
      <h2 className={styles.title}>You're all set!</h2>
      <p className={styles.subtitle}>
        Welcome, <strong>{formData.firstName}</strong>. Your account has been
        created.
      </p>

      <div className={styles.summaryCard}>
        <div className={styles.summaryRow}>
          <span className={styles.summaryKey}>Email</span>
          <span className={styles.summaryVal}>{formData.email}</span>
        </div>
        <div className={styles.summaryRow}>
          <span className={styles.summaryKey}>Username</span>
          <span className={styles.summaryVal}>{formData.username}</span>
        </div>
        <div className={styles.summaryRow}>
          <span className={styles.summaryKey}>Role</span>
          <span className={styles.summaryVal}>{formData.role}</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Parent shell ───────────────────────────── */

function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    role: "student",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  // 🔧 YOUR TURN: implement these
  const handleChange = (e) => {};
  const handleNext = () => {};
  const handleBack = () => {};
  const handleSubmit = () => {};

  return (
    <div className={styles.wrapper}>
      <form className={styles.formCard} onSubmit={(e) => e.preventDefault()}>
        {step !== "done" && <StepIndicator currentStep={step} />}

        {step === 1 && (
          <StepOne
            formData={formData}
            onChange={handleChange}
            errors={errors}
            onNext={handleNext}
          />
        )}
        {step === 2 && (
          <StepTwo
            formData={formData}
            onChange={handleChange}
            errors={errors}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        {step === 3 && (
          <StepThree
            formData={formData}
            onBack={handleBack}
            onSubmit={handleSubmit}
          />
        )}
        {step === "done" && <SuccessScreen formData={formData} />}
      </form>
    </div>
  );
}

export default RegistrationForm;
