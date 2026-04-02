import enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

enzyme.configure({adapter: new Adapter()})

/* tslint:disable:no-console */
const originalConsoleError = console.error.bind(console)
/* tslint:enable:no-console */

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation((...args: any[]) => {
    const [firstArg] = args

    if (
      typeof firstArg === 'string' &&
      firstArg.includes('not wrapped in act(...)')
    ) {
      return
    }

    originalConsoleError(...args)
  })
})

afterAll(() => {
  /* tslint:disable:no-console */
  ;(console.error as jest.Mock).mockRestore()
  /* tslint:enable:no-console */
})
