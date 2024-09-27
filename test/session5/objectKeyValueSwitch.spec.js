const { expect } = require('chai');
const { objectKeyValueSwitch } = require('../../src/session5');

const TEST_DATA = {
  input: {
    JavaSCript: '100',
    TypeScript: '101',
    HTML: '110',
    CSS: '111',
    React: '120',
    Vue: '121',
    Angular: '122',
    'C#': '200',
    Java: '300',
    Go: '400',
  },
  expectedOutput: {
    100: 'JavaSCript',
    101: 'TypeScript',
    110: 'HTML',
    111: 'CSS',
    120: 'React',
    121: 'Vue',
    122: 'Angular',
    200: 'C#',
    300: 'Java',
    400: 'Go',
  },
};

describe('objectKeyValueSwitch test', () => {
  it('switches keys and values', () => {
    expect(objectKeyValueSwitch(TEST_DATA.input)).deep.equals(
      TEST_DATA.expectedOutput,
    );
  });
});
