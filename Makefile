install:
	npm run build && cd functions/generate-label && npm i && npx playwright install