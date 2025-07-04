export function getAvg(scores: number[]): number {
  return getTotalScore(scores) / scores.length;
}

export function getTotalScore(scores: number[]): number {
  return scores.reduce((score, count) => score + count);
}
