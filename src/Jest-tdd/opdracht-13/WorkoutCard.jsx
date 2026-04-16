/**
 * TDD Opdracht: WorkoutCard Component
 * 
 * Een card die 1 workout toont met delete functionaliteit
 * Run: npm test opdracht-13
 */

function WorkoutCard({ workout, onDelete }) {
  const { title, reps, load } = workout;

  return (
    <div className="workout-card">
      <h3>{title}</h3>
      <p>{reps} reps</p>
      <p>{load} kg</p>
      <button onClick={() => onDelete && onDelete(workout._id)}>Delete</button>
    </div>
  );
}

export default WorkoutCard;
