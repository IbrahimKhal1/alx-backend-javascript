import ALXCourse from './2-hbtn_course';

test('ALXCourse initializes with correct values', () => {
  const course = new ALXCourse('Backend', 20);
  expect(course.name).toBe('Backend');
  expect(course.length).toBe(20);
});
