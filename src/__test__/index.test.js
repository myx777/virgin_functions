import healthStatus from '../index';

test.each([
  ['Маг', 90, 'healthy'],
  ['Воин', 30, 'wounded'],
  ['Разбойник', 10, 'critical'],
])(
  'character with health %i should have %s status',
  (name, health, expectedStatus) => {
    const character = { name, health };
    const result = healthStatus(character);
    expect(result).toBe(expectedStatus);
  },
);

test('character with health > 50 should be healthy', () => {
  const character = { name: 'Маг', health: 90 };
  expect(healthStatus(character)).toBe('healthy');
});

test('character with health between 50 and 15 should be wounded', () => {
  const character = { name: 'Маг', health: 30 };
  expect(healthStatus(character)).toBe('wounded');
});

test('character with health less than 15 should be critical', () => {
  const character = { name: 'Маг', health: 10 };
  expect(healthStatus(character)).toBe('critical');
});
