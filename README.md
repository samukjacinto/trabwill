# Calculadora Modular (React Native / Expo)

## Como rodar
```
npx create-expo-app calculadora --template blank
# copie App.js e a pasta src/ para dentro do projeto criado
npx expo start
```
Nenhuma dependência extra além do template.

**Antes de apresentar:** edite `src/constants/config.js` e coloque seu nome completo.

## Estrutura
```
App.js                      -> monta a tela
src/
  pages/CalculatorScreen.js -> tela: junta Header + Display + KeyPad + hook
  components/               -> Header, Display, Button, KeyPad (só UI, só props)
  hooks/useCalculator.js    -> estado + ações da calculadora
  logic/mathOperations.js   -> matemática pura (sem React)
  constants/                -> config (título), theme (cores), keypadLayout
```
