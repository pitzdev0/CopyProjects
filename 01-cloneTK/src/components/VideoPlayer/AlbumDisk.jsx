import './index.css'

const AlbumDisk = ({ albumCover }) => {
	return (
		<div className='album-disk'>
			<img src={albumCover} alt='cover' />
		</div>
	)
}

export default AlbumDisk
