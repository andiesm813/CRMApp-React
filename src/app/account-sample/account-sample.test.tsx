import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import AccountSample from './account-sample';
import 'element-internals-polyfill';

test('renders AccountSample component', () => {
  const wrapper = render(<AccountSample />);
  expect(wrapper).toBeTruthy();
});