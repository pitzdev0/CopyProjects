import './index.css'
import Marquee from 'react-fast-marquee'

const SongTicker = ({ songTitle }) => {
	return (
		<div className='song-ticker'>
			<img src='/assets/songIcon.svg' alt='song' />

			<Marquee>
				<span>{songTitle}</span>
			</Marquee>
		</div>
	)
}

export default SongTicker
