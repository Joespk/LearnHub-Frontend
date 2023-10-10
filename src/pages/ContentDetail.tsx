import { useParams } from 'react-router-dom'
import useContent from '../hook/useContent'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import { useAuth } from '../provider/AuthProvider'
import classes from './ContentDetail.module.css'

const ContentDetail = () => {
  const { id } = useParams()
  const { content, isLoading, error } = useContent(id || '1')
  const { isLoggedIn, username } = useAuth()

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <p>{error}</p>

  return (
    <div>
      {content && (
        <>
          <h1>{content.videoTitle}</h1>
          <p>{content.creatorName}</p>
          <ReactPlayer url={content.videoUrl} />
          <div>
            <p>{content.comment}</p>
            <div>
              <p>{content.rating}</p>
              <p>{content.postedBy.username}</p>
              <p>{content.updatedAt}</p>
              {username === content.postedBy.username ? (
                <>
                  <Link to={`/edit/${content.id}`} className={classes.contentdetailLogin}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="104" height="103" viewBox="0 0 104 103" fill="none">
                      <path
                        d="M76.394 2.2302C77.4581 1.1664 78.9012 0.568787 80.4058 0.568787C81.9105 0.568787 83.3536 1.1664 84.4177 2.2302L101.441 19.2537C102.505 20.3178 103.103 21.7609 103.103 23.2655C103.103 24.7702 102.505 26.2133 101.441 27.2774L50.3708 78.3478C49.3068 79.412 47.8637 80.0101 46.3589 80.0104H29.3354C27.8305 80.0104 26.3871 79.4126 25.323 78.3484C24.2588 77.2842 23.661 75.8409 23.661 74.3359V57.3124C23.6613 55.8076 24.2593 54.3645 25.3236 53.3006L76.394 2.2302ZM35.0099 59.6617V68.6614H44.0097L89.4056 23.2655L80.4058 14.2658L35.0099 59.6617ZM0.963005 23.2655C0.963005 20.2556 2.1587 17.3689 4.28704 15.2406C6.41539 13.1122 9.30204 11.9165 12.312 11.9165H40.6844C42.1894 11.9165 43.6327 12.5144 44.6969 13.5786C45.7611 14.6427 46.3589 16.0861 46.3589 17.591C46.3589 19.096 45.7611 20.5393 44.6969 21.6035C43.6327 22.6677 42.1894 23.2655 40.6844 23.2655H12.312V91.3594H80.4058V62.9869C80.4058 61.482 81.0037 60.0386 82.0678 58.9745C83.132 57.9103 84.5753 57.3124 86.0803 57.3124C87.5853 57.3124 89.0286 57.9103 90.0928 58.9745C91.157 60.0386 91.7548 61.482 91.7548 62.9869V91.3594C91.7548 94.3693 90.5591 97.256 88.4308 99.3843C86.3024 101.513 83.4158 102.708 80.4058 102.708H12.312C9.30204 102.708 6.41539 101.513 4.28704 99.3843C2.1587 97.256 0.963005 94.3693 0.963005 91.3594V23.2655Z"
                        fill="#0D0D0D"
                      />
                    </svg>
                    Edit
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/edit" className={classes.contentdetailLogout}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="104" height="103" viewBox="0 0 104 103" fill="none">
                      <path
                        d="M76.394 2.2302C77.4581 1.1664 78.9012 0.568787 80.4058 0.568787C81.9105 0.568787 83.3536 1.1664 84.4177 2.2302L101.441 19.2537C102.505 20.3178 103.103 21.7609 103.103 23.2655C103.103 24.7702 102.505 26.2133 101.441 27.2774L50.3708 78.3478C49.3068 79.412 47.8637 80.0101 46.3589 80.0104H29.3354C27.8305 80.0104 26.3871 79.4126 25.323 78.3484C24.2588 77.2842 23.661 75.8409 23.661 74.3359V57.3124C23.6613 55.8076 24.2593 54.3645 25.3236 53.3006L76.394 2.2302ZM35.0099 59.6617V68.6614H44.0097L89.4056 23.2655L80.4058 14.2658L35.0099 59.6617ZM0.963005 23.2655C0.963005 20.2556 2.1587 17.3689 4.28704 15.2406C6.41539 13.1122 9.30204 11.9165 12.312 11.9165H40.6844C42.1894 11.9165 43.6327 12.5144 44.6969 13.5786C45.7611 14.6427 46.3589 16.0861 46.3589 17.591C46.3589 19.096 45.7611 20.5393 44.6969 21.6035C43.6327 22.6677 42.1894 23.2655 40.6844 23.2655H12.312V91.3594H80.4058V62.9869C80.4058 61.482 81.0037 60.0386 82.0678 58.9745C83.132 57.9103 84.5753 57.3124 86.0803 57.3124C87.5853 57.3124 89.0286 57.9103 90.0928 58.9745C91.157 60.0386 91.7548 61.482 91.7548 62.9869V91.3594C91.7548 94.3693 90.5591 97.256 88.4308 99.3843C86.3024 101.513 83.4158 102.708 80.4058 102.708H12.312C9.30204 102.708 6.41539 101.513 4.28704 99.3843C2.1587 97.256 0.963005 94.3693 0.963005 91.3594V23.2655Z"
                        fill="#0D0D0D"
                      />
                    </svg>
                    Edit
                  </Link>
                </>
              )}
            </div>
          </div>
          <Link to="/">
            {' '}
            <svg xmlns="http://www.w3.org/2000/svg" width="103" height="102" viewBox="0 0 103 102" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M41.7042 4.63408C41.7042 2.65447 40.4467 0.893535 38.5742 0.251105C36.7018 -0.391361 34.628 0.226593 33.4127 1.7892L0.976107 43.4936C-0.325369 45.1668 -0.325369 47.5097 0.976107 49.1829L33.4127 90.8871C34.628 92.4501 36.7018 93.0678 38.5742 92.4255C40.4467 91.7828 41.7042 90.022 41.7042 88.0424V69.5545C66.6284 70.0739 78.6036 74.8041 84.6191 79.9481C90.3377 84.8381 91.3789 90.5859 92.4707 96.6112C92.5638 97.1256 92.6579 97.6441 92.7547 98.1617C93.1847 100.46 95.2597 102.078 97.5938 101.935C99.9274 101.792 101.789 99.9323 101.935 97.5987C102.729 84.865 101.536 66.4132 92.5411 50.9753C83.8119 35.9942 68.0913 24.4758 41.7042 23.2731V4.63408Z"
                fill="black"
              />
            </svg>
          </Link>
        </>
      )}
    </div>
  )
}

export default ContentDetail
