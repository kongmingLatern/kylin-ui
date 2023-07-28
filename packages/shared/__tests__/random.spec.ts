import { generateRandomStr } from '../src'

vi.mock('../src')

describe('randomString', () => {
  it('should return string', () => {
    vi.mocked(generateRandomStr).mockReturnValue('abcd')
    const string = generateRandomStr(4)
    expect(string).toBe('abcd')
  })
})
