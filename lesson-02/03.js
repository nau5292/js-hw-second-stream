/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки
 * 'F' (0 - 49),
 * 'D' (50 - 69),
 * 'C' (70 - 79),
 * 'B' (80 - 89),
 * 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

let score = 85; // тестовое значение, можно изменять
let grade;
// your code

if (score >= 0 && score < 50) {
    grade = "F";
} else if (score >= 50 && score < 70) {
    grade = "D";
} else if (score >= 70 && score < 80) {
    grade = "C";
} else if (score >= 80 && score < 90) {
    grade = "B";
} else {
    grade = "A";
}

console.log(`Your score is ${score}, your grade is ${grade}`);
