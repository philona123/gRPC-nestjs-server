import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Details } from './app';
import { MathService } from './math.service';

@Controller()
export class AppController {
  constructor(private readonly mathService: MathService) {}

  @GrpcMethod('AppController', 'Accumulate')
  accumulate(person: Details) {
    return this.mathService.accumulate(person.person, person.address);
  }
}
