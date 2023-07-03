// This utility will not be tested because is impossible to mock with babel cuz source-map issues --> see isue --> https://github.com/babel/babel/issues/5426
/* istanbul ignore next */
const randomSizer = (multiplier = 1, offset = 0) =>
  Math.random() * multiplier - offset;

export default randomSizer;
