import LoginLayout from "./layouts/loginlayout";
import Login from "./login/page";
import Congrats from "./params/page";

export default function Home() {
  return (

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <LoginLayout />
      </main>
  );
}
