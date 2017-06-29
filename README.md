개인적으로 VueJS 기능을 테스트 및 사용방법을 예제로 구현합니다.

### Install
```
$bower install bootstrap vue moment moment-timezone rivets
```


### bower.json 파일의 의미
```
name: (필수값) 팩키지명
version: 버전 정보
main: 패키지의 엔드포인트
ignore: 패키지를 설치할 때 bower가 무시할 파일 목록
dependencies : 프로덕션에서 사용할 패키지 의존성 정보
devDependencies : 개발용 패키지 의존성 정보

```

### bower.json 버전 정보
```
https://blog.outsider.ne.kr/1041 사이트 참조

```

### 2017.06.29
#### querystring add

> 파싱하는 방법
```
//url http://localhost/?foo=bar&cow=moo
querystring.parse(); //no argument passed in assumes window.location.search
// returns { foo: 'bar', cow: 'moo' }

```

> Query String 구성하는 방법
```
querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' })
// returns 'foo=bar&baz=qux&baz=quux&corge='
```

### 공공데이터포털 API 사용법
* https://www.data.go.kr/

### 이슈 정리
#### Allow-Control-Allow-Origin
```
크롬에서 RESTful API를 호출시에 Allow-Control-Allow-Origin 오류 발생하는 문제, 크롬 확장프로그램 중에서 "Allow-Control-Allow-Origin: *" 설치하면 해결 할 수 있다.
```