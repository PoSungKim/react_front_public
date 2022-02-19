# Github Page
> https://posungkim.github.io

> SPA의 각 컴포넌트별 기능 구현
- Github Page Frontend <-> Heroku Backend <-> AWS RDS, Kafka <-> Spark <-> HDFS 

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
    "start"     : "webpack serve --env mode=development",
    "build"     : "webpack       --env mode=production",
    "predeploy" : "yarn build",
    "deploy"    : "gh-pages -d build"
  }
```

- `yarn start`  : Webpack Dev-Server를 통해 Local PC에서 바로 실행 가능
- `yarn build`  : Webpack의 Bundler 기능을 통해 /build/ 디렉토리에 Build
- `yarn deploy` : `predeploy`가 실행된 이후에 자신의 Remote Repository의 gh-pages 브랜치에 Deploy

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
