import ALXCourse from './2-hbtn_course';

test('Setters throw error on invalid types', () => {
  const course = new ALXCourse('Backend', 20);
  expect(() => { course.name = 123; }).toThrow();
  expect(() => { course.length = 'twenty'; }).toThrow();
});
