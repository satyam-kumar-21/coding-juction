import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllLecturesAction } from "../../store/Action/lectureAction";
import { getAllCourseAction } from "../../store/Action/actionCourse";
import { useParams } from "react-router-dom";
import { RiVideoLine } from "react-icons/ri"; // Import the video icon from react-icons
import { updateUserProfileAction } from "../../store/Action/actionUser";

function LecturesWatch() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [videoLengths, setVideoLengths] = useState({});
  const [currentVideo, setCurrentVideo] = useState("");
  const [watchedVideos, setWatchedVideos] = useState([]);

  // Ref to track watched videos
  const watchedVideosRef = useRef([]);

  useEffect(() => {
    // Fetch courses and lectures
    dispatch(getAllCourseAction())
      .then(() => setLoading(false))
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setLoading(false);
      });
    dispatch(getAllLecturesAction())
      .then(() => setLoading(false))
      .catch((error) => {
        console.error("Error fetching lectures:", error);
        setLoading(false);
      });
  }, [dispatch]);

  const lectures = useSelector((state) => state.lecture.lectures.lectures);
  const courseLectures = lectures.filter(
    (lecture) => lecture.course === courseId
  );

  const getVideoLength = async (url) => {
    const video = document.createElement("video");
    video.src = url;
    return new Promise((resolve, reject) => {
      video.addEventListener("loadedmetadata", () => {
        const duration = video.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        resolve(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
      });
      video.addEventListener("error", (e) => {
        reject(e);
      });
    });
  };

  useEffect(() => {
    const fetchVideoLengths = async () => {
      const lengths = {};
      for (let lecture of courseLectures) {
        try {
          const length = await getVideoLength(lecture.video);
          lengths[lecture._id] = length;
        } catch (error) {
          console.error("Error fetching video length:", error);
        }
      }
      setVideoLengths(lengths);
    };

    fetchVideoLengths();
  }, [courseLectures]);

  const userId = useSelector((state) => state.user.user._id);
  const user = useSelector(state => state.user.user)

  const calculateNinetyPercentDuration = async (videoUrl) => {
    return new Promise((resolve, reject) => {
      const video = document.createElement("video");
      video.src = videoUrl;
      video.addEventListener("loadedmetadata", () => {
        const duration = video.duration;
        resolve(duration * 0.9);
      });
      video.addEventListener("error", (e) => {
        reject(e);
      });
      video.load();
    });
  };

  const handleClick = async (lecture) => {
    setCurrentVideo(lecture.video);
  
    // Calculate the 90% duration of the video
    const ninetyPercentDuration = await calculateNinetyPercentDuration(
      lecture.video
    );
  
    // Add event listener to track progress
    const videoElement = document.getElementById("videoPlayer");
    videoElement.addEventListener("timeupdate", function () {
      if (
        videoElement.currentTime >= ninetyPercentDuration &&
        !watchedVideosRef.current.includes(lecture._id)
      ) {
        const updatedWatchedVideos = [...watchedVideosRef.current, lecture._id];
        watchedVideosRef.current = updatedWatchedVideos; // Update the ref
  
        // Update the state using the latest value from the ref
        setWatchedVideos(updatedWatchedVideos);
  
        // Dispatch an action to update the user's watched videos
        dispatch(
          updateUserProfileAction(userId, {
            name: user.name,
            email: user.email,
            watchedVideos: updatedWatchedVideos,
            currentVideo:
              updatedWatchedVideos.length > 0
                ? updatedWatchedVideos[updatedWatchedVideos.length - 1]
                : null,
          })
        );
      }
    });
  
    // Play the video when it's loaded
    videoElement.play();
  };
  

  const courseName = useSelector((state) => {
    const course = state.course.course.data.find(course => course._id === courseId);
    return course ? course.title : "";
  });
  
  return (
    <div className="flex h-screen">
      {/* Left side - Video section */}
      <div className="w-2/3 h-2/3 bg-gray-200 flex flex-col">
        {/* Video player component */}
        <video
          id="videoPlayer"
          key={currentVideo}
          controls
          className="w-full object-contain"
        >
          <source src={currentVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Resource and Notes section */}
        <div className="p-4 pl-10 pr-10 bg-white mt-4 flex justify-between items-center">
          <div>
            <input type="file" className="hidden" id="resourceFile" />
            <label
              htmlFor="resourceFile"
              className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer"
            >
              Download notes
            </label>
          </div>
          <div>
            <input type="file" className="hidden" id="notesFile" />
            <label
              htmlFor="notesFile"
              className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer"
            >
              Download assignment
            </label>
          </div>
        </div>
      </div>
      {/* Right side - Scrollable list of lectures */}
      <div className="w-1/3 h-full pl-8 bg-gray-100 overflow-y-auto">
        <h1 className="text-2xl pt-5 text-gray-800 font-bold">{courseName}</h1>
        <div className="p-4">
          {courseLectures.map((lecture, index) => (
            <div
              key={index}
              className="mb-4 text-xl font-semibold hover:cursor-pointer  items-center"
            >
              <div
                onClick={() => handleClick(lecture)}
                className="text-gray-800 flex  items-center"
              >
                <span className="pr-2 text-2xl">{lecture.lectureNumber}.</span>{" "}
                <span>{lecture.title}</span>
                <input
                  type="checkbox"
                  checked 
                  className="form-checkbox h-5 w-5 text-blue-500"
                  readOnly
                />
              </div>
              <span className="ml-auto pl-10 text-gray-500">
                <RiVideoLine className="inline-block" /> {/* Video icon */}
                {/* Video length */}
                {videoLengths[lecture._id]}
              </span>
              {/* Add line below each lecture title */}
              <hr className="my-2" style={{ borderTop: "1.5px solid #ccc" }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LecturesWatch;
