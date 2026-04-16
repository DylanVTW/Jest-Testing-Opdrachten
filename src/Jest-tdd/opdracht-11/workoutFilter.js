/**
 * TDD Opdracht: Workout Filter
 * 
 * Filter en sorteer workouts
 * Run: npm test opdracht-11
 */

/**
 * Geeft workouts met minimaal X reps
 */
export function filterByMinReps(workouts, minReps) {
  return workouts.filter(workout => workout.reps >= minReps);
}

/**
 * Geeft workouts met maximaal X load
 */
export function filterByMaxLoad(workouts, maxLoad) {
  if (maxLoad <= 0) return [];
  return workouts.filter(workout => workout.load <= maxLoad);
}

/**
 * Sorteert workouts op reps (laag naar hoog)
 */
export function sortByReps(workouts) {
  return [...workouts].sort((a, b) => a.reps - b.reps);
  // TODO: 
  // 1. Maak kopie van array (gebruik [...workouts])
  // 2. Sorteer op reps
  // 3. Return gesorteerde array
  // Hint: .sort((a, b) => a.reps - b.reps)
}

/**
 * Geeft alleen "high intensity" workouts (load >= 50)
 */
export function getHighIntensityWorkouts(workouts) {
  return workouts.filter(workout => workout.load >= 50);
}
