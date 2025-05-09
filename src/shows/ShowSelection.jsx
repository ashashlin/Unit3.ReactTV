import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({
  shows,
  setSelectedShow,
  setSelectedEpisode,
}) {
  return (
    <nav className="shows">
      {shows.map((show) => (
        <a
          key={show.name}
          className="show"
          onClick={() => {
            setSelectedShow(show);
            setSelectedEpisode(null);
          }}
        >
          {show.name}
        </a>
      ))}
    </nav>
  );
}
