import {
	IsNotEmpty,
	IsNumber,
	IsObject,
	IsOptional,
	IsString,
  } from 'class-validator';

export class CreateCityDto {
	@IsString()
	@IsNotEmpty()
	name: string;

	description: string;
	active: boolean;
}
