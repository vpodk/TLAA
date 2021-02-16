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
      foos: {
        1: +(1 === cents),
        5: +(5 === cents),
        10: +(10 === cents),
        20: +(20 === cents),
        50: +(50 === cents),
      }
    };

    return coinsDto;
  };
}

export default CoinsService;
