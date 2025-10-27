import "./Fretboard.css";

function Fretboard({strings, content}) {
  if (!(strings.length === content.length)) return <h1>mismatched strings and content</h1>;

  return (
    <div>
      {strings.map((item, index) => (
        <p key={index} id="fretboard">
          {item}: {content[index]}
        </p>
      ))}
    </div>
  );
}

export default Fretboard;
