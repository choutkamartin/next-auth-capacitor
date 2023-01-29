import { useContext } from "react";
import Layout from "../components/layout";
import { SessionContext } from "../utils/session";

export default function MePage() {
  const session = useContext(SessionContext);

  return (
    <Layout>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </Layout>
  );
}
