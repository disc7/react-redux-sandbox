import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {

constructor(props, context) {
    super(props, context);
  }

courseRow(course, index) {
   return <div key={index}>{course.title}</div>;
}

  render() {
    const {courses} = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={courses} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

CoursesPage.propTypes = {
  // courses: React.PropTypes.array.isRequired
  // actions: React.PropTypes.object.isRequired
  dispatch: React.PropTypes.func.isRequired,
  courses: React.PropTypes.array.isRequired
};

export default connect(mapStateToProps)(CoursesPage);
