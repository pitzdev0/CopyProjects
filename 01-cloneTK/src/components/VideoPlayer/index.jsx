import { useRef, useState } from 'react'
import './index.css'
import { VideoPlayerActions } from './VideoPlayerActions'
import VideoDescription from './VideoDescription'

// const videoSrc =
// 	'https://res.cloudinary.com/dcnim91yg/video/upload/v1729748479/Presentacio%CC%81n_de_todos_compress_b2qxfw.mp4'

function VideoPlayer(video) {
	const { src } = video
	const videoElement = useRef(null)

	const [isPlaying, setIsPlaying] = useState(false)

	const handleVideoClick = () => {
		const currentVideo = videoElement.current
		isPlaying ? currentVideo.pause() : currentVideo.play()
		setIsPlaying(!isPlaying)
	}

	return (
		<div className='video-container' onClick={handleVideoClick}>
			<video src={src} controls={false} ref={videoElement} loop></video>
			<button className={`playerbtn ${isPlaying ? 'hide' : ''}`} />
			<VideoPlayerActions
				likeCount={video.likes}
				commentsCount={video.comments}
				sharesCount={video.shares}
			/>
			<VideoDescription
				author={video.author}
				description={video.description}
				albumCover={video.albumCover}
				songTitle={video.songTitle}
			/>
		</div>
	)
}

export default VideoPlayer
