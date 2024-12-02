import { redirect } from "next/navigation";
import ReduxProvider from "./store/provider";

export default function Home() {
  redirect('/todo/today')
}
