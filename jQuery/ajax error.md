<https://m.blog.naver.com/afidev/20184722536>
<https://api.jquery.com/jquery.ajax/>

![image](https://user-images.githubusercontent.com/66898812/127414611-38361785-76c0-4df0-9a43-0b27b4e89aff.png)

> - 두번째 인자 textStatus: 'error' 고정 출력
- 세번째 인자 errorThrown: 'Inter Server Error', 'Not Found' 등의 HTTP 오류 출력
- 첫번째 인자 jqXHR Object
- jqXHR.status: http 오류 번호 출력(500, 404 등)
- jqXHR.statusText: 오류 내용 텍스트(세번째 인자 errorThrown과 동일)
- responseText: url의 response full text 출력
- readState: ajax readyState 출력
