import { ConnectionStatus, Network } from "@capacitor/network";
import { useEffect, useState } from "react";

/**
 * An example how to show a message to the end user that the device is disconnected from the network
 */
export default function NetworkStatus() {
  const [networkStatus, setNetworkStatus] = useState<ConnectionStatus>();

  Network.addListener("networkStatusChange", (status) => {
    setNetworkStatus(status);
  });

  useEffect(() => {
    const fetchStatus = async () => {
      return await Network.getStatus();
    };

    fetchStatus().then((status) => {
      setNetworkStatus(status);
    });
  }, []);

  if (!networkStatus?.connected) {
    return (
      <>
        <h1>Disconnected</h1>
        <p>Please connect to network to be able to sign in</p>
      </>
    );
  } else {
    return null;
  }
}
