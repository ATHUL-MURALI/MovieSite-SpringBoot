import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Hero = ({ movies }) => {
    return (
        <div className='movie-carousel-container'>
            <Carousel>
                {
                    movies?.map((movie) => {
                        console.log("Movie object:", movie);
                        return (
                            <Paper>
                                <div className='movie-card-container'>
                                    <div className='movie-card' style={{ "--img": `url(${movie.backdrop || movie.poster || ''})` }}>
                                        <div className='movie-details'>
                                            <div className='movie-poster'>
                                                <img src={movie.poster} alt='' />
                                            </div>
                                            <div className='movie-title'>
                                                <h4>{movie.title}</h4>
                                            </div>
                                            <div className='movie-button-container'>
                                                <Link to={`/Trailer/${movie.trailerLink.split("v=")[1]}`}>
                                                <div className='play-button-icon-container'>
                                                    <FontAwesomeIcon className='play-button-icon'
                                                        icon={faCirclePlay}
                                                    />
                                                </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Hero















