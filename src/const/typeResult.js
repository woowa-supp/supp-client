export const TYPES = [
  "mad_scientist",
  "macgyver",
  "the_architect",
  "code_guardian",
  "ninja",
];

export const TYPE_RESULT = {
  mad_scientist: {
    name: "미치광이 과학자",
    description:
      "    당신은 혁신적인 솔루션 만들기를 좋아하는 미치광이 과학자입니다.\n" +
      "    당신의 취미는 새로운 툴, 텍스트 편집기 및 프레임 워크를 배우고 프로젝트에 적용하여 다른 사람의 호기심을 자극합니다.\n" +
      "    당신은 항상 최신의 것을 추구합니다.\n" +
      "    당신이 일을 제시간에 마치는 것보다 지구 종말이 더 가능성 있겠네요!\n",
    famousSaying:
      '    <p class="mb-4">\n' +
      "      Imagination is more important than knowledge. For knowledge is limited to all we now know and understand, while imagination embraces the entire world, and all there ever will be to know and understand - Einstein\n" +
      "      <br/>\n" +
      "      상상력은 지식보다 더 중요하다. 지식은 우리가 이미 알고 이해하는 것에 한정되지만 상상력은 전체 세계와, 장차 우리가 알고 이해하게 될 모든 것을 다 포용하기 때문이다.</p>\n" +
      '    <p class="mb-4">At last! My greatest invention is now completed! - Dexter\n' +
      "      <br/>드디어! 나의 최고의 발명품이 완성되었어!!!!</p>\n" +
      '    <p class="mb-4">Any fool can know. The point is to understand - Einstein\n' +
      "      <br/>\n" +
      "      어떠한 바보도 이해가 중요하다는 걸 알 거야.",
    lastSaying:
      "  <span>\n" +
      "    <b>If you can’t explain it simply you don’t understand it well enough - Einstein</b>\n" +
      "    <br/>\n" +
      "    만약 당신이 어떤 것을 간단하게 설명하지 못한다면 당신은 그걸 충분히 이해하지 못한 것이다.\n" +
      "  </span>",
  },
  macgyver: {
    name: "맥가이버",
    description:
      "<span>\n" +
      "    당신의 주위엔 항상 노트북과 커피 그리고 slipp.net이 있습니다.\n" +
      "    <br/>\n" +
      "    당신은 내일 지구가 멸망하더라도 오늘 한 줄의 코드를 작성할 사람입니다.\n" +
      "    할 일이 많나요? 문제없죠! 당신은 멀티태스킹에 능하고 시간은 당신의 편이랍니다.\n" +
      "    <br/>\n" +
      "    당신은 똑똑하고 매력적이에요. 그리고 남을 기다리게 하지 않기에 모두 당신을 좋아해요!😍\n" +
      "    그렇지만 당신의 코드 퀄리티에 대해서는 조심하세요! 서둘렀기에 아쉬울 수 있어요.\n" +
      "  </span>",
    famousSaying:
      '<p class="mb-4">\n' +
      "      Everyone knows that […] something cannot be done until someone comes along who doesn’t know that - Einstein\n" +
      "      <br/>\n" +
      "      모든 사람들은 불가능한 것을 이룰 수 없다고 생각합니다. 불가능하다고 생각하지 않는 사람이 그걸 이루기 전까진.\n" +
      "    </p>",
    lastSaying:
      "<span>\n" +
      "    <b>Hurry slowly!</b>\n" +
      "    <br/>\n" +
      "    천천히 서둘러!\n" +
      "  </span>",
  },
  the_architect: {
    name: "설계자",
    description:
      "<span>\n" +
      "    당신은 설계자입니다!\n" +
      "    <br/>\n" +
      "    영화 매트릭스 속 세계를 창시한 설계자같이 당신은 지식이 풍부해요.\n" +
      "    그리고 다른 사람들이 생각할만한 건 이미 다 만들 수 있죠!\n" +
      "    한마디로 당신은 모.든.것을 알아요. 이론의 신이라고 불리죠.\n" +
      "    <br/>\n" +
      "    당신은 더 빨리 동작하는 완벽한 코드를 만들기 위해 요구 사항을 탐색하고 최적화해요.\n" +
      "    당신은 모든 가능성을 고려해서 완벽하게 돌아가는 깔끔한 코드를 작성합니다.\n" +
      "    당신이 키보드로 작성한 코드 한 줄 한 줄은 코딩 가이드라인을 따르며 심지어는 MIT 학생들의 롤 모델이 될 수 있습니다.\n" +
      "  </span>",
    famousSaying:
      '<p class="mb-4">\n' +
      "      He alone is poor who does not possess knowledge - The Talmud\n" +
      "      <br/>\n" +
      "      지식 없는 사람은 가난하다...😥\n" +
      "    </p>",
    lastSaying:
      "<span>\n" +
      "    <b>An ounce of practice is better than tons of theory - Swami Shivananda</b>\n" +
      "    <br/>\n" +
      "    백문이 불여일견\n" +
      "    <br/>\n" +
      "    <b>To err is human - Seneca the Elder</b>\n" +
      "    <br/>\n" +
      "    인간은 실수하기 마련이다.\n" +
      "  </span>",
  },
  code_guardian: {
    name: "코드 수호자",
    description:
      "<span>\n" +
      "    버그! 작업! 배포! 모든 건 가뿐하게! 최고의 코드 수호자가 여기 있습니다!\n" +
      "    <br/>\n" +
      "    당신은 <b>코드에 파고 들기</b>를 두려워하지 않습니다!\n" +
      "    <br/>\n" +
      "    당신의 키보드는 날카로운 검과 같아서 코드 라인의 문제를 싹둑! 잘라버립니다.\n" +
      "    체크무늬 셔츠는 당신의 영혼의 동반자입니다.\n" +
      "    <br/>\n" +
      "    당신은 열심히 일하기에 개발자들 사이에서 존경을 받습니다.\n" +
      "    당신은 코딩 원칙을 완벽히 지키며 새로운 도전을 경험을 쌓을 기회로 여깁니다.\n" +
      "    당신은 고독한 늑대처럼 혼자 코딩하기를 선호하지만 협업이 성공의 핵심이라는 것 또한 알고 있습니다.\n" +
      "  </span>",
    famousSaying:
      '<p class="mb-4">\n' +
      "      The three great essentials to achieve anything worthwhile are, first, hard work; second, stick-to-itiveness; third, common sense - Thomas A. Edison\n" +
      "      <br/>\n" +
      "      가치 있는 것을 달성하기 위해 중요한 세 가지는, 첫째는 노력, 둘째는 충실, 셋째는 상식이다.\n" +
      "    </p>\n" +
      '    <p class="mb-4">\n' +
      "      A dream doesn’t become reality through magic; it takes sweat, determination, and hard work - Colin Powell\n" +
      "      <br/>\n" +
      "      꿈은 마법처럼 이뤄지지 않는다. 땀과 헌신 그리고 노력이 필요하다.\n" +
      "    </p>",
    lastSaying:
      "<span>\n" +
      "    <b>You must gather your party before venturing forth - Baldur’s Gate game</b>\n" +
      "    <br/>\n" +
      "    모험을 떠나기 전에 팀을 꾸려야 해요..!😎👨‍👩‍👧‍👦\n" +
      "  </span>",
  },
  ninja: {
    name: "닌자",
    description:
      "<span>\n" +
      "    모든 개발자들 사이에서 가장 위대한.... 닌자!!\n" +
      "    <br/>\n" +
      "    당신은 프로그래밍에 타고났습니다.\n" +
      "    당신은 프로그래밍하는 데에 많은 공간을 필요로 하는 외로운 늑대입니다. 그리고 연습과 동기 부여가 완벽의 열쇠라는 것을 알고 있습니다.\n" +
      "    <br/>\n" +
      "    당신은 군중들과 매끄럽게 조화를 이루고 모든 상황에 신속하게 적응할 수 있습니다. 그래서 입사 첫날에도 사람들은 당신이 새로 왔다고 생각하지 않죠.\n" +
      "    비록 사람들이 종종 당신의 이름을 모르더라도 일처리가 빠르기 때문에 사람들은 당신의 존재를 느낍니다.\n" +
      "    비록 당신은 팀에 왔다 가는 존재일 수 있지만 모든 사람들은 당신을 믿습니다.\n" +
      "    <br/>\n" +
      "    그리고 당신의 지식과 스킬은 프로젝트를 구원합니다(한 번만 구원하는 게 아닙니다..)\n" +
      "  </span>",
    famousSaying:
      '<p class="mb-4">\n' +
      "      For those regarded as warriors, when engaged in combat the vanquishing of thine enemy can be the warrior’s only concern. Suppress all human emotion and compassion. Kill whoever stands in thy way, even if that be Lord God, or Buddha himself. This truth lies at the heart of the art of combat - Hattori Hanzo\n" +
      "      <br/>\n" +
      "      전사로서 전투에 참전할 때는 적을 무찌르는 게 전사의 유일한 관심사일 수 있습니다. 모든 인간적 감정과 동정심을 억제하십시오. 신이나 부처가 길을 막고 있더라도 가차없이 죽이십시오. 이게 전투의 모든 것입니다.\n" +
      "    </p>\n" +
      '    <p class="mb-4">\n' +
      "      Unpreparedness is One’s Greatest Enemy - Yudan Taiteki\n" +
      "      <br/>\n" +
      "      준비하지 않음이 가장 큰 적이다.\n" +
      "    </p>",
    lastSaying:
      "<span>\n" +
      "    <b>Don’t commit seppuku[일본 사무라이 자결] when something went wrong, start to cooperate with other people.</b>\n" +
      "    <br/>\n" +
      "    문제가 생기면 혼자 떠안으려 하지 말고 다른 사람들과 협업을 시작하세요.\n" +
      "  </span>",
  },
};
