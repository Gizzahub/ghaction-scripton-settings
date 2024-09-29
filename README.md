# Github의 설정을 변경해주는 액션

이게 되려나?

- 설정값을 공개하기 좀 그른 경우 .settings에 설정값 저장해야하려나
- User.github에서는 사용자 설정 변경가능
- Organization.github에서는 리포지터리와 Organization 설정 변경가능
- 기타는 각각의 리포지터리 설정만 가능

권한이 문제 안되면 직접 personal token생성해서 입력하는거로 프로젝트 설정과
조직설정의 우선순위 등만 주의

참고프로젝트

- https://github.com/actions/hello-world-docker-action
- https://github.com/actions/typescript-action
- https://github.com/actions/hello-world-javascript-action
- https://github.com/actions/javascript-action
- https://github.com/actions/starter-workflows

참고독s
- https://docs.github.com/ko/actions/security-for-github-actions/security-guides/automatic-token-authentication
- https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#update-a-repository

env
https://stackoverflow.com/questions/73955908/how-to-use-env-variable-as-default-value-for-input-in-github-actions
