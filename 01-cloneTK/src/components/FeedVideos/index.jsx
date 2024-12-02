import VideoPlayer from '../VideoPlayer'
import './index.css'

const FEED_VIDEOS = [
	{
		id: 1,
		author: '@tiktok',
		description: 'Earth',
		likes: 200,
		shares: 200,
		comments: 200,
		songTitle: 'lorem ipsum 1',
		albumCover:
			'https://www.indieground.net/images/blog/2024/indieblog-best-album-covers-2010s-07.jpg',
		src: 'https://cdn.pixabay.com/video/2024/02/21/201404-915375388_large.mp4'
	},
	{
		id: 2,
		author: '@tiktok',
		description: 'River',
		likes: 100,
		shares: 100,
		comments: 100,
		songTitle: 'lorem ipsum 2',
		albumCover:
			'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg',
		src: 'https://cdn.pixabay.com/video/2024/08/30/228847_large.mp4'
	},
	{
		id: 3,
		author: '@tiktok',
		description: 'Waterfall',
		likes: 300,
		shares: 454,
		comments: 651,
		songTitle: 'lorem ipsum 3',
		albumCover:
			'https://www.billboard.com/wp-content/uploads/media/tyler-the-creator-igor-album-art-2019-billboard-embed.jpg',
		src: 'https://cdn.pixabay.com/video/2024/03/29/206139_large.mp4'
	},
	{
		id: 4,
		author: '@tiktok',
		description: 'Space-moon',
		likes: 400,
		shares: 400,
		comments: 100,
		songTitle: 'lorem ipsum 4',
		albumCover:
			'https://www.billboard.com/wp-content/uploads/2023/08/Best-Album-Covers-of-All-Time-billboard-1548.jpg',
		src: 'https://cdn.pixabay.com/video/2024/05/14/211986_large.mp4'
	},
	{
		id: 5,
		author: '@tiktok',
		description: 'Bike Race',
		likes: 100,
		shares: 100,
		comments: 100,
		songTitle: 'lorem ipsum 5',
		albumCover:
			'https://miro.medium.com/v2/resize:fit:681/1*EBOL4lka5QjcYoxj6AHp-g.png',
		src: 'https://cdn.pixabay.com/video/2024/05/26/213799_large.mp4'
	},
	{
		id: 6,
		author: '@tiktok',
		description: 'boat race',
		likes: 848,
		shares: 848,
		comments: 848,
		songTitle: 'lorem ipsum 6',
		albumCover:
			'https://indieground.net/wp-content/uploads/2013/01/indieblog-best-album-covers-70s-08-1024x1024.jpg',
		src: 'https://cdn.pixabay.com/video/2024/06/08/215816_large.mp4'
	},
	{
		id: 7,
		author: '@tiktok',
		description: 'Highway',
		likes: 500,
		shares: 500,
		comments: 500,
		songTitle: 'lorem ipsum 7',
		albumCover:
			'https://www.udiscovermusic.com/wp-content/uploads/2022/03/janelle-monae-dirty-computer.jpg',
		src: 'https://cdn.pixabay.com/video/2023/02/05/149466-797189011_large.mp4'
	},
	{
		id: 8,
		author: '@tiktok',
		description: 'DogOwner',
		likes: 617,
		shares: 617,
		comments: 617,
		songTitle: 'lorem ipsum 18',
		albumCover:
			'https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/114/posts/34296/final_image/Final-image.jpg',
		src: 'https://videos.pexels.com/video-files/6715882/6715882-uhd_1440_2560_25fps.mp4'
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
