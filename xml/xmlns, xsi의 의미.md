[원문](https://blog.naver.com/ljpark6/220767660042)

- xml에서 xmlns의 의미
> xmlns="\*" 는 **해당 애플리케이션이 실행되는 디렉토리**에서 그 **네임스페이스를 사용**하는 **컴포넌트**를 찾는다. 만약 xmlns="ok.gosu.\*"로 하고 아래에서 <gosu:MyComp>라고 하면 MyComp라는 컴포넌트를 /ok/gosu/MyComp.mxml (또는 MyComp.as)를 찾게 된다. 그냥 xmlns="\*"로 하면 현재 디렉토리에서 MyComp.mxml을 찾는다.

- **xsi**는 "http://www.w3.org/2001/XMLSchema-instance"를 가리키는 접두어
> 스키나 문서는 네임스페이스(namespace)로 조직화된다. 모든 이름이 달린 스키마 구성 요소는 target namespace에 속하며, 그 target namespace는 스키마 문서 전체의 속성 중 하나이다. 스키마 문서는 네임스페이스가 같은 다른 스키마 문서를 include할 수 있다. 또한 다른 네임스페이스의 스키마 문서를 import할 수 있다.
> 어떤 인스턴스 문서를 어떤 스키마에 대하여 유효성 검증할 때(assessment라 한다), 유효성 검증에 사용될 스키마는 유효성 검증 엔진에게 인자로 주어질 수도 있고, 인스턴스 문서 자체에서 직접 참조될 수도 있다. 인스턴스 문서가 참조할 때는 두 가지 특별한 애트리뷰트를 사용하는데, *xsi:schemaLocation*과 *xsi:noNamespaceSchemaLocation*이 그것이다. 관습적으로 "xsi"는 "http://www.w3.org/2001/XMLSchema-instance"를 가리키는 접두어로 쓰인다.
> XML Schema 문서는 대개 확장자로 ".xsd"를 갖는다. **XSD XML Schema Definition**에 대한 고유의 Internet Media Type은 아직 등록되지 않았다. 따라서 RFC 3023에 따라 "application/xml" 혹은 "text/xml"을 사용해야 한다.

