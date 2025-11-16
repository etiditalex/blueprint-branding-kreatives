import PageEditor from "../[id]/page";

export default function NewPage() {
  return <PageEditor params={Promise.resolve({ id: "new" })} />;
}

