import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeDto } from './employee.dto';
import { EmployeeEntity } from './employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeEntity)
    private readonly employeeRepository: Repository<EmployeeEntity>,
  ) {}

  async getEmployees(): Promise<EmployeeEntity[]> {
    return await this.employeeRepository.find();
  }

  async postEmployee(employee: EmployeeDto): Promise<EmployeeDto> {
    return await this.employeeRepository.save(employee);
  }
}
