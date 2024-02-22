import PropTypes from 'prop-types';
import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'
import SelectedCourseList from './Components/SelectedCourseList/SelectedCourseList'

function App() {

  const [courselist, setCourseList] = useState([]);
  const [creditHour, setCreditHour] = useState(0);
  const [remainingCreditHour, setRemainingCreditHour] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCourse = (Course) =>{
    const {credits, price} = Course;
      
      const newRemainingCreditHour = remainingCreditHour - credits;
      if (newRemainingCreditHour >= 0 && newRemainingCreditHour <= 20) {
        setRemainingCreditHour(newRemainingCreditHour);
        const newCourseList = [...courselist, Course];
      setCourseList(newCourseList);
      setCreditHour(creditHour + credits);
      setTotalPrice(totalPrice + price);
      }  else{
        alert('Out of Credit Hour')
      }
  }

  return (
    <>
    <Header></Header>
    <div className="sm:flex sm:justify-between sm:container mx-auto mt-4 px-4 sm:px-0">
    <Courses handleCourse={handleCourse}></Courses>
    <SelectedCourseList courselist={courselist} creditHour={creditHour} remainingCreditHour={remainingCreditHour} totalPrice={totalPrice}></SelectedCourseList>
    </div>
    </>
  )
}

App.propTypes = {
  courselist: PropTypes.object,
  setCourseList: PropTypes.func,
  Course: PropTypes.object,
  handleCourse: PropTypes.func
};

export default App
