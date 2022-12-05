import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmployeeDto } from './employee.dto';
import { EmployeeService } from './employee.service';

@Controller('/employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  async getEmployees() {
    return await this.employeeService.getEmployees();
  }

  @Post()
  async postEmployee(@Body() employee: EmployeeDto) {
    return await this.employeeService.postEmployee(employee);
  }
}
