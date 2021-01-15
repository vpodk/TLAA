import { CoinsDto } from '../dtos/coins.dto';

class CoinsService {
  public getCoins = async (totalNum: string): Promise<CoinsDto> => {
    const coinsDto = new CoinsDto();
    // TODO: Add service logic
    return coinsDto;
  };
}

export default CoinsService;
