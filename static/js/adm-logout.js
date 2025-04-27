// 타임아웃 변수 초기화
let timeoutDuration = (30 * 60) - 1; // 30분을 초 단위로 변환
let timer = null;
let redirectUrl = "/doLogout"; // 로그아웃 페이지 URL

// 타이머 시작 함수
function startLogoutTimer() {
    // 이미 실행 중인 타이머가 있다면 초기화
    if (timer) {
        clearInterval(timer);
    }

    // 남은 시간을 초기화
    let remainingTime = timeoutDuration;

    // 타이머 엘리먼트들 가져오기 (클래스가 logoutTime인 모든 p 태그)
    const timerElements = document.querySelectorAll(".logoutTime");

    // 초기 시간 표시 (모든 엘리먼트에 적용)
    updateTimerDisplay(remainingTime, timerElements);

    // 1초마다 시간 업데이트
    timer = setInterval(() => {
        remainingTime--;

        // 남은 시간 표시 업데이트
        updateTimerDisplay(remainingTime, timerElements);

        // 시간이 다 되면 로그아웃 페이지로 리다이렉트
        if (remainingTime <= 0) {
            clearInterval(timer);
            window.location.href = redirectUrl;
        }
    }, 1000);

    return timer;
}

// 타이머 표시 업데이트 함수
function updateTimerDisplay(seconds, elements) {
    if (!elements || elements.length === 0) return;

    // 분과 초 계산
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    // mm:ss 형식으로 표시
    const formattedTime = `${padZero(minutes)}:${padZero(remainingSeconds)}`;

    // NodeList나 단일 엘리먼트 모두 처리 가능하도록
    if (elements instanceof NodeList) {
        // 모든 엘리먼트에 시간 표시 적용
        elements.forEach(element => {
            element.textContent = formattedTime;
        });
    } else if (elements instanceof Element) {
        // 단일 엘리먼트인 경우
        elements.textContent = formattedTime;
    }
}

// 숫자 앞에 0 붙이기 (1자리 숫자의 경우)
function padZero(number) {
    return number.toString().padStart(2, '0');
}

// 사용자 활동 감지 및 타이머 재설정
function setupUserActivityDetection() {
    // 사용자 활동으로 간주할 이벤트들
    const events = ['mousedown', 'keypress', 'scroll', 'touchstart'];

    // 각 이벤트에 대해 리스너 등록
    events.forEach(event => {
        document.addEventListener(event, resetTimer, false);
    });
}

// 타이머 재설정 함수
function resetTimer() {
    // 기존 타이머 제거
    if (timer) {
        clearInterval(timer);
    }

    // 타이머 다시 시작
    startLogoutTimer();
}

// 페이지 로드 시 타이머 시작 및 사용자 활동 감지 설정
window.addEventListener('load', () => {
    startLogoutTimer();
    setupUserActivityDetection();
});

// 타임아웃 시간 설정 함수 (필요한 경우)
function setTimeoutDuration(minutes) {
    timeoutDuration = minutes * 60;
    resetTimer();
}

// 로그아웃 URL 설정 함수 (필요한 경우)
function setRedirectUrl(url) {
    redirectUrl = url;
}