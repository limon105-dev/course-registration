import PropTypes from 'prop-types';

const Course = ({course, handleCourse}) => {
  const {image, course_name, description, price, credits} = course;
  return (
      <div className="card w-90 p-4 bg-base-100 shadow-xl">
        <figure><img src={image} alt={course_name}/></figure> 
        <div className="card-body p-0 mt-4">
          <h2 className="card-title pb-3">{course_name}</h2>
          <p>{description}</p>
          <div className="pt-4 flex justify-between">
            <span>$ Price : {price}</span><span>Credit : {credits}</span>
          </div>
          <div className="card-actions pt-6">
            <button onClick={()=>handleCourse(course)} className="btn btn-primary w-full bg-sky-600">Select</button>
          </div>
        </div>
      </div>
  );
};

Course.propTypes = {
  course: PropTypes.object,
  handleCourse: PropTypes.func,
  course_id: PropTypes.object
};

export default Course;