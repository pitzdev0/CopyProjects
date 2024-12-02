import AlbumDisk from './AlbumDisk'

import './index.css'
import SongTicker from './SongTicker'

const VideoDescription = ({ author, description, albumCover, songTitle }) => {
	return (
		<footer className='video-description'>
			<div>
				<strong> {author} </strong>
				<p>{description}</p>
			</div>
			<div className='song-ticker-container'>
				<SongTicker songTitle={songTitle} />
				<AlbumDisk albumCover={albumCover} />
			</div>
		</footer>
	)
}

export default VideoDescription
