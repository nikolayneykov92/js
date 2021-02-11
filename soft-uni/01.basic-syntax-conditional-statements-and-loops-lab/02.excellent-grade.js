function excellentGrade(grade) {
  if(grade >= 5.50) {
    return 'Excellent';
  }

  return 'Not excellent';
}

console.log(excellentGrade(5.50));
console.log(excellentGrade(4.35));