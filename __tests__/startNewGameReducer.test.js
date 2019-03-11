describe('startNewGameReducer', () => {

  test('Temporary dummy test: three plus three is six', () => {
    expect(3 + 3).toBe(6);
  });

  test('Should return default state if no action type is recognized', () => {
    expect(startNewGameReducer({}, { type: null })).toEqual({});
  });


});
