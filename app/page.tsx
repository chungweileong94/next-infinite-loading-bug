import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <Link href="/items/1" className="underline underline-offset-2">
      Go to Item 1
    </Link>
  );
}
