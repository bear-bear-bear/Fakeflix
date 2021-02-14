/* modules */
import React from 'react';
import axios from 'axios';

/* components */
import Info from '../components/Info';
import Trailer from '../components/Trailer';
import Loading from '../components/Loading';

/* css */
import './Detail.css';

class Detail extends React.Component {
  state = {
    info: null,
    isLoading: true,
  };

  getMovieInfos = async (id) => {
    const {
      data: {
        data: { movie: info },
      },
    } = await axios.get(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`
    );

    this.setState({
      info: info,
      isLoading: false,
    });
  };

  componentDidMount() {
    const { location, history } = this.props;

    if (location.state === undefined) {
      history.push('/');
    } else {
      const { id } = location.state;

      this.getMovieInfos(id);
    }
  }

  render() {
    const { location } = this.props;

    if (!!location.state) {
      const { isLoading, info } = this.state;

      return isLoading ? (
        <section className="detail">
          <Loading />
        </section>
      ) : (
        <section className="detail">
          <Info
            title={info.title_english}
            year={info.year}
            genres={info.genres}
            desc={info.description_full}
            coverImgSRC={info.large_cover_image}
            rating={info.rating}
            runtime={info.runtime}
            casts={info.cast}
          />
          <Trailer title={info.title_english} trailerCode={info.yt_trailer_code} />
        </section>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
