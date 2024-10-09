// task_5/js/main.ts

// Define MajorCredits interface
interface MajorCredits {
  credits: number;
  // Brand property to uniquely identify MajorCredits
  _majorBrand: 'MajorCredits';
}

// Define MinorCredits interface
interface MinorCredits {
  credits: number;
  // Brand property to uniquely identify MinorCredits
  _minorBrand: 'MinorCredits';
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _majorBrand: 'MajorCredits',
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _minorBrand: 'MinorCredits',
  };
}

// Example usage:
const major1: MajorCredits = { credits: 20, _majorBrand: 'MajorCredits' };
const major2: MajorCredits = { credits: 30, _majorBrand: 'MajorCredits' };

const minor1: MinorCredits = { credits: 15, _minorBrand: 'MinorCredits' };
const minor2: MinorCredits = { credits: 25, _minorBrand: 'MinorCredits' };

const totalMajorCredits = sumMajorCredits(major1, major2);
const totalMinorCredits = sumMinorCredits(minor1, minor2);

console.log('Total Major Credits:', totalMajorCredits); // Output: { credits: 50, _majorBrand: 'MajorCredits' }
console.log('Total Minor Credits:', totalMinorCredits); // Output: { credits: 40, _minorBrand: 'MinorCredits' }

