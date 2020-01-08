import {Feedback, FeedbackStatus} from '../types'

export function mergeFeedbacks(feedbacks: Feedback[]): Feedback {
  return feedbacks.reduce((result, feedback) => {
    if (!feedback) {
      return result
    } else if (feedback.status === FeedbackStatus.error) {
      return {...feedback}
    } else if (
      feedback.status === FeedbackStatus.loading &&
      (!result.status || result.status === FeedbackStatus.success)
    ) {
      return {...feedback}
    } else if (feedback.status === FeedbackStatus.success && !result.status) {
      return {...feedback}
    }
    return result
  })
}

export default mergeFeedbacks
