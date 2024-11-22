import { Comments } from '../icons/Comments'
import { Heart } from '../icons/Heart'
import { Share } from '../icons/Share'

import './index.css'

export const VideoPlayerActions = ({
	likeCount = 400,
	commentsCount = 250,
	sharesCount = 3504,
	liked = false
}) => {
	return (
		<aside className='video-actions'>
			<div className='video-action'>
				<Heart />
				<strong title='likes'> {likeCount} </strong>
			</div>
			<div className='video-action'>
				<Comments />
				<strong title='comments'> {commentsCount} </strong>
			</div>
			<div className='video-action'>
				<Share />
				<strong title='shares'> {sharesCount} </strong>
			</div>
		</aside>
	)
}
