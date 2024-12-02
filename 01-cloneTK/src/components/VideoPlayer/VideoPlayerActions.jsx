import { Comments } from '../icons/Comments'
import { Heart } from '../icons/Heart'
import { Share } from '../icons/Share'

import './index.css'

export const VideoPlayerActions = ({
	likeCount,
	commentsCount,
	sharesCount,
	liked = false
}) => {
	const handleLike = () => {
		liked ? console.log('unlike') : console.log('like')
	}
	const handleShare = () => {
		console.log('share')
	}
	const handleComment = () => {
		console.log('comment')
	}

	return (
		<aside className='video-actions'>
			<button className='video-action' onClick={handleLike}>
				<Heart width='42' />
				<span title='likes'> {likeCount} </span>
			</button>
			<button className='video-action' onClick={handleShare}>
				<Comments width='42' />
				<span title='comments'> {commentsCount} </span>
			</button>
			<button className='video-action' onClick={handleComment}>
				<Share width='42' />
				<span title='shares'> {sharesCount} </span>
			</button>
		</aside>
	)
}
