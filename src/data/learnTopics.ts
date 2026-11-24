import type { LearnTopicModule, SubjectId, Track } from '../types';
import { STEM_LEARN_TOPICS } from './learnTopicsStem';
import { HUM_LANG_LEARN_TOPICS } from './learnTopicsHumLang';

export const LEARN_TOPICS: LearnTopicModule[] = [
  ...STEM_LEARN_TOPICS,
  ...HUM_LANG_LEARN_TOPICS,
];

export function getTopicsForSubject(
  track: Track,
  subjectId: SubjectId
): LearnTopicModule[] {
  return LEARN_TOPICS.filter(
    (topic) => topic.subjectId === subjectId && topic.tracks.includes(track)
  );
}

export function getTopicScoreKey(
  track: Track,
  subjectId: SubjectId,
  topicId: string
): string {
  return `${track}:${subjectId}:${topicId}`;
}
