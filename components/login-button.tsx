import { loginWithGithub } from "../utils/helper";
import { callback } from "../utils/session";
import styles from "./login-button.module.css";

export default function LoginButton() {
  return (
    <button
      className={styles.buttonPrimary}
      onClick={() => loginWithGithub(callback)}
    >
      Login with GitHub
    </button>
  );
}
