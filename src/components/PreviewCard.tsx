export default function PreviewCard({
  handlePreviewCardClose,
}: {
  handlePreviewCardClose: () => void;
}) {
  return (
    <div className="preview-card">
      <button onClick={handlePreviewCardClose}></button>
      <div>hello</div>
    </div>
  );
}
