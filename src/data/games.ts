export interface Game {
  id: string;
  title: string;
  descriptionKo: string;
  descriptionEn: string;
  tags: string[];
  insightSlug: string | null;
  thumbnail: string | null;
  emoji: string;
}

export const games: Game[] = [
  {
    id: 'tetris',
    title: 'Tetris',
    descriptionKo: '순수 HTML/CSS/JS로 구현한 테트리스. 바이브 코딩 1-file 데모.',
    descriptionEn: 'Tetris built with pure HTML/CSS/JS. 1-file Vibe Coding demo.',
    tags: ['Canvas', 'Mobile', 'Vibe Coding'],
    insightSlug: null,
    thumbnail: '/games/tetris.png',
    emoji: '🟦',
  },
  {
    id: 'breakout',
    title: 'Breakout',
    descriptionKo: 'AI와 협업하여 만든 클래식 블록 깨기 게임. 터치 & 키보드 조작 지원.',
    descriptionEn: 'Classic brick-breaking game built with AI. Touch & keyboard support.',
    tags: ['Canvas', 'Mobile', 'Vibe Coding'],
    insightSlug: 'insight-002',
    thumbnail: '/games/breakout.png',
    emoji: '🧱',
  },
  {
    id: 'snake',
    title: 'Snake',
    descriptionKo: 'AI와 함께 완성한 스네이크 게임. 키보드 & 스와이프 동시 지원.',
    descriptionEn: 'Snake game built with AI. Keyboard & swipe gesture support.',
    tags: ['Canvas', 'Mobile', 'Vibe Coding'],
    insightSlug: null,
    thumbnail: null,
    emoji: '🐍',
  },
];
