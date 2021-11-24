# Github Page
> https://posungkim.github.io/chatbot
> SPA의 각 페이지 별 기능 구현

- Github Page Front <-> Heroku Backend <-> AWS RDS or EC2 형태로 구성될 예정

<hr>
<br>

## 간단 실행 방법

#### 실행 및 빌드 명령어

<br>

### [Terminal]

```bash
yarn install
yarn start    # port: 4000
```

<br>

### [webpack 기반 실행 및 빌드]

```json
"scripts": {
    "start": "webpack serve --env mode=development",
    "build": "webpack       --env mode=production"
  }
```

- `yarn start` : Webpack Dev-Server를 통해 Local PC에서 바로 실행 가능
- `yarn build` : Webpack의 Bundler 기능을 통해 /build/ 디렉토리에 Build

<br>

## Application 구성 SW

#### 각 SW 별 기능

<br>

### [구성도]

- React
- TypeScript
- Redux, Redux-saga
- Babel
- Eslint
- Webpack
