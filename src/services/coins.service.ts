import { CoinsDto } from '../dtos/coins.dto';

class CoinsService {
  public getCoins = async (totalNum: string): Promise<CoinsDto> => {
    const coinsDto = new CoinsDto();
    // TODO: Add service logic
    const [dollars, cents] = totalNum.split('.').map((n) => +n);

    coinsDto.total = +totalNum;
    coinsDto.coins = {
      bars: {
        1: ~~(+totalNum % 2),
        2: ~~(dollars / 2),
      },
      foos: [1, 5, 10, 20, 50].reduce((foos, num) => {
        foos[num] = +(num === cents);
        return foos;
      }, {})
    };

    return coinsDto;
  };
}

export default CoinsService;
