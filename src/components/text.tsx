import "./styles/text.scss";

function Text(props: { header: string; description: string }) {
  return (
    <div className="text-box">
      <h1 className="header">{props.header}</h1>
      <p className="description">{props.description}</p>
    </div>
  );
}

export default Text;
