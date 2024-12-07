import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  const hello = 1;

  return (
    <div>
      <div>Hello from Anurag Ghosh!</div>
      <Button variant="journal">Button</Button>
    </div>
  );
}
