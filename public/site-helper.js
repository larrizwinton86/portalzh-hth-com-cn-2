(function() {
    "use strict";

    const siteDomain = "https://portalzh-hth.com.cn";
    const centralTag = "华体会";

    const notificationData = [
        {
            id: "tip-notice-001",
            content: `欢迎访问 ${centralTag} 登录页面，请通过 ${siteDomain} 确认正式入口。`,
            type: "info"
        },
        {
            id: "tip-notice-002",
            content: "请勿向他人透露您的账户凭证，包括密码与验证码。",
            type: "warning"
        },
        {
            id: "tip-notice-003",
            content: "系统升级期间部分服务可能暂时不可用，敬请谅解。",
            type: "info"
        }
    ];

    const keywordBadges = [
        { label: "安全验证", color: "#2c7be5" },
        { label: centralTag, color: "#e63757" },
        { label: "官方通道", color: "#00a389" },
        { label: "最新活动", color: "#f5803e" }
    ];

    function createCardContainer() {
        const cardWrapper = document.createElement("div");
        cardWrapper.className = "gh-card-panel";
        cardWrapper.style.cssText = "position:fixed; top:20px; right:20px; z-index:9999; max-width:320px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;";

        const titleBar = document.createElement("div");
        titleBar.textContent = "📌 访问提示";
        titleBar.style.cssText = "background:#1e293b; color:#f1f5f9; padding:10px 16px; border-radius:10px 10px 0 0; font-weight:600; font-size:15px; letter-spacing:0.3px;";
        cardWrapper.appendChild(titleBar);

        const bodyArea = document.createElement("div");
        bodyArea.style.cssText = "background:#ffffff; border:1px solid #e2e8f0; border-top:none; border-radius:0 0 10px 10px; padding:12px 16px; box-shadow:0 4px 12px rgba(0,0,0,0.08);";

        notificationData.forEach(function(item) {
            const note = document.createElement("p");
            note.textContent = item.content;
            note.style.cssText = "margin:6px 0; padding:8px 10px; border-radius:6px; font-size:13px; line-height:1.45;";
            if (item.type === "warning") {
                note.style.background = "#fff3cd";
                note.style.color = "#856404";
                note.style.borderLeft = "4px solid #f0ad4e";
            } else {
                note.style.background = "#e9f7fe";
                note.style.color = "#0c5460";
                note.style.borderLeft = "4px solid #17a2b8";
            }
            bodyArea.appendChild(note);
        });

        const badgeRow = document.createElement("div");
        badgeRow.style.cssText = "margin-top:12px; display:flex; flex-wrap:wrap; gap:6px;";

        keywordBadges.forEach(function(badge) {
            const span = document.createElement("span");
            span.textContent = badge.label;
            span.style.cssText = "display:inline-block; padding:4px 12px; border-radius:20px; font-size:12px; font-weight:500; color:#fff; background:" + badge.color + ";";
            badgeRow.appendChild(span);
        });

        bodyArea.appendChild(badgeRow);

        const footNote = document.createElement("div");
        footNote.style.cssText = "margin-top:12px; padding-top:8px; border-top:1px solid #e2e8f0; font-size:11px; color:#64748b; text-align:center;";
        footNote.innerHTML = `🔗 访问来源：<a href="${siteDomain}" target="_blank" rel="noopener noreferrer" style="color:#1d4ed8; text-decoration:underline;">${siteDomain}</a>`;
        bodyArea.appendChild(footNote);

        cardWrapper.appendChild(bodyArea);
        return cardWrapper;
    }

    function initSiteHelper() {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", function() {
                document.body.appendChild(createCardContainer());
            });
        } else {
            document.body.appendChild(createCardContainer());
        }
    }

    if (typeof window !== "undefined" && window.document) {
        initSiteHelper();
    }
})();