import React, { useEffect, useState } from 'react'
import AdminDashboard from '../../AdminDashboard'
import LectureCard from './LectureCard'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourseAction } from '../../../../store/Action/actionCourse';
import { getAllLecturesAction } from '../../../../store/Action/lectureAction';

function AllLectures() {
    const { courseId } = useParams();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(getAllCourseAction())
            .then(() => setLoading(false))
            .catch((error) => {
                console.error("Error fetching courses:", error);
                setLoading(false);
            });
    }, [dispatch]);
    
    useEffect(() => {
        dispatch(getAllLecturesAction())
            .then(() => setLoading(false))
            .catch((error) => {
                console.error("Error fetching lectures:", error);
                setLoading(false);
            });
    }, [dispatch]);
    

    const course = useSelector(state => state.course.course.data.find(course => course._id === courseId));

    const lectures = useSelector((state) => state.lecture.lectures.lectures);

    const courseLectures = lectures.filter(lecture => lecture.course === courseId);

    return (
        <>
            <div className='flex h-auto'>
                <AdminDashboard />
                <div className="flex flex-wrap h-auto">
                    {courseLectures.map((lecture) => (
                        <LectureCard
                            key={lecture._id}
                            title={lecture.title}
                            lectureNumber={lecture.lectureNumber}
                            video={lecture.video}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default AllLectures;
