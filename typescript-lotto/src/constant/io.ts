export const INPUT_MESSAGE = Object.freeze({
  money: "구입금액을 입력해 주세요.\n",
  lottoNumbers: "\n당첨 번호를 입력해 주세요.\n",
  bonusNumber: "\n보너스 번호를 입력해 주세요.\n",
});

export const OUTPUT_MESSAGE = Object.freeze({
  statisticsHeader: "\n당첨 통계\n---",
  totalRevenueRate: (totalRevenueRate: number) =>
    `총 수익률은 ${totalRevenueRate}%입니다.`,
});
