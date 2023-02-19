import Image from "next/image";

export default function PreviewCard({
  handlePreviewCardClose,
  name,
  link,
  tags,
}: {
  handlePreviewCardClose: () => void;
  name: string;
  link: string;
  tags: string[];
}) {
  return (
    <div className="preview-card">
      <button onClick={handlePreviewCardClose}></button>
      <div>
        <Image
          width={298}
          height={212}
          src="/assets/images/card-portfolio.png"
          alt="banner"
        />
      </div>
      <div>
        <h2></h2>
      </div>
    </div>
  );
}
