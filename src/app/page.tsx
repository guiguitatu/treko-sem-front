import { redirect } from "next/navigation";

export default function Home() {
  // TODO: fazer uma landing page de vdd
  redirect('/modules/auth/login')
}
