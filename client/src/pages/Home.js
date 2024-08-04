import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

// components
import WorkoutForm from "../components/WorkoutForm"
import WorkoutDetails from "../components/workoutDetails"

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:5000/api/workout')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    fetchWorkouts()
  }, [dispatch])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.toReversed().map(workout => (
          <WorkoutDetails key={workout._id}  workout={workout}  />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home