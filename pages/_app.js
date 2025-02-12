import { ActiveHashContentProvider } from "@/context/ActiveHashContent";
import { MobileToggleProvider } from "@/context/MobileToggleContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <MobileToggleProvider>
      <ActiveHashContentProvider>
        <Component {...pageProps} />
      </ActiveHashContentProvider>
    </MobileToggleProvider>
  );
}
