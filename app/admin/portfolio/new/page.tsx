import PortfolioEditor from "../[id]/page";

export default function NewPortfolioItem() {
  return <PortfolioEditor params={Promise.resolve({ id: "new" })} />;
}

