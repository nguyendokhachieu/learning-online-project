import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

import { CourseService } from "../../services/course";
import { actFetchUserRegisteredCourseAsync, actRegisterNewCourse } from "../../store/courses/actions";
import { actShowLoadingFullscreen } from "../../store/modals/actions";

export default function CourseRegister({ 
	courseDetail = null 
}) 
{
	const history = useHistory();
  	const dispatch = useDispatch();
  	const [loading, setLoading] = useState();
	const [hasBeenRegistered, setHasBeenRegistered] = useState(false);

  	const { registeredCourseDetail } = useSelector(state => state.courses);

  	function handler() {
	  	if (loading) return;
	  	if (!courseDetail) return;

	  	setLoading(true);

	  	if (hasBeenRegistered) {
		  	dispatch(actFetchUserRegisteredCourseAsync({
				courseId: courseDetail.id,
			})).then(() => setLoading(false));

			// continue = useEffect
		  	return;
	  	}

		dispatch(actRegisterNewCourse({
			courseId: courseDetail.id,
		})).then(async response => {
			setLoading(false);

			if (response?.ok) {
				setHasBeenRegistered(true);

				await dispatch(actShowLoadingFullscreen());
				await dispatch(actFetchUserRegisteredCourseAsync({
					courseId: courseDetail.id,
				}))

				// continue = useEffect
			}
		})
  	}

	useEffect(() => {
		registeredCourseDetail && (
			history.push(`/learn/${ registeredCourseDetail.current_lesson_id }`)
		)
	}, [registeredCourseDetail, history]);

	useEffect(() => {
		async function check() {
			if (loading) return;
			if (!courseDetail) return;

			setLoading(true);
			const response = await CourseService.checkIfCourseHasBeenRegistered(courseDetail.id);
			setLoading(false);

			if (response && response.data.ok) {
				if (response.data.data.has_been_registered) {
					setHasBeenRegistered(true);
				}
			}
		}

		check();
	}, [courseDetail]);

  	if (!courseDetail) return null;

	return (
		<div className="course-register">
			<button 
				className={ loading ? "btn btn-register disabled" : "btn btn-register" }
				onClick={ handler }
			>
				{
					loading
						? 'Đang đăng ký'
						: hasBeenRegistered 
							? 'Tiếp tục học' 
							: 'Học ngay'
				}
			</button>
		</div>
	);
}
