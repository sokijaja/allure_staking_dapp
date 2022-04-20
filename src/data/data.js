const DATA = {
  token: '0x33245490E342945234243u430',
  name: 'jhon dai',
  balance: 242800.3098,
  qurency: 'AET',
  date: new Date(),
  avatar: '/mock/avatar/avatar_1.jpg',
  totalDeposit: 451,
  totalChange: 0.01204,
  rewards: 200,
  aetAmount: 193376,
  ethAmount: 81.7817,
  transactions: [...Array(5)].map((_, index) => (
    {
      to: '0x6d465490ef2a10x6d465490ef2a1',
      value: 0.234 * index + 0.1,
      status: '2022/02/03 10:20',
      currency: 'Ether',
    }
  )),
  withdrawAmount: 500,
  withdrawPeriod: 3,
}
export default DATA;