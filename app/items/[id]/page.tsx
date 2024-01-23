import Link from "next/link";

export async function generateMetadata(props: { params: { id: string } }) {
  // NOTE: Any async function in generateMetadata will cause the infinite loading issue
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { title: `Item ${props.params.id}` };
}

export default async function Home(props: { params: { id: string } }) {
  const nextId = Number(props.params.id) + 1;
  return (
    <div>
      <h1>Item {props.params.id}</h1>
      <Link href={`/items/${nextId}`}>Go to Item {nextId}</Link>
    </div>
  );
}
