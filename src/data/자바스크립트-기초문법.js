export const accessibilityCollection = {
	name: "자바스크립트 기초문법",
	areas: [
		{
			skills: [
				{// 변수 자료형 연산자
					name: "변수 자료형 연산자",
					description: {
						// text: "Learn about the accessibility tree and how assistive technology uses it.",
						text: "자바스크립트의 변수 자료형 연산자에 대한 이해",
						links: [
							["velog.io - 변수,자료형,연산자", "https://velog.io/@fltxld3/JS-%EB%B3%80%EC%88%98-%EC%9E%90%EB%A3%8C%ED%98%95-%EC%97%B0%EC%82%B0%EC%9E%90"]
						]
					},
					skills: [
						{
							name: "변수란",
							description: {
								text: "변수란 무엇인지 알아보자",
								links: [
									["Javascript Info - 변수와 상수 ", "https://ko.javascript.info/variables"],
									["MDN Web Docs - Grammer and Types", "https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Grammar_and_types"],
								]
							}
						},
						{
							name: "자료형 이해하기",
							description: {
								text: "자바스크립트의 자료형에 대한 이해",
								links: [
									["MDN Web Docs - Data Structures", "https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures"],
								]
							},
						},
						{
							name: "연산자 이해하기",
							description: {
								text: "자바스크립트에서의 연산자에 대한 이해",
								links: [
									["Tistory - 연산자 이해하기", "https://bigtop.tistory.com/16"],
									["netlify - 자바스크립트의 연산자", "https://ykss.netlify.app/javascript/Javascript_Basic(4)/"],
								]
							},
							skills: [
							{
								name: "연산자 깊게 알아보기",
								description: {
									text: "연산자를 이용해 손쉽게 할수 있는 여러가지 방법에 대해 깊이있게 알아보기",
									links: [
										["Javascript.Info - 논리 연산자", "https://ko.javascript.info/logical-operators"],
										["MDN Web Docs - Optional Chaining", "https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining"],
									]
								}
							}
							]
						},
					]
				},
				{  // 제어문
					name: "제어문",
					description: {
						text: "프로그램의 순차적인 흐름을 제어해야 할 때 사용하는 실행문에 대해 알아보기",
						links: [
							["Tistory - 제어문", "https://cofs.tistory.com/136"],
							["velog - 제어문", "https://velog.io/@najiexx/JavaScript-%EC%A0%9C%EC%96%B4%EB%AC%B8"]
						]
					},
					skills: [
						{
							name: "if문",
							description: {
								text: "if 조건문에 대해 알아보기",
								links: [
									["Tistory - if문", "https://creatorjo.tistory.com/28"],
									["Javascript.Info - 조건처리", "https://ko.javascript.info/ifelse"],
									["Tistory - if문", "https://pathas.tistory.com/19"],
								]
							}
						},
						{	// for문
							name: "for문",
							description: {
								text: "반복을 제어할수 있는 for문과 for문의 종류",
								links: [
									["everdevel - for문", "https://www.everdevel.com/JavaScript/js-for/"],
									["Tistory - for문의 종류", "https://yong-nyong.tistory.com/9"]
								]
							},
							skills: [
								{
									name: "중첩 for문",
									description: {
										text: "Learn how to create a sensible tab order and how to make it easy for the users to locate the currently focused element.",
										links: [
											["web.dev - Control focus with tabindex", "https://web.dev/control-focus-with-tabindex/"],
											["Google Devs - Focus", "https://developers.google.com/web/fundamentals/accessibility/focus/"],
											["Google Devs - Dom Order Matters", "https://developers.google.com/web/fundamentals/accessibility/focus/dom-order-matters"],
											["Google Devs - Using Tabindex", "https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex"],
											["Google Devs - Track Focus", "https://developers.google.com/web/tools/chrome-devtools/accessibility/focus"],
											["MDN - :focus-visible", "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible"],
											["MDN - :focus-within", "https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within"]
										]
									}
								}
							]
						},
						{	// while문과 do while문
							name: "while문과 do while문",
							description: {
								text: "Learn how to select colors in such a way that users, including those with visual disabilities, can perceive the content on the page.",
								links: [
									["Webaim - Contrast and Color", "https://webaim.org/articles/contrast/"],
									["The A11Y Project - Check contrast", "https://a11yproject.com/posts/check-contrast-with-mobile-device/"],
									["The A11Y Project - What is color contrast?", "https://a11yproject.com/posts/what-is-color-contrast/"],
									["Designing accessible color systems", "https://stripe.com/en-dk/blog/accessible-color-systems"],
								]
							}
						},
						{	// break문 continue문
							name: "break문 continue문",
							description: {
								text: "Learn about the governmental policies related to web accessibility.",
								links: [
									["W3C - Laws & Policies", "https://www.w3.org/WAI/policies/"],
									["Webaim - Laws around the world", "https://webaim.org/articles/laws/world/"],
									["Webaim - Section 508", "https://webaim.org/standards/508/checklist"],
									["Webaim - WCAG 2 Checklist", "https://webaim.org/standards/wcag/checklist"],
									["A11Y.dev - Lawsuits", "https://a11y.dev/470-digital-accessibility-cases-were-filed-in-q3-2018/"],
								]
							},
						},
					]
				},
				{	// 함수와 이벤트
					name: "함수와 이벤트",
					description: {
						text: "Learn what accessibility is and why it is important.",
						links: [
							["Google Devs - Accessibility Fundamentals", "https://developers.google.com/web/fundamentals/accessibility/"],
							["A11ycasts with Rob Dodson", "https://www.youtube.com/playlist?list=PLNYkxOF6rcICWx0C9LVWWVqvHlYJyqw7g"],
							["Udacity - Chromevox Lite", "http://udacity.github.io/ud891/lesson3-semantics-built-in/02-chromevox-lite/"],
							["Dev.to - Why Accessibility Matters", "https://dev.to/lhoffmanwg1/why-accessibility-matters-39nl"],
							["Abilitynet - Why Accessibility Matters", "https://www.abilitynet.org.uk/why-accessibility-matters"],
							["Udacity - Web Accessibility", "https://www.udacity.com/course/web-accessibility--ud891"],
							["Youtube - Headings, Landmarks, and Tabs", "https://www.youtube.com/watch?v=HE2R86EZPMA"],
						]
					},
					skills: [
						{	// 함수란
							// name: "Screen Readers",
							name: "함수란",
							description: {
								text: "Learn about assistive technology such as screen readers that reads sections of the page aloud based on the current focus.",
								links: [
									["The A11Y Project - Screen Reader Myths", "https://a11yproject.com/posts/people-who-use-screen-readers-dont-use-javascript/"],
									["The A11Y Project - NVDA Screen Reader", "https://a11yproject.com/posts/getting-started-with-nvda/"],
									["The A11Y Project - OS X Voiceover", "https://a11yproject.com/posts/getting-started-with-voiceover/"],
									["Webaim - Screen Reader Survey", "https://webaim.org/projects/screenreadersurvey7/"]
								]
							}
						},
						{
							name: "함수 만들기",
							description: {
								text: "Learn how to conduct an accessibility review to improve the overall experience of using your site. Remember, good accessibility equals good UX!",
								links: [
									["web.dev - Accessibility audits", "https://web.dev/lighthouse-accessibility"],
									["Google Devs - How to review", "https://developers.google.com/web/fundamentals/accessibility/how-to-review"],
									["Webaim - Accessibility Tools", "https://webaim.org/articles/tools/"],
									["Google Devs - Accessibility Reference", "https://developers.google.com/web/tools/chrome-devtools/accessibility/reference"],
									["Webaim - Wave", "http://wave.webaim.org/"],
									["Google Chrome - NoCoffee Extension", "https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl"],
									["Digital A11Y - Accessibility Plugins", "https://www.digitala11y.com/accessibility-plug-ins-ie-chrome-firefox-browsers/"],
									["Google Devs - Accessibility for teams", "https://developers.google.com/web/fundamentals/accessibility/a11y-for-teams"],
									["WCAG 2.0 checklists", "https://www.wuhcag.com/wcag-checklist/"],
									["How to Meet WCAG (Quick Reference)", "https://www.w3.org/WAI/WCAG21/quickref/"],
								]
							}
						},
						{
							name: "이벤트 다루기",
							description: {
								text: "Learn how to conduct an accessibility review to improve the overall experience of using your site. Remember, good accessibility equals good UX!",
								links: [
									["web.dev - Accessibility audits", "https://web.dev/lighthouse-accessibility"],
									["Google Devs - How to review", "https://developers.google.com/web/fundamentals/accessibility/how-to-review"],
									["Webaim - Accessibility Tools", "https://webaim.org/articles/tools/"],
									["Google Devs - Accessibility Reference", "https://developers.google.com/web/tools/chrome-devtools/accessibility/reference"],
									["Webaim - Wave", "http://wave.webaim.org/"],
									["Google Chrome - NoCoffee Extension", "https://chrome.google.com/webstore/detail/nocoffee/jjeeggmbnhckmgdhmgdckeigabjfbddl"],
									["Digital A11Y - Accessibility Plugins", "https://www.digitala11y.com/accessibility-plug-ins-ie-chrome-firefox-browsers/"],
									["Google Devs - Accessibility for teams", "https://developers.google.com/web/fundamentals/accessibility/a11y-for-teams"],
									["WCAG 2.0 checklists", "https://www.wuhcag.com/wcag-checklist/"],
									["How to Meet WCAG (Quick Reference)", "https://www.w3.org/WAI/WCAG21/quickref/"],
								]
							}
						},
					]
				},
			]
		}
	]
};