import {
  IsNotEmpty,
  IsOptional,
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint()
class PasswordValidator implements ValidatorConstraintInterface {
  validate(value: any): Promise<boolean> | boolean {
    // 비밀번호 길이는 4~8
    return value.length >= 4 && value.length <= 8;
  }
  defaultMessage?(): string {
    return '비밀번호 길이는 4~8자 이어야 합니다.';
  }
}

function IsPasswordValidate(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: PasswordValidator,
    });
  };
}

export class UpdateMovieDto {
  @IsNotEmpty()
  @IsOptional()
  title?: string;

  @IsNotEmpty()
  @IsOptional()
  genre?: string;

  @IsPasswordValidate()
  test: string;
}
