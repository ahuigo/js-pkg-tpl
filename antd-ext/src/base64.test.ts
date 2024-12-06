import { b64Encode, b64Decode } from './base64';


it('test base64', () => {
  const b = b64Encode('中');
  expect(b).toBe('5Lit');
  const d = b64Decode('5Lit');
  expect(d).toBe('中');
});

