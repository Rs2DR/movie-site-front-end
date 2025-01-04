import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Получение текущей директории (аналог __dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Путь к папке с компонентами
const componentsDir = path.resolve(__dirname, '../src/components');

// Основной скрипт
const createComponent = componentName => {
	if (!componentName) {
		console.error('❌ Пожалуйста, укажите имя компонента!');
		return;
	}

	const componentPath = path.join(componentsDir, componentName);

	// Проверяем, существует ли папка
	if (fs.existsSync(componentPath)) {
		console.error(`❌ Компонент "${componentName}" уже существует!`);
		return;
	}

	// Создаём папку компонента
	fs.mkdirSync(componentPath, { recursive: true });

	// Создаём файлы .tsx и .scss
	const tsxContent = `import styles from './${componentName}.module.scss';

export default function ${componentName}() {
  return (
    <div className={styles.${
			componentName.charAt(0).toLowerCase() + componentName.slice(1)
		}}>
      <h1>${componentName} Component</h1>
    </div>
  );
};
`;

	const scssContent = `.${
		componentName.charAt(0).toLowerCase() + componentName.slice(1)
	} {}`;

	fs.writeFileSync(
		path.join(componentPath, `${componentName}.tsx`),
		tsxContent
	);
	fs.writeFileSync(
		path.join(componentPath, `${componentName}.module.scss`),
		scssContent
	);

	console.log(`✅ Компонент "${componentName}" успешно создан!`);
};

// Получаем имя компонента из аргументов командной строки
const componentName = process.argv[2];
createComponent(componentName);
