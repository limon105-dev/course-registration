import PropTypes from 'prop-types';
import SelectedCourseItem from '../SelectedCourseItem/SelectedCourseItem';

const SelectedCourseList = ({courselist, creditHour, remainingCreditHour, totalPrice}) => {
  return (
    <div className="sm:ms-3 xl:ms-0 lg:ms-0 mt-5 sm:mt-0">
      <div className="card w-90 p-4 bg-base-100 shadow-xl">
        <div className="card-body">
          <h4 className="font-bold text-lg text-blue-600 border-b pb-4">Credit Hour Remaining {remainingCreditHour} hr</h4>
          <h3 className="font-bold text-xl">Course Name:</h3>
            <ul className="list-decimal pb-6 border-b leading-9">
                {
                  courselist.map((course, idx) => <SelectedCourseItem key={idx} course={course}></SelectedCourseItem>)
                }
            </ul>
            <h5 className="font-medium pb-4 border-b">Total Credit Hour : {creditHour}</h5>
            <h5 className="font-medium pt-4">Total Price : {totalPrice} USD</h5>
        </div>
      </div>
    </div>
  );
};

SelectedCourseList.propTypes = {
  courselist: PropTypes.array,
  creditHour: PropTypes.number,
  remainingCreditHour: PropTypes.number,
  totalPrice: PropTypes.number
};

export default SelectedCourseList;