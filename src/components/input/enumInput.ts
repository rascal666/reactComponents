export const enum Status {
    error = 'input-error',
    success = 'input-success',
    default = 'input-default',
}

export const enum Pattern{
    emptyDrain = '^s*$',
    email = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$',
    phone = ' ^+7s(d{3})sd{3}-d{2}-d{2}$', //+7 (999) 999-99-99)
    password = ' (?=.*[A-Z])(?=.*d)[A-Za-zd]{8,}', // Пароль (минимум 8 символов, одна заглавная буква, одна цифра):
    latin = '^[a-zA-Z]+$' //Проверка на наличие только латинских букв:
}

export const enum WidthBlock {
    width100 = 'input-widthBlock100',
}