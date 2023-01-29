import { useState, useEffect, useContext } from "react";
import Layout from "../components/layout";
import AccessDenied from "../components/access-denied";
import { SessionContext } from "../utils/session";
import appConfig from "../app.config";

export default function ProtectedPage() {
  const session = useContext(SessionContext);
  const [content, setContent] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${appConfig.apiHost}/api/examples/protected`);
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      }
    };
    fetchData();
  }, [session]);

  if (!session) {
    return (
      <Layout>
        <AccessDenied />
      </Layout>
    );
  }

  return (
    <Layout>
      <h1>Protected Page</h1>
      <p>
        <strong>{content ?? "\u00a0"}</strong>
      </p>
    </Layout>
  );
}
