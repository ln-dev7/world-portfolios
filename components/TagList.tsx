const TagList = ({
  filteredData,
  setTag,
  tags,
  selectedTags,
}: {
  filteredData: any;
  setTag: (tag: string) => void;
  tags: string[];
  selectedTags: string[];
}) => (
  <>
    <h2>Filter by ({filteredData.length}) </h2>
    <div className="main-container-aside-tags">
      <button
        onClick={() => setTag("all")}
        className={selectedTags.indexOf("all") !== -1 ? "active" : ""}
      >
        All tags
      </button>
      {tags.map((tag, index) => (
        <button
          onClick={() => setTag(tag)}
          className={selectedTags.indexOf(tag) !== -1 ? "active" : ""}
          key={index}
        >
          {tag}
        </button>
      ))}
    </div>
  </>
);

export default TagList;
