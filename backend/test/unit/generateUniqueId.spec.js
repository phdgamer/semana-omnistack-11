const genereteUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
  it('should generete an unique ID', () => {
    const id = genereteUniqueId();
    expect(id).toHaveLength(8);
  });
});