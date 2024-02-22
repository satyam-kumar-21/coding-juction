import React, { useEffect, useState } from 'react';
import { getAllCourseAction } from '../../../../store/Action/actionCourse';
import { useDispatch } from 'react-redux';
import { getAllLecturesAction } from '../../../../store/Action/lectureAction';

const LectureCard = ({ title, lectureNumber, video }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = () => {
    setIsFullScreen(true);
    const video = document.getElementById('lecture-video');
    video.requestFullscreen();
  };

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch((getAllLecturesAction))
  },[dispatch])

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 mr-4" style={{ width: '23.5%', flex: '0 0 auto' }}>
      <div className="mb-2">
        
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-gray-500">Lecture {lectureNumber}</p>
      </div>
      <div className="aspect-w-16 aspect-h-9">
        <video onClick={handleFullScreen} id="lecture-video" className="object-cover w-full h-full" controls>
          <source src={video} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex justify-between mt-2">
        <button className="bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600">Update</button>
        <button className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600">Delete</button>
      </div>
    </div>
  );
};

export default LectureCard;
