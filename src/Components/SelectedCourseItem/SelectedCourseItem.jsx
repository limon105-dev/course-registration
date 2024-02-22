import PropTypes from 'prop-types';

const SelectedCourseItem = ({course}) => {

    const {course_name} = course;

    return (
        <li>{course_name}</li>
    );
};

SelectedCourseItem.propTypes = {
    course: PropTypes.object
};

export default SelectedCourseItem;