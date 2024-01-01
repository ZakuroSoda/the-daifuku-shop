# The Daifuku Shop - Divine Daifuku

### Color Palette
1. Primary: #F59EA6
2. Primary-Light-1: #FACACF
3. Primary-Light-2: #FFE1C6
4. Secondary: #FFF7AE
5. Accent: #48284A
6. Accent-Light: #916C80

### Standardisation

#### Casing

1. Database: snake_case
2. JavaScript: camelCase
3. Components: PascalCase
4. API Route: kebab-case

#### Imports

1. node builtin modules
2. external modules
3. modules from a parent directory
4. sibling modules from the same or child directory
5. index of the current directory

#### Others

Due to "legacy" reasons, the / route for the website is at src/app.

Do NOT return messages in the API, ONLY status codes/tokens. Messages like "Success!" should come from front-end.