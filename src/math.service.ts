import { Injectable } from '@nestjs/common';
import { Address, Details, Person } from './app';

@Injectable()
export class MathService {
  public accumulate(data: Person, address: Address): Details {
    return { person: data, address };
  }
}
