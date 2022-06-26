const TagList = ({setTag, tags, selectedTags}) => (
    <>
        <h2>Filter by </h2>
        <div className="main-container-aside-tags">
          <button
            onClick={() =>  setTag("all")}
            className={selectedTags.indexOf("all") !== -1 ? "active" : ""}>All tags</button>
          {tags.map((tag, index) => (
            <button
              onClick={() => setTag(tag)}
              className={selectedTags.indexOf(tag) !== -1 ? "active" : ""} key={index} >{tag}</button>
          ))}
        </div>
    </>
);

export default TagList;
