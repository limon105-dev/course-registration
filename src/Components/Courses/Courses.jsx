import PropTypes from 'prop-types';

import { useEffect, useState } from "react";
import Course from "./Course";

const Courses = ({handleCourse, handleTotalCreditHour}) => {

  const [courses, setCourses] = useState([]);

  useEffect(()=>{
    fetch('courses.json')
    .then(res => res.json())
    .then(data => setCourses(data))
  });

  return (
    <div className="sm:w-3/4 sm:me-3 xl:me-0">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {
          courses.map( course => <Course course={course} handleTotalCreditHour={handleTotalCreditHour} handleCourse={handleCourse} key={course.course_id}></Course>)
        }
      </div>
    </div>

  );
};

Courses.propTypes = {
  handleCourse: PropTypes.func,
  handleTotalCreditHour: PropTypes.func
};

export default Courses;