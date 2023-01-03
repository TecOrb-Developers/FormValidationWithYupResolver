import { FC, Fragment, useState } from "react";
import { ImagePath } from "../imagePath";
import styles from "../../../../styles/auth.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/Constants/resolvers";

type LoginForm = {
  email: string;
  password: string;
};
const LoinPassword: FC<{}> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCaptcha, setCaptcha] = useState(false);
  const [showPass, SetShowPass] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (data: LoginForm) => {
    if (data && isCaptcha) {
      setIsSubmitting(true);


    }
  };



  return (
    <Fragment>
      <section className={styles.auth}>
        <div className={styles.authSec}>
          <div className={styles.contentBox}>
            <div className={styles.formSection}>
              <h3 className="pb-3">Log In</h3>
              {errorMsg && (
                <div className={styles.UnAuthorized}>
                  <h4>{errorMsg}</h4>
                </div>
              )}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={`form-group ${styles.fromGroup}`}>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email")}

                  />
                  <span className={styles.errorMsg}>
                    {errors.email?.message}
                  </span>
                </div>
                <div className={`form-group  ${styles.fromGroup}`}>
                  <label>Password</label>
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="Password"
                    {...register("password")}

                  />
                  <button
                    className={styles.showHide}
                    onClick={(e) => {
                      e.preventDefault();
                      SetShowPass(!showPass);
                    }}
                  >
                    {" "}
                    <img
                      src={showPass ? ImagePath.ShowPass : ImagePath.HidePass}
                      alt="password"
                    />
                  </button>
                  <span className={styles.errorMsg}>
                    {errors.password?.message}
                  </span>
                </div>
              
                <button
                  type="submit"
                  className={`btn ${styles.submitBtn}`}
                  disabled={isSubmitting}
                >
                  Login
                  </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default LoinPassword;
