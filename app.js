/**
 * 단원 데이터
 * ─────────────────────────────────────────────
 * 새 단원 추가 시 아래 배열에 항목만 추가하면 됩니다.
 *
 * - file: units/ 폴더 내 HTML 파일명 (없으면 null → "준비 중" 표시)
 * - name: 중단원 이름
 */
const chapters = [
    {
        id: 4,
        title: "4. 도형의 성질",
        units: [
            { id: "4-1", name: "이등변삼각형과 직각삼각형", file: "4-1_이등변삼각형과_직각삼각형_단원설계.html" },
            { id: "4-2", name: "삼각형의 외심과 내심", file: null },
            { id: "4-3", name: "평행사변형", file: null },
            { id: "4-4", name: "여러 가지 사각형", file: null },
        ]
    },
    // 새 대단원 추가 예시:
    // {
    //     id: 5,
    //     title: "5. 도형의 닮음",
    //     units: [
    //         { id: "5-1", name: "도형의 닮음", file: null },
    //     ]
    // },
];

// ── 렌더링 ──
function render() {
    const container = document.getElementById("unit-list");

    container.innerHTML = chapters.map(chapter => `
        <div class="chapter open" data-chapter="${chapter.id}">
            <div class="chapter-header" onclick="toggleChapter(${chapter.id})">
                <span class="chapter-title">${chapter.title}</span>
                <span class="chapter-arrow">▼</span>
            </div>
            <div class="unit-list">
                ${chapter.units.map(unit => {
                    if (unit.file) {
                        return `
                            <div class="unit-item">
                                <a href="units/${encodeURIComponent(unit.file)}" target="_blank">
                                    <span class="unit-number">${unit.id}</span>
                                    <span class="unit-name">${unit.name}</span>
                                    <span class="unit-status status-ready">열람</span>
                                </a>
                            </div>`;
                    } else {
                        return `
                            <div class="unit-item">
                                <span class="unit-number">${unit.id}</span>
                                <span class="unit-name">${unit.name}</span>
                                <span class="unit-status status-pending">준비 중</span>
                            </div>`;
                    }
                }).join("")}
            </div>
        </div>
    `).join("");
}

function toggleChapter(id) {
    const el = document.querySelector(`[data-chapter="${id}"]`);
    el.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", render);
