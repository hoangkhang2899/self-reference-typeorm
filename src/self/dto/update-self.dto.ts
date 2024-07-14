import { PartialType } from '@nestjs/swagger';
import { CreateSelfDto } from './create-self.dto';

export class UpdateSelfDto extends PartialType(CreateSelfDto) {}
