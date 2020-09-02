export const SURVEY_TYPE_STAGES = {
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

export const SURVEY_STYLE_STAGES = {
  0: {
    question: "눈을 들어 본인의 노트북을 봅니다, 어떤 모양이 보이나요?",
    choices: ["사과", "창문", "펭귄"],
  },
  1: {
    question:
      "안녕하세요! 페어를 만났습니다, 누구의 컴퓨터를 사용 할것 입니까?",
    choices: ["내 컴퓨터", "페어의 컴퓨터", "아무거나", "번갈아가며"],
  },
  2: {
    question:
      "페어 프로그래밍을 시작합니다. 두근 두근.. 앗! 그전에 쉬는 시간은 어떻게 하는게 좋을까요?",
    choices: [
      "저는 진짜 힘들때까진 계속 코딩 하는 편이에요.",
      "저는 일정 시간마다 쉬어야 합니다.",
      "저는 뭐... 상관 없습니다.",
    ],
  },
  3: {
    question: "즐거운 페어 프로그래밍! 순서는 어떻게 돌아가는게 좋을까요?",
    choices: [
      "시간을 정해서 돌아간다.",
      "기능을 정해서 돌아간다.",
      "상관 없다.",
    ],
  },
  4: {
    question:
      "째깍째깍.. 저녁 6시가 되었습니다. 아직 할 건 남아있는데.. 페어에게 건네는 당신의 말은?",
    choices: [
      "밥먹고 더할까요?",
      "내일 마무리 해보죠.",
      "상대방의 말을 기다린다.",
    ],
  },
  5: {
    question: "테스트 메소드 명",
    content: `
        <p style="color: darkgoldenrod">
        <span style="font-size: 1.5rem; color: darkkhaki">자동차 경주 게임에서 자동차의 이름이 5글자를 넘으면 안되는 요구사항에 대한 예외처리 테스트 코드를 작성해보세요.</span>
        </p><br>
         <p style="font-size: 1.5rem; color: darkkhaki"> - 테스트 대상 : Name 클래스의 생성자, 내부에는 길이에 대한 유효성을 검사하는 validate라는 이름의 메서드 존재</p>
         <p style="font-size: 1.5rem; color: darkkhaki"> - 테스트할 상황 : Name 클래스를 이용하여 이름을 생성하는데 6글자를 입력하여 예외를 발생시킨다.</p>
         <p style="font-size: 1.5rem; color: darkkhaki"> - 입력 : (String type의) name</p><br>
         
         <p>
         <span style="font-size: 2rem; color: orange">@DisplayName(<span class="display-name-container"></span>)<br></span> 
         <span style="font-size: 2rem; color: orange">@Test</span>
         </p>
         <p>
         <span style="font-size: 2rem; color: snow">void <span class="method-name-container"></span> <span style="color: #fffafa">() {</span> </span><br>
         <span style="font-size: 2rem; color: darkgrey">...</span><br>
         <span style="font-size: 2rem; color: snow">}</span>
         </p>
        `,
    buttonContent: "다음 질문으로",
  },
  6: {
    question: "git 컨벤션",
    content: `
         <p style="color: snow; font-size: 2rem"> CarFactory 클래스를 이용하여 자동차 생성하는 기능을 구현했습니다! 커밋할 시간이에요!</p>
         <p style="color: orange; font-size: 1.5rem">
         public Car create() { <br>
         ...
         <br>
         <span class="method-name-container"></span> 
         </p>

         <p style="color: snow; font-size: 2rem">OutputView 클래스에 있는 자동차 객체들의 위치를 출력하는 기능의 오류를 고쳤습니다! 다음 커밋은요?</p>
         <p style="color: orange; font-size: 1.5rem">
         public void printCars(Cars cars) { <br>
         ...
         <br>
         <span class="display-name-container"></span>
         </p>
        `,
    buttonContent: "다음 질문으로",
  },
  7: {
    question: "소개하는 말 한마디",
    content: null,
    buttonContent: "결과 확인하기",
  },
};
