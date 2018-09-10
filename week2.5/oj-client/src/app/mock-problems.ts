import { Problem } from "./models/problem.model";

export const PROBLEMS: Problem[] = [
  {
    id: 1,
    name: 'Two Sum',
    desc: `Determine if there exist two elements in a given array, the sum of which is the given target number.`,
    difficulty: 'easy'
  },
  {
    id: 2,
    name: '3Sum',
    desc: `Determine if there exists three elements in a given array that sum to the given target number. `,
    difficulty: 'medium'
  },
  {
    id: 3,
    name: '4Sum',
    desc: `Determine if there exists a set of four elements in a given array that sum to the given target number.`,
    difficulty: 'medium'
  },
  {
    id: 4,
    name: 'Search In Shifted Sorted Array II',
    desc: `Given a target integer T and an integer array A, A is sorted in ascending order first, then shifted by an arbitrary number of positions.`,
    difficulty: 'hard'
  },
  {
    id: 5,
    name: 'Largest Sum Of Valid Numbers',
    desc: `Given a 2D array A[8][8] with all integer numbers if we take a number a[i][j], then we cannot take its 8 neighboring cells. How should we take the numbers to make their sum as large as possible.`,
    difficulty: 'super'
  }
];
