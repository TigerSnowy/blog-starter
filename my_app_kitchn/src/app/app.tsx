import { KitchnProvider } from "kitchn";
import type { AppProps } from "next/app";

const defaultTheme = {
    colors: {
      primary: "#0070f3",
      secondary: "#1c1c1c",
      background: "#f5f5f5",
      text: "#333",
    },
  };

// export default function App({ Component, pageProps }: AppProps) {
//     return (
//         <KitchnProvider theme={defaultTheme}>
//             <Component {...pageProps} />
//         </KitchnProvider>
//     );
// }