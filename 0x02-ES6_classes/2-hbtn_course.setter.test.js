import ALXCourse from './2-hbtn_course';

test('Setters update name and length correctly', () => {
  const course = new ALXCourse('Backend', 20);
  course.name = 'Frontend';
  course.length = 10;
  expect(course.name).toBe('Frontend');
  expect(course.length).toBe(10);
});
