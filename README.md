<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework 학습 레포

## 25-01-02

### Nest Life Cycle

- Request -> Middleware -> Guard -> Interceptor -> Pipe -> **Module**(요청 로직 처리 부분, Controller, Service, Repository) -> Exception Filter -> Interceptor -> Response

### Module

- Controller (요청이 가장 먼저 들어옴, 비슷한 api들을 하나로 묶어주는 역할)
- Service (business logic 수행, Controller가 실행)
- Repository (데이터 저장 수행)

### Code를 작성하는 방식? 순서?

1. Contoroller 메서드 정의 (get, post, patch, delete 등)
2. ~~애너테이션~~ 데코레이터 정의
3. Route 정의
   - 각 메서드 ~~애너테이션~~ 데코레이터 인자로 route 작성 가능
   - 공통된 route는 Controller ~~애너테이션~~ 데코레이터 인자에 선언, 그 외의 route는 각 메서드 ~~애너테이션~~ 데코레이터에 선언

### 객체지향

1. 메세지 전송
   - 객체.메서드(추가 정보)
   - `chef.cook(“라면”)` -> what
2. 메서드
   - 수신한 메시지를 처리하기 위한 내부적으로 선택하는 방법 -> how

```ts
class Chef {
  cook(what: '라면' | '김밥') {
    // 로직 수행
    return what;
  }
}
```

3. 객체지향의 중심은 클래스가 아닌 객체의 역할, 책임, 협력에 집중!!

## 25-01-03

1. DIP(Dependency Inversion Principle)
   - 고수준에서는 interface만 정의, 저수준에서 implements. 즉, 고수준의 규약을 따른다
   - 고수준(도메인)이 저수준(어댑터)에게 이 기능 만들어줘라고 요구하는 것
   - 고수준은 저수준이 어찌됐든 상관없음. why? interface에만 의존하고있으니까
2. [프론트에서 DIP 예시 아티클](https://velog.io/@yesbb/%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-%EC%9D%98%EC%A1%B4%EC%84%B1-%EC%97%AD%EC%A0%84-%EC%9B%90%EC%B9%99%EC%9D%84-%EC%A0%81%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%95%98%EB%8B%A4feat.-%EC%A2%8B%EC%9D%80%EC%84%A4%EA%B3%84%EB%9E%80%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C)

## 25-01-06

1. 영속성: 데이터를 생성한 프로그램이 종료가 되고 나서도 사라지지 않는 데이터의 특성을 말함
2. Entity -> 실제 DB 테이블과 맵핑되는 객체
   - 테이블 이름 -> 엔티티(클래스 이름)
   - 테이블 컬럼 -> 필드(속성) -> 같을 수 있어서 id기반으로 관리되어야함
   - 테이블 로우 -> 하나의 인스턴스
   - TypeORM은 Code-first 방식. 즉, Entity 클래스가 데이터베이스와 연결되어있는 핵심 클래스이고 데이터 베이스 영속성을 위해 사용하는 것. 그래서 요청이나 응답 값을 전달하는 클래스로 사용하는 것에는 맞지 않음
     - Entity 클래스를 기준으로 테이블이 생성되고 스키마가 변경되기 때문에 Entity는 데이터 교환용으로 절대 사용하면 안되는데, 만약 많은 서비스 클래스나 비지니스 로직들이 Entity 클래스를 기준으로 동작할 때, 혹은 View가 변경될 때마다 Entity 클래스에 같이 변경을 가하게 되면 데이터베이스 구성 자체에 영향이 가기때문에 이와 연관된 다른 여러 클래스에도 의존하여 영향을 줄 수 있게 되기 때문
3. DTO? DAO?
   - [참고](https://cdragon.tistory.com/m/entry/NestJS-1-NestJS%EC%9D%98-%EA%B5%AC%EC%A1%B0-%EB%B0%8F-%EA%B4%80%EB%A0%A8-%EC%9A%A9%EC%96%B4-%EC%A0%95%EB%A6%AC%EB%B0%B1%EC%97%94%EB%93%9C%EC%9D%98-%EB%AA%A8%EB%93%A0-%EA%B2%83?category=1070665)
