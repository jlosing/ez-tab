function Fretboard({strings, content}) {
  if (!strings || !content) return <h1>cant finds strings or fretboard</h1>;

  return (
    <div>
      {strings.map((item, index) => (
        <p key={index}>
          {item.note}: {content[index]}
        </p>
      ))}
    </div>
  );
}

export default Fretboard;
