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
										text: "for문안에 for를 사용한 중첩 for문 알아보기",
										links: [
											["Tistory - 중첩for문", "https://colossus-java-practice.tistory.com/40"],
											["gitbook - 중첩for문으로 구구단만들기", "https://thldnjs1234.gitbook.io/javascript-jquery/undefined-7/for-1"],
											["velog - 구구단만들기 예제", "https://velog.io/@khd/%EC%A4%91%EC%B2%A9-for%EB%AC%B8"]
										]
									}
								}
							]
						},
						{	// while문과 do while문
							name: "while문과 do while문",
							description: {
								text: "다른 반복문인 while과 do while문을 이해하기",
								links: [
									["MDN Web Docs - do while", "https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/do...while"],
									["everdevel - while문", "https://www.everdevel.com/JavaScript/js-while/"],
									["Tistory - while문과 do while문 ", "https://yjshin.tistory.com/entry/JavaScript-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%B0%98%EB%B3%B5%EB%AC%B8-while-%EB%AC%B8%EA%B3%BC-do-while-%EB%AC%B8"],
								]
							}
						},
						{	// break문 continue문
							name: "break문 continue문",
							description: {
								text: "반복문의 제어를 넘기는 break문과 continue문 알아보기",
								links: [
									["everdevel - continue문과 break문", "https://www.everdevel.com/JavaScript/js-continue-break/"],
									["MDN Web Docs - continue", "https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/continue"],
									["dasima - 제어문 예제", "https://dasima.xyz/javascript-break-continue/"],
								]
							},
						},
					]
				},
				{	// 함수와 이벤트
					name: "함수와 이벤트",
					description: {
						text: "자바스크립트의 함수와 이벤트 이해하기",
						links: [
							["velog - 함수와 이벤트", "https://velog.io/@dksdpdms520/JavaScript-%ED%95%A8%EC%88%98%EC%99%80-%EC%9D%B4%EB%B2%A4%ED%8A%B8"],
						]
					},
					skills: [
						{	// 함수란
							// name: "Screen Readers",
							name: "함수란",
							description: {
								text: "자바스크립트에서 함수 사용하기",
								links: [
									["MDN Web Docs - 함수", "https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions"],
									["tcpschool - 함수의 기초", "http://www.tcpschool.com/javascript/js_function_basic"],
								]
							}
						},
						{
							name: "함수 만들기",
							description: {
								text: "자바스크립트 함수의 선언과 특징",
								links: [
									["yceffort - 함수 선언하는 6가지 방법", "https://yceffort.kr/2020/10/6-different-ways-to-declare-javascript-function"],
									["medium - 함수와 hoisting", "https://medium.com/sjk5766/javascript-%ED%95%A8%EC%88%98%EB%A5%BC-%EC%83%9D%EC%84%B1%ED%95%98%EB%8A%94-3%EA%B0%80%EC%A7%80-%EB%B0%A9%EC%8B%9D-%EA%B7%B8%EB%A6%AC%EA%B3%A0-%ED%95%A8%EC%88%98-hoisting-f5905fa9a4fb"],
								]
							}
						},
						{
							name: "이벤트 다루기",
							description: {
								text: "자바스크립트에서의 이벤트와 종류",
								links: [
									["MDN Web Docs - 이벤트", "https://developer.mozilla.org/ko/docs/Learn/JavaScript/Building_blocks/Events"],
									["ktword - 이벤트 종류", "http://www.ktword.co.kr/test/view/view.php?no=2744"],
									["Tistory - 이벤트 정리", "https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%F0%9F%92%AF-%EC%B4%9D-%EC%A0%95%EB%A6%AC"],
								]
							}
						},
					]
				},
			]
		}
	]
};