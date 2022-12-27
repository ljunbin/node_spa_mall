# node_spa_mall

항해99 spa_mall 프로젝트입니다.

개인과제 추가 해야하는 기능

1. 게시글 작성 > postWrite >> apiUrl = /post >>> Method POST
2. 게시글 조회 > postLookup >> apiUrl = /posts >>> Method GET
3. 게시글 상세 조회 > postDetailLookup >> apiUrl = /posts/:_postsid >>> Method GET
4. 게시글 수정 > postEdit >> apiUrl = /posts/:_postsid >>> Method PUT
5. 게시글 삭제 > postDelete >> apiUrl = /posts/:_postsid >>> Method DELETE
6. 댓글 생성 > commentCreate >> apiUrl = /comment/:_postid >>> Method POST
7. 댓글 목록 조회 > commentList >> apiUrl = /comment/:_postid >>> GET
8. 댓글 수정 > commentEdit >> apiUrl = /comment/:_commentid >>> PUT
9. 댓글 삭제 > commentDelete >> apiUrl = /comment/:_commentid >>> DELETE

2022 12 27 시작

** 상세 조회에는 req.params (path variable) 사용 **
