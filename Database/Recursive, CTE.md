<https://deep-dive-dev.tistory.com/47>
<https://mariadb.com/kb/en/library/recursive-common-table-expressions-overview/>
<http://sweeper.egloos.com/3000836>

##CTE?
> Common Table Expression (CTEs) are a standard SQL feature, and are essentially temporary named result sets. CTEs first appeared in the SQL standard in 1999, and the first implemnetation began appearing in 2007.
CTE(Common Table Expression)는 standard SQL feature이며, SELECT, INSERT, UPDATE, DELETE 또는 CREATE VIEW 문 하나의 실행 범위 내에서 정의되는 임시 결과 집합이다. CTE는 개체로 저장되지 않고 쿼리 지속 시간 동안만 존재한다는 점에서 파생 테이블과 비슷하나, CTE는 파생 테이블과 달리 자체 참조가 가능하며 동일 쿼리에서 여러 번 참조할 수 있다.

##WITH
WITH 절은 CTE 공통 테이블 식을 표현하기 위한 구문이다.
```sql
-- expression_name의 CTE를 생성한다.
WITH expression_name [ ( column_name [,...n] ) ]
AS
(
  CTE_query_definition
)

-- 이후 expression_name을 마치 테이블명처럼 사용할 수 있다.
SELECT <column_list> FROM expression_name
```

##Recursive CTE
SQL문은 일반적으로 recursive 구조를 사용하기 적합하지 않다. 하지만 CTE는 Query 자체를 참조하도록 허용한다. Recursive CTE는 전체 결과 집합을 얻을 때까지 데이터의 하위 집합을 반복적으로 실행하여 계층 구조 데이터나 트리 구조 데이터를 처리할 수 있게 한다. 또한 max_recursive_iterations 옵션을 제공하여 무한루프를 피할 수 있다.
따라서 Recursive CTE를 사용하는 경우는 대부분 계층적 데이터를 표현해야할 때이다.

##Syntax
![image](https://user-images.githubusercontent.com/66898812/127247577-4df167f8-bb61-4dae-a5ec-6558d39afaf6.png)
CTE 식은 Anchor part와 Recursive part로 나누어진다. Anchor part가 먼저 호출되어 첫 번째 결과 집합 T0를 만든다. Ti는 입력으로 사용하고, Ti+1은 출력으로 사용하여 Recursive part를 호출한다. 더 이상 반환할 결과가 없을 때까지 이를 반복하고 모든 결과를 UNION ALL한 결과 집합을 반환한다.

