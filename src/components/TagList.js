const TagList = ({tags}) => (
    <>
        <h2>Filter by</h2>
        <div className="main-container-aside-tags">
          <button className="active">All tags</button>
          {tags.map((tag, index) => (
            <button key={index}>{tag}</button>
          ))}
        </div>
    </>
);

export default TagList;
