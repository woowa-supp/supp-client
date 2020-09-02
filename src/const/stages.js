export const STAGES = {
  0: {
    question: "멀티태스킹에 대해 어떻게 생각하시나요?",
    leftAnswer: "저는 여러가지 일들을 가뿐하게 처리하죠!",
    rightAnswer: "한번에 하나의 일만 할 수는 없는건가요?",
    leftDestination: 1,
    rightDestination: 2,
  },
  1: {
    question: "예측할 수 없는 에러가 갑자기 일어난다면, 어떻게 하겠어요?",
    leftAnswer: "포기란 없죠! 코드에 답이 있을거에요!",
    rightAnswer: "구글신을 믿습니다..! 검색, 검색, 검색!",
    leftDestination: 3,
    rightDestination: 4,
  },
  2: {
    question: "협업에 대해서 어떻게 생각하시나요?",
    leftAnswer: "백지장도 맞들면 낫죠!",
    rightAnswer: "저는 외로운 한마리 늑대에요..",
    leftDestination: 4,
    rightDestination: 5,
  },
  3: {
    question: "당신은 마감기한을 지킬 수 있나요?",
    leftAnswer: "시간은 상대적인거 아시죠? 그러니까 마감기한도 상대적인거에요.",
    rightAnswer: "저는 무슨 수를 써서라도 마감기한 내에 제출할거에요!",
    leftDestination: 6,
    rightDestination: 7,
  },
  4: {
    question: "코드 퀄리티는 중요한가요?",
    leftAnswer: "완벽한 코드보다 완성된 코드가 중요한 거 같아요.",
    rightAnswer: "코드는 룰을 따라야하죠! 완벽한 퀄리티가 중요해요.",
    leftDestination: 7,
    rightDestination: 8,
  },
  5: {
    question: "체크무늬 셔츠 좋아하시나요?",
    leftAnswer: "자고로 체크무늬 셔츠는 유행에 뒤떨어진 적이 없죠!",
    rightAnswer: "세상에는 체크무늬 셔츠말고도 다른 옷이 있는데 말이죠..",
    leftDestination: 8,
    rightDestination: 9,
  },
  6: {
    question: "당신이 프로젝트를 진행하며 새로운 기술을 배워야할 할 때에...",
    leftAnswer:
      "저는 기술에 대해서 깊게 공부하고 시작하기 전에 여러가지 것들을 시도해보는 편이에요.",
    rightAnswer: "빠르게 기초를 배우고 코드에 바로 적용하는 편이에요.",
    leftDestination: 10,
    rightDestination: 11,
  },
  7: {
    question: "일하는 스타일이 어떠세요?",
    leftAnswer: "우선 돌아가는 코드를 만들거에요!",
    rightAnswer: "모든 가능성을 고려한 코드를 작성하는 편이에요!",
    leftDestination: 11,
    rightDestination: 12,
  },
  8: {
    question: "프로젝트가 끝났을 때 당신이 드는 생각은",
    leftAnswer: "시간이 더 있었다면 더 잘 할 수 있었을텐데..",
    rightAnswer: "저는 다음 도전을 기다리죠!",
    leftDestination: 7,
    rightDestination: 13,
  },
  9: {
    question: "프로그래밍에 있어 가장 중요한 것은 무엇인가요?",
    leftAnswer: "열정!",
    rightAnswer: "재능!",
    leftDestination: 13,
    rightDestination: 14,
  },
  10: {
    type: "Mad Scientist",
  },
  11: {
    type: "MacGyver",
  },
  12: {
    type: "The Architect",
  },
  13: {
    type: "Code Guardian",
  },
  14: {
    type: "Ninja",
  },
};
