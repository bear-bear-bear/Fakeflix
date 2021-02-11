/* modules */
import React from 'react';

/* css */
import './Detail.css';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;

    if (location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    const { location } = this.props;

    if (!!location.state) {
      const { title, year, summary, poster, genres } = location.state;

      return (
        //TODO: 트레일러 영상 추가
        <article className="detail">
          <img src={poster} alt={title} title={title}></img>
          <div className="detail__data">
            <h3 className="detail__title">{title}</h3>
            <h5 className="detail__year">{year}</h5>
            <ul className="detail__genres">
              {genres.map((genre, idx) => {
                return (
                  <li key={idx} className="detail__genre">
                    {genre}
                  </li>
                );
              })}
            </ul>
            <p className="detail__summary">{summary.slice(0, 180)}...</p>
          </div>
        </article>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
