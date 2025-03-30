import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tartarus Insight" },
    { 
      name: "description", 
      content: "Trapped in the abyss of business struggles? Harness the Oracle's wisdom to ascend from struggle to success." 
    },
  ];
}

export default function Home() {
  return <Welcome />;
}
