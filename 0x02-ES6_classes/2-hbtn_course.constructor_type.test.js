import ALXCourse from './2-hbtn_course';

test('Constructor throws error on invalid types', () => {
  expect(() => new ALXCourse(123, 10)).toThrow();
  expect(() => new ALXCourse('Backend', 'ten')).toThrow();
});
