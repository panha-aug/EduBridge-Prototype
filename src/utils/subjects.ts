import type { ForeignLanguage, SubjectId, SubjectSpec, Track } from '../types';

export function getSubjectsForTrack(track: Track, foreignLanguage: ForeignLanguage): SubjectSpec[] {
  if (track === 'science') {
    return [
      { id: 'math', points: 125, tracks: ['science'] },
      { id: 'physics', points: 75, tracks: ['science'] },
      { id: 'chemistry', points: 75, tracks: ['science'] },
      { id: 'biology', points: 75, tracks: ['science'] },
      { id: 'khmer', points: 75, tracks: ['science'] },
      { id: 'history', points: 50, tracks: ['science'] },
      { id: foreignLanguage, points: 50, tracks: ['science'], isForeignLanguage: true },
    ];
  }

  return [
    { id: 'khmer', points: 125, tracks: ['social'] },
    { id: 'history', points: 75, tracks: ['social'] },
    { id: 'geography', points: 75, tracks: ['social'] },
    { id: 'morality', points: 75, tracks: ['social'] },
    { id: 'math', points: 75, tracks: ['social'] },
    { id: 'earth', points: 50, tracks: ['social'] },
    { id: 'english', points: 50, tracks: ['social'], isForeignLanguage: true },
  ];
}

export function getSubjectPoints(track: Track, subjectId: SubjectId): number {
  const list = getSubjectsForTrack(track, subjectId === 'french' ? 'french' : 'english');
  return list.find((item) => item.id === subjectId)?.points ?? 50;
}

export function getAllUniqueSubjectIds(): SubjectId[] {
  return [
    'math',
    'physics',
    'chemistry',
    'biology',
    'khmer',
    'history',
    'geography',
    'morality',
    'earth',
    'english',
    'french',
  ];
}
