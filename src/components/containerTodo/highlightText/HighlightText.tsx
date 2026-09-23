interface Props {
  text: string;
  query: string;
}

const HighlightText = ({ text, query }: Props) => {
  if (query.trim().length === 0) {
    return <>{text}</>;
  }

  const normalizedText = text.toLowerCase();
  const normalizedQuery = query.trim().toLowerCase();

  const index = normalizedText.indexOf(normalizedQuery);

  if (index === -1) {
    return <>{text}</>;
  }

  const before = text.slice(0, index);
  const match = text.slice(index, index + query.trim().length);
  const after = text.slice(index + query.trim().length);

  return (
    <>
      {before}
      <span className="search-highlight">{match}</span>
      {after}
    </>
  );
};

export default HighlightText;
