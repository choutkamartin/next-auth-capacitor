import Layout from "../components/layout";
import LoginButton from "../components/login-button";

export default function IndexPage() {
  return (
    <Layout>
      <h1>NextAuth.js Example</h1>
      <p>
        This is an example site to demonstrate how to use{" "}
        <a href="https://next-auth.js.org">NextAuth.js</a> for authentication.
      </p>
      <LoginButton />
    </Layout>
  );
}
