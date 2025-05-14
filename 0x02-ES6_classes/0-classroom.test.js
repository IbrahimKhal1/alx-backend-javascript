// 0-classroom.test.js
import ClassRoom from './0-classroom';

test('ClassRoom class initializes with correct maxStudentsSize', () => {
  const room = new ClassRoom(25);
  expect(room._maxStudentsSize).toBe(25);
});
