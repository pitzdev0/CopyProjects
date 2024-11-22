import VideoPlayer from '../VideoPlayer'
import './index.css'

const FEED_VIDEOS = [
	{
		id: 1,
		author: '@tiktok',
		description: 'Earth',
		likes: 100,
		shares: 100,
		comments: 100,
		songTitle: '',
		albumCover: '',
		src: 'https://cdn.pixabay.com/video/2024/02/21/201404-915375388_large.mp4'
	},
	{
		id: 2,
		author: '@tiktok',
		description: 'River',
		likes: 100,
		shares: 100,
		comments: 100,
		songTitle: '',
		albumCover: '',
		src: 'https://cdn.pixabay.com/video/2024/08/30/228847_large.mp4'
	},
	{
		id: 3,
		author: '@tiktok',
		description: 'Waterfall',
		likes: 100,
		shares: 100,
		comments: 100,
		songTitle: '',
		albumCover: '',
		src: 'https://cdn.pixabay.com/video/2024/03/29/206139_large.mp4'
	},
	{
		id: 4,
		author: '@tiktok',
		description: 'Space-moon',
		likes: 100,
		shares: 100,
		comments: 100,
		songTitle: '',
		albumCover: '',
		src: 'https://cdn.pixabay.com/video/2024/05/14/211986_large.mp4'
	},
	{
		id: 5,
		author: '@tiktok',
		description: 'Bike Race',
		likes: 100,
		shares: 100,
		comments: 100,
		songTitle: '',
		albumCover: '',
		src: 'https://cdn.pixabay.com/video/2024/05/26/213799_large.mp4'
	},
	{
		id: 6,
		author: '@tiktok',
		description: 'boat race',
		likes: 100,
		shares: 100,
		comments: 100,
		songTitle: '',
		albumCover: '',
		src: 'https://cdn.pixabay.com/video/2024/06/08/215816_large.mp4'
	},
	{
		id: 7,
		author: '@tiktok',
		description: 'Highway',
		likes: 100,
		shares: 100,
		comments: 100,
		songTitle: '',
		albumCover: '',
		src: 'https://cdn.pixabay.com/video/2023/02/05/149466-797189011_large.mp4'
	}
]

const FeedVideos = () => {
	return (
		<div className='feed-container'>
			{FEED_VIDEOS.map((video) => (
				<VideoPlayer key={video.id} {...video} />
			))}
		</div>
	)
}

export default FeedVideos
