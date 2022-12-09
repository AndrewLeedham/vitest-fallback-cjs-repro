import { expect, test } from 'vitest';
import { heading } from '../styles.css';

test('classname', () => {
  expect(heading).toEqual(expect.any(String));
});
