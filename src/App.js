import Router from './routes';
import React, { MoralisProvider } from "react-moralis"

const serverUrl = "https://erhkauknroov.usemoralis.com:2053/server";
const appId = "JUZfFTdC5TbBBLDnJEDvguEEzA2fncBSWR84sxUW";
const apiKey ="0ufjitBMYc54xW98jj0GhyCAGjweKzuFomvV4Sm8V5PNLWcK5EX7SeQqS8cNyzrH"

function App() {
  return (
    <MoralisProvider  serverUrl={serverUrl} appId={appId}>
      <Router />
    </MoralisProvider>
  );
}
export default App;
