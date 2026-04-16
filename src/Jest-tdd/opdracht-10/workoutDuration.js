/**
 * TDD Opdracht: Workout Duration Calculator
 * 
 * Bereken statistieken over workouts
 * Run: npm test opdracht-10
 */

/**
 * Telt totaal aantal reps op
 */
export function calculateTotalReps(workouts) {
  return workouts.reduce((acc, workout) => acc + workout.reps, 0);
}

/**
 * Telt totale load/gewicht op
 */
export function calculateTotalLoad(workouts) {
  return workouts.reduce((acc, workout) => acc + workout.load, 0);
}

/**
 * Schat duur van workout in minuten
 * Aanname: 3 seconden per rep
 */
export function estimateDuration(workouts) {
  const totalReps = calculateTotalReps(workouts);
  const totalSeconds = totalReps * 3;
  const totalMinutes = totalSeconds / 60;
  return Math.round(totalMinutes * 100) / 100;
  // TODO: 
  // 1. Tel totale reps
  // 2. Vermenigvuldig met 3 (seconden per rep)
  // 3. Deel door 60 (seconden naar minuten)
  // 4. Rond af op 2 decimalen
  // Hint: Math.round(getal * 100) / 100
}

/**
 * Berekent totaal volume (reps × load)
 * Volume = maat voor trainingsintensiteit
 */
export function getTotalVolume(workouts) {
  return workouts.reduce((acc, workout) => acc + (workout.reps * workout.load), 0);
  // TODO: 
  // Voor elke workout: reps × load
  // Tel alle volumes bij elkaar op
  // Squats: 10 reps × 50 kg = 500
  // Push ups: 20 reps × 0 kg = 0
  // Totaal: 500
}
