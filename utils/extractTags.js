function extractTags(data) {
  const tags = data.reduce((acc, item) => {
    item.tags.forEach((tag) => {
      if (!acc.map((a) => a.toLowerCase()).includes(tag.toLowerCase())) {
        acc.push(tag.toLowerCase());
      }
    });
    return acc;
  }, []);

  return tags;
}

export default extractTags;
