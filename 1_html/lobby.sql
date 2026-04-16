-- 1. 로비(방) 정보 테이블 (이미 있다면 컬럼만 확인하세요)
CREATE TABLE LOBBY (
    LOBBY_NO NUMBER PRIMARY KEY,          -- 방 번호 (PK)
    LOBBY_NAME VARCHAR2(100) NOT NULL,    -- 방 제목
    LOBBY_CODE VARCHAR2(50) UNIQUE,       -- 입장 코드
    MAX_PLAYERS NUMBER DEFAULT 4,         -- 최대 인원
    MASTER_ID VARCHAR2(50) NOT NULL,      -- 방장 아이디
    STATUS CHAR(1) DEFAULT 'W'            -- 상태 (W:대기, G:게임중)
);

-- 2. 로비 참여 인원 관리 테이블 (실시간 동기화의 핵심)
CREATE TABLE LOBBY_MEMBER (
    LOBBY_NO NUMBER NOT NULL,             -- 방 번호 (FK)
    USER_ID VARCHAR2(50) NOT NULL,        -- 유저 아이디 (FK)
    READY_STATUS CHAR(1) DEFAULT 'N',     -- 준비 상태 (Y/N)
    JOIN_DATE DATE DEFAULT SYSDATE,       -- 입장 시간 (순서 정렬용)
    PRIMARY KEY (LOBBY_NO, USER_ID),
    FOREIGN KEY (LOBBY_NO) REFERENCES LOBBY(LOBBY_NO) ON DELETE CASCADE
);

-- 3. 방 번호 시퀀스
CREATE SEQUENCE SEQ_LNO NOCACHE;