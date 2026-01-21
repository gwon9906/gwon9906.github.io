# Cover Letter 사용 안내

## 비밀 URL로 접근

Cover Letter는 공개 포트폴리오에 노출되지 않도록 비밀 URL로 접근할 수 있습니다.

### 접근 방법

```
https://gwon9906.github.io/#cover-letter-xyz789abc
```

- `#cover-letter-` 뒤에 아무 문자열이나 추가하면 접근 가능
- 예시:
  - `#cover-letter-analogai`
  - `#cover-letter-2025-01`
  - `#cover-letter-xyz789abc`

### 사용 시나리오

1. **이메일 지원 시**:
   - 비밀 URL을 생성 (예: `#cover-letter-analogai-2025`)
   - 이메일에 링크 첨부: "자기소개서는 [이곳](https://gwon9906.github.io/#cover-letter-analogai-2025)에서 확인하실 수 있습니다."

2. **PDF로 저장**:
   - 비밀 URL로 접속
   - 우측 상단 "PDF로 저장" 버튼 클릭
   - 브라우저 인쇄 기능으로 PDF 생성

3. **내용 수정**:
   - `src/components/CoverLetter.tsx` 파일 편집
   - Resume와 동일한 스타일 자동 적용됨

## 내용 커스터마이징

### 날짜 변경
```tsx
{t('2025년 1월 21일', 'January 21, 2025')}
```

### 수신자 변경
```tsx
<div style={{ color: '#64748b' }}>
  {t('아날로그아이 귀중', 'AnalogAI Inc.')}
</div>
```

### 본문 내용 수정
각 문단의 `<p className="section-content">` 내부 텍스트 수정

## 보안 고려사항

- 비밀 URL이라도 추측 가능한 패턴은 피하세요
- 각 회사별로 다른 URL 사용 권장 (예: `#cover-letter-company-date`)
- 필요한 경우 Git에 커밋하지 않고 로컬에서만 수정 후 배포

## 스타일 수정

Resume와 동일한 CSS (`Resume.css`) 사용:
- A4 크기 페이지
- 인쇄 최적화
- 동일한 헤더 및 폰트 스타일

---

**참고**: 이 파일은 `.gitignore`에 추가하여 공개 저장소에 올라가지 않도록 관리할 수 있습니다.
