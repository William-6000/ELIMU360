import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('platform')
@Controller()
export class AppController {
  @Get()
  @ApiOkResponse({ description: 'Platform welcome response.' })
  getWelcome() {
    return {
      name: 'Elimu360',
      message: 'CBC Senior School learning platform API',
      documentation: '/docs',
      health: '/api/v1/health',
    };
  }
}
