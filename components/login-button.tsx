import { useRouter } from "next/router";
import { loginWithGithub } from "../utils/helper";
import styles from "./login-button.module.css";

export default function LoginButton() {
  const router = useRouter();
  const callback = () => {
    router.reload();
  };

  return (
    <button
      className={styles.buttonPrimary}
      onClick={() => loginWithGithub(callback)}
    >
      Login with GitHub
    </button>
  );
}
