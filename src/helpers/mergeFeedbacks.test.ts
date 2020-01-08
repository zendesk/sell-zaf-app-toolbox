import {Feedback, FeedbackStatus} from '../types'
import mergeFeedbacks from './mergeFeedbacks'

const testCases = [
  [
    {status: FeedbackStatus.success},
    {status: FeedbackStatus.success},
    {status: FeedbackStatus.error},
    {status: FeedbackStatus.success},
    {status: FeedbackStatus.loading},
    {status: FeedbackStatus.success},
  ],
  [
    {status: FeedbackStatus.success},
    {status: FeedbackStatus.loading},
    {status: FeedbackStatus.loading},
  ],
  [{status: FeedbackStatus.success}],
  [{status: FeedbackStatus.loading}, {status: FeedbackStatus.success}],
  [
    {status: FeedbackStatus.loading},
    {status: FeedbackStatus.error},
    {status: FeedbackStatus.success},
  ],
]

const expectation = [
  {status: FeedbackStatus.error},
  {status: FeedbackStatus.loading},
  {status: FeedbackStatus.success},
  {status: FeedbackStatus.loading},
  {status: FeedbackStatus.error},
]

describe('mergeFeedbacks', () => {
  it('should return proper values', () => {
    testCases.forEach((test: Feedback[], idx: number) => {
      expect(mergeFeedbacks(test)).toStrictEqual(expectation[idx])
    })
  })
})
