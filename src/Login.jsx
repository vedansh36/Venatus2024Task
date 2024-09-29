import styles from "./Login.module.css"
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <>
          <div className={styles.loginContainer}>
            <h1 className={styles.formHeading}>Log in</h1>
            <p className={styles.formHeadingP}>
              Need a Mailchimp account? <a href="#">Create an account</a>
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className={styles.formLabel}>Username or Email</label>
              <input className={styles.formInput}
                type="text"
                name="username"
                {...register("username", {
                  required: true,
                  minLength: {
                    value: 3,
                    message: "Username should contain atleat 3 characters",
                  },
                })}
              />
              {errors.username && <p className={styles.error}>{errors.username.message}</p>}
              <label className={styles.formLabel}>Password</label>
              <input className={styles.formInput}
                type="password"
                name="password"
                {...register("password", {
                  required: true,
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/,
                    message:
                      "Password must contain a minimum of eight characters, at least one uppercase letter, one lowercase letter, one number, and one special character.",
                  },
                })}
              />
              {errors.password && <p className={styles.error}>{errors.password.message}</p>}
            <div className={styles.formCheckbox}>
              <input className={styles.formCheckboxInput}
                type="checkbox"
                name="checkbox"
                {...register("checkbox")}
              />
              <label className={styles.formLabel}>Keep me logged in</label>
            </div>
            <button className={styles.formButton}>Log in</button>
            </form>
          </div>

    </>
  );
}
