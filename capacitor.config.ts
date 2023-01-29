import { CapacitorConfig } from "@capacitor/cli";
import appConfig from "./app.config";

const config: CapacitorConfig = {
  appId: "com.nextauthcapacitor.app",
  appName: "Next Auth Capacitor",
  webDir: "out",
  bundledWebRuntime: false,
  server: {
    hostname: `mob.next-auth-capacitor.vercel.app`, // We need to change hostname to subdomain of our domain the API is hosted on
    androidScheme: "https", // HTTPS should be set preferably
  },
};

export default config;
