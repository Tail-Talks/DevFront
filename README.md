# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---

# Документация front-end

## Обзор проекта

## Предварительные требования

Необходимые инструменты:

- Node.js (версия >= 14.x)
- npm (версия >= 6.x)

## Начало работы

Для начала работы с проектом:

### 1. Клонируйте репозиторий

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Переключитесь на ветку `dev`

```bash
git checkout dev
```

### 3. Установите зависимости

```bash
npm install
```

## Разработка

Для запуска сервера разработки используйте следующую команду:

```bash
npm start
```

Это запустит сервер разработки по адресу `http://localhost:3000/`.

## Скрипты

В проекте доступны следующие скрипты:

- `npm start`: Запускает сервер разработки.
- `npm run build`: Собирает приложение для продакшена.
- `npm test`: Запускает тестовый набор.
- `npm run eject`: Извлекает конфигурацию Create React App (используйте с осторожностью).

## Стилизация

В проекте используется Tailwind CSS для стилизации. Вы можете добавлять классы Tailwind непосредственно в ваши компоненты React. Для более тонкой настройки можно изменить файл `tailwind.config.js`.

## TypeScript

Проект написан на TypeScript. Обязательно используйте правильные типы для ваших компонентов и функций. Файл `tsconfig.json` содержит конфигурацию TypeScript.

## Тестирование

В проекте используется Jest и Testing Library для тестирования. Чтобы запустить тесты, используйте следующую команду:

```bash
npm test
```

Вы можете писать тесты в файлах с расширением `.test.tsx` и размещать их рядом с компонентами, которые они тестируют.

## Сборка

Для сборки проекта для продакшена используйте следующую команду:

```bash
npm run build
```

Эта команда создаст оптимизированную сборку в директории `build/`.

## Внесение изменений

Для внесения изменений в проект следуйте этим шагам:

1. Форкните репозиторий.
2. Создайте новую ветку (`git checkout -b feature-branch`).
3. Внесите свои изменения.
4. Зафиксируйте изменения (`git commit -m 'Add some feature'`).
5. Отправьте изменения в удаленный репозиторий (`git push origin feature-branch`).
6. Создайте pull request.

## Лицензия

Этот проект лицензирован под [MIT License](LICENSE).

## Оформление кода

Для обеспечения единообразия кода и облегчения его чтения и сопровождения, пожалуйста, следуйте следующим правилам оформления кода:

1. **Имена переменных и функций:**
   - Используйте camelCase для имен переменных и функций.
   - Пример: `const myVariable = 10;`, `function doSomething() {}`.

2. **Имена компонентов:**
   - Используйте PascalCase для имен компонентов.
   - Пример: `const MyComponent: React.FC = () => {};`.

3. **Структура файлов:**
   - Один файл должен содержать один компонент.
   - Компоненты должны быть расположены в папке `components`.

4. **Использование комментариев:**
   - Используйте комментарии для пояснения сложных участков кода.
   - Пример:
     ```javascript
     // Этот компонент отвечает за отображение заголовка
     const Header: React.FC = () => {
       return <h1>Заголовок</h1>;
     };
     ```

5. **Форматирование кода:**
   - Используйте отступы в 1 tab.
   - Следуйте рекомендациям по форматированию от ESLint и Prettier (если они настроены).

6. **Типизация:**
   - Всегда указывайте типы для переменных и функций в TypeScript.
   - Пример:
     ```typescript
     const myFunction = (param: string): number => {
       return param.length;
     };
     ```

7. **Tailwind CSS:**
   - Используйте классы Tailwind CSS для стилизации компонентов.
   - Избегайте использования встроенных стилей (inline styles).

---
