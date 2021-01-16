import React, { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../base/header';
import Footer from '../base/footer';
import FormEdit from './form';
import courseService from '../../services/courseService';

const EditContainer = function() {
  const { id: course_key } = useParams();
  const [course, setCourse] = useState(null);

  const queryData = useCallback(async function () {
    try
    {
      let courseInfo = await courseService.getCourseByKey(course_key);
      setCourse(courseInfo);
    }
    catch (err) {
      throw err;
    }
  }, [course_key]);
    
  useEffect(() => {
    queryData();
  },[queryData]);

  const saveCourse = async (e) => {
    e.preventDefault();
    try 
    {
      let res1 = await courseService.updateCourse(course.CourseKey, course.CourseName, course.Description);
      if(res1) alert('Submit is success!');
    }
    catch (err) {
      throw err;
    }
  }

  const onChangeCourseName = (e) => {
    if(course) course.CourseName = e.target.value;
    setCourse({...course});
  }

  const onChangeCourseDesc = (e) => {
    if(course) course.Description = e.target.value;
    setCourse({...course});
  }

  return (
    <div className='wrap course-page'>
      <Header />
      {
        (course) ?
        <FormEdit course={course}
                  saveCourse={saveCourse}
                  onChangeCourseName={onChangeCourseName}
                  onChangeCourseDesc={onChangeCourseDesc} />
        : null
      }
      <Footer />
    </div>
  );
}

export default EditContainer;