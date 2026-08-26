const subjects = {
  chinese: {name:"语文",short:"语",color:"#d95752",soft:"#fff0ef",edition:"人教版 · 1–4 年级复习",intro:"从字词、古诗到阅读表达，把学过的知识重新串成线。",chapters:[
    ["字词寻宝","多音字、形近字、成语运用"],["句子工坊","扩句缩句、修辞与病句"],["古诗时光机","重点古诗背诵与理解"],["阅读侦探社","概括内容、寻找关键信息"],["表达小作家","写人、记事与观察日记"]]},
  math: {name:"数学",short:"数",color:"#e88a25",soft:"#fff4e5",edition:"苏教版 · 1–4 年级复习",intro:"数与运算、图形、单位、解决问题，逐步找回计算手感。",chapters:[
    ["计算训练营","四则运算与运算律"],["分数初相识","分数意义与简单比较"],["图形实验室","周长、面积与角"],["单位换算站","长度、质量、时间与面积"],["应用题拆解","读题、画图、分步解决"]]},
  english: {name:"英语",short:"英",color:"#2ca86f",soft:"#e8f8f0",edition:"人教版 · 1–4 年级复习",intro:"先听准、再说对，把单词放进学校、家庭和购物场景。",chapters:[
    ["高频词卡","听音、认词、拼写"],["自然拼读","字母与常见发音组合"],["情景对话","问候、介绍、购物、问路"],["句型积木","一般疑问句与特殊疑问句"],["开口挑战","跟读、替换与角色扮演"]]},
  science: {name:"自然科学",short:"科",color:"#257c86",soft:"#e9f7f8",edition:"从 0 开始 · 观察与实验",intro:"从身边的问题出发，学习观察、猜想、实验和记录。",chapters:[
    ["像科学家一样","观察、提问与证据"],["生命小世界","植物、动物与生态"],["物质变变变","水、空气与材料"],["力与运动","推拉、摩擦与简单机械"],["地球与天空","天气、月相和太阳系"]]},
  coding: {name:"编程",short:"码",color:"#7156c9",soft:"#f1edff",edition:"从 0 开始 · 计算思维",intro:"不用背代码，先学会把大问题拆成清楚的小步骤。",chapters:[
    ["指令与顺序","让角色按步骤行动"],["循环魔法","发现重复，减少指令"],["条件判断","如果发生，就做什么"],["变量盒子","用名字保存变化的数据"],["创意小项目","迷宫、问答和动画故事"]]}
};

const quizzes = {
  chinese:[
    {q:"“白日依山尽”的下一句是？",o:["黄河入海流","春风花草香","江清月近人"],a:0,e:"出自王之涣《登鹳雀楼》：白日依山尽，黄河入海流。"},
    {q:"下面哪个词语使用正确？",o:["教室里鸦雀无声","小河跑得飞快","阳光唱起了歌声"],a:0,e:"“鸦雀无声”形容非常安静，适合描述教室。"},
    {q:"“他跑得像风一样快”用了什么修辞？",o:["拟人","比喻","排比"],a:1,e:"把他跑步的速度比作风，是比喻。"}],
  math:[
    {q:"125 × 8 的结果是？",o:["1000","900","1200"],a:0,e:"125 和 8 是一组好朋友：125 × 8 = 1000。"},
    {q:"一个正方形边长 6 厘米，周长是多少？",o:["12 厘米","24 厘米","36 平方厘米"],a:1,e:"正方形周长 = 边长 × 4，所以是 24 厘米。"},
    {q:"把 1 米平均分成 10 份，每份是？",o:["1 厘米","1 分米","10 分米"],a:1,e:"1 米 = 10 分米，每份就是 1 分米。"}],
  english:[
    {q:"你想询问对方的名字，应该说？",o:["How are you?","What's your name?","How old are you?"],a:1,e:"What's your name? 意思是“你叫什么名字？”"},
    {q:"“library”是什么意思？",o:["操场","图书馆","教室"],a:1,e:"library /ˈlaɪbreri/ 是图书馆。"},
    {q:"选择正确句子：",o:["She like apples.","She likes apples.","She liking apples."],a:1,e:"主语 she 是第三人称单数，like 要变成 likes。"}],
  science:[
    {q:"做实验时，第一步通常应该是？",o:["直接写结论","提出问题","只看别人答案"],a:1,e:"科学探究通常从观察和提出问题开始。"},
    {q:"植物制造养分通常需要什么？",o:["阳光","塑料","石头"],a:0,e:"绿色植物利用阳光进行光合作用，制造养分。"},
    {q:"下列哪一种是减少摩擦的做法？",o:["鞋底加花纹","给轮轴加润滑油","用力按住物体"],a:1,e:"润滑油能让接触面更容易滑动，从而减少摩擦。"}],
  coding:[
    {q:"让角色向前走 4 次，哪种方法更简洁？",o:["写 4 次前进","重复执行前进 4 次","什么也不写"],a:1,e:"循环可以把重复的指令变得更简洁。"},
    {q:"“如果下雨，就带伞”属于哪种思维？",o:["顺序","循环","条件判断"],a:2,e:"只有满足“下雨”这个条件，才执行“带伞”。"},
    {q:"程序中的“指令”最像什么？",o:["清楚的行动命令","随便的猜测","一幅静止的画"],a:0,e:"计算机按照明确的指令一步一步执行任务。"}]
};

const words = [
  ["school","/skuːl/","学校"],["library","/ˈlaɪbreri/","图书馆"],["teacher","/ˈtiːtʃə(r)/","老师"],
  ["breakfast","/ˈbrekfəst/","早餐"],["weather","/ˈweðə(r)/","天气"],["favorite","/ˈfeɪvərɪt/","最喜欢的"],
  ["help","/help/","帮助"],["please","/pliːz/","请"],["because","/bɪˈkɒz/","因为"]
];

const daily = [
  {subject:"english",title:"听音找单词",desc:"辨认 3 个校园高频词，听准再选择。",time:"6 分钟"},
  {subject:"math",title:"计算热身赛",desc:"用巧算完成三道基础题，找回计算手感。",time:"8 分钟"},
  {subject:"chinese",title:"古诗接龙",desc:"读诗句、找下句，复习熟悉的古诗。",time:"6 分钟"}
];

const defaultState = {stars:0,completed:[],subjectDone:{chinese:0,math:0,english:0,science:0,coding:0},lastDate:"",streak:1};
let state = loadState();
let activeCourse = "chinese";
let englishMode = "words";
let quiz = null;

function loadState(){
  try{return {...defaultState,...JSON.parse(localStorage.getItem("grade5Adventure")||"{}")};}catch{return {...defaultState};}
}
function saveState(){localStorage.setItem("grade5Adventure",JSON.stringify(state));renderStats();}
function iconSpeaker(){return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4Zm12.5-.8a5.4 5.4 0 0 1 0 7.6M19 5a9.4 9.4 0 0 1 0 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'}

function showView(id){
  document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===id));
  document.querySelectorAll(".nav-item").forEach(v=>v.classList.toggle("active",v.dataset.view===id));
  window.scrollTo({top:0,behavior:"smooth"});
  if(id==="progress")renderStats();
}
document.querySelectorAll("[data-view]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.go)));

function renderDaily(){
  document.getElementById("dailyTasks").innerHTML=daily.map((t,i)=>{
    const s=subjects[t.subject],done=state.completed.includes(`daily-${i}`);
    return `<article class="task-card ${done?"done":""}"><span class="task-number">0${i+1}</span><span class="subject-pill" style="color:${s.color};background:${s.soft}">${s.name}</span><h3>${t.title}</h3><p>${t.desc}</p><div class="task-meta"><span>${t.time}</span><span>完成得 5 星</span></div><button data-daily="${i}">${done?"已完成 · 再练一次":"开始挑战"}</button></article>`
  }).join("");
  document.querySelectorAll("[data-daily]").forEach(b=>b.onclick=()=>startQuiz(daily[+b.dataset.daily].subject,`daily-${b.dataset.daily}`));
  const done=daily.filter((_,i)=>state.completed.includes(`daily-${i}`)).length;
  document.getElementById("dailyDone").textContent=`${done} / 3 已完成`;
  document.getElementById("dailyBar").style.width=`${done/3*100}%`;
}

function renderCourses(){
  document.getElementById("courseTabs").innerHTML=Object.entries(subjects).map(([id,s])=>`<button class="course-tab ${id===activeCourse?"active":""}" style="--tab-color:${s.color}" data-course="${id}"><i style="background:${s.color}"></i>${s.name}</button>`).join("");
  document.querySelectorAll("[data-course]").forEach(b=>b.onclick=()=>{activeCourse=b.dataset.course;renderCourses()});
  const s=subjects[activeCourse];
  document.getElementById("courseStage").innerHTML=`<div class="course-intro"><div><span class="section-kicker" style="color:${s.color}">${s.edition}</span><h2>${s.name}探索路线</h2><p>${s.intro}</p></div><div class="course-icon-large" style="background:${s.color}">${s.short}</div></div><div class="chapter-list">${s.chapters.map((c,i)=>`<article class="chapter-card" style="--chapter:${s.color};--chapter-soft:${s.soft}"><span class="chapter-index">${i+1}</span><div><h3>${c[0]}</h3><p>${c[1]}</p></div><button data-chapter="${i}">练一练</button></article>`).join("")}</div>`;
  document.querySelectorAll("[data-chapter]").forEach(b=>b.onclick=()=>startQuiz(activeCourse,`${activeCourse}-${b.dataset.chapter}`));
}

function renderEnglish(){
  const modes=[["words","高频词卡"],["sounds","发音实验室"],["dialogue","情景小剧场"]];
  document.getElementById("englishMenu").innerHTML=modes.map(m=>`<button class="${englishMode===m[0]?"active":""}" data-english="${m[0]}">${m[1]}</button>`).join("");
  document.querySelectorAll("[data-english]").forEach(b=>b.onclick=()=>{englishMode=b.dataset.english;renderEnglish()});
  const box=document.getElementById("englishWorkbench");
  if(englishMode==="words"){
    box.innerHTML=`<div class="section-heading"><div><span class="section-kicker">本周 9 词</span><h2>校园与日常高频词</h2></div><button class="speak-btn" id="speakAll">${iconSpeaker()}连续听</button></div><div class="word-deck">${words.map((w,i)=>`<article class="word-card"><strong>${w[0]}</strong><div class="phonetic">${w[1]}</div><p>${w[2]}</p><button class="speak-btn" data-speak="${w[0]}">${iconSpeaker()}听发音</button></article>`).join("")}</div>`;
    document.querySelectorAll("[data-speak]").forEach(b=>b.onclick=()=>speak(b.dataset.speak));
    document.getElementById("speakAll").onclick=()=>speakSequence(words.map(w=>w[0]));
  }else if(englishMode==="sounds"){
    box.innerHTML=`<div class="sound-lab"><span class="section-kicker">自然拼读</span><div class="sound-focus">sh</div><h2>像请大家安静时发出的声音</h2><p class="mouth-tip">嘴唇稍微向前，舌尖靠近上齿龈但不要碰到，让气流从中间通过。先听，再模仿三遍。</p><button class="primary-btn" id="soundDemo">${iconSpeaker()} 听示范：ship · fish · shop</button><h3>听一听，哪个单词含有 /ʃ/？</h3><div class="listen-options"><button data-soundword="cat">cat</button><button data-soundword="ship">ship</button><button data-soundword="desk">desk</button></div></div>`;
    document.getElementById("soundDemo").onclick=()=>speakSequence(["ship","fish","shop"]);
    document.querySelectorAll("[data-soundword]").forEach(b=>b.onclick=()=>{speak(b.dataset.soundword);toast(b.dataset.soundword==="ship"?"找对了！ship 含有 sh 的发音":"再听一次，注意开头的声音")});
  }else{
    box.innerHTML=`<div class="scene-title"><div><span class="section-kicker">场景 01 · 新同学见面</span><h2>Introduce yourself</h2></div><button class="speak-btn" id="playDialogue">${iconSpeaker()}播放对话</button></div><div class="dialogue-box"><div class="chat-row"><span class="avatar">A</span><div class="bubble"><strong>Hi! What's your name?</strong><span>你好！你叫什么名字？</span></div></div><div class="chat-row right"><span class="avatar">B</span><div class="bubble"><strong>My name is Leo. Nice to meet you.</strong><span>我叫 Leo。很高兴认识你。</span></div></div><div class="chat-row"><span class="avatar">A</span><div class="bubble"><strong>Nice to meet you, too. What do you like?</strong><span>我也很高兴认识你。你喜欢什么？</span></div></div><div class="chat-row right"><span class="avatar">B</span><div class="bubble"><strong>I like science and football.</strong><span>我喜欢科学和足球。</span></div></div></div><p><strong>轮到你：</strong>把名字和爱好换成自己的，补全句子。</p><div class="practice-input"><input id="dialogueAnswer" aria-label="输入英语回答" placeholder="My name is ... I like ..."><button id="checkDialogue">完成挑战</button></div>`;
    document.getElementById("playDialogue").onclick=()=>speakSequence(["Hi! What's your name?","My name is Leo. Nice to meet you.","Nice to meet you, too. What do you like?","I like science and football."]);
    document.getElementById("checkDialogue").onclick=()=>{const v=document.getElementById("dialogueAnswer").value.trim();if(v.length<8)return toast("千寻小朋友，再写完整一点，可以用 My name is ... I like ...");award("dialogue-first","english",5);toast("千寻小朋友表达完成！现在大声读一遍吧")};
  }
}

function speak(text){
  if(!("speechSynthesis" in window))return toast("当前浏览器不支持语音播放");
  speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang="en-US";u.rate=.78;speechSynthesis.speak(u);
}
function speakSequence(list){let i=0;function next(){if(i>=list.length)return;const u=new SpeechSynthesisUtterance(list[i++]);u.lang="en-US";u.rate=.76;u.onend=()=>setTimeout(next,350);speechSynthesis.speak(u)}speechSynthesis.cancel();next()}

function startQuiz(subject,taskId){quiz={subject,taskId,index:0,correct:0,locked:false};document.getElementById("quizModal").hidden=false;document.body.style.overflow="hidden";renderQuestion()}
function renderQuestion(){
  const items=quizzes[quiz.subject],item=items[quiz.index],s=subjects[quiz.subject];
  document.getElementById("quizSubject").textContent=`千寻小朋友 · ${s.name}快问快答`;
  document.getElementById("quizSubject").style.color=s.color;
  document.getElementById("quizStep").textContent=`${quiz.index+1} / ${items.length}`;
  document.getElementById("quizBody").innerHTML=`<h2 class="question-title" id="quizTitle">${item.q}</h2><div class="option-list">${item.o.map((o,i)=>`<button class="option-btn" data-option="${i}">${String.fromCharCode(65+i)}. ${o}</button>`).join("")}</div><div id="feedbackArea"></div>`;
  document.querySelectorAll("[data-option]").forEach(b=>b.onclick=()=>answerQuestion(+b.dataset.option));
}
function answerQuestion(choice){
  if(quiz.locked)return;quiz.locked=true;const item=quizzes[quiz.subject][quiz.index];
  document.querySelectorAll("[data-option]").forEach((b,i)=>{if(i===item.a)b.classList.add("correct");else if(i===choice)b.classList.add("wrong")});
  if(choice===item.a)quiz.correct++;
  const last=quiz.index===quizzes[quiz.subject].length-1;
  document.getElementById("feedbackArea").innerHTML=`<div class="feedback"><strong>${choice===item.a?"千寻小朋友，回答正确！":"千寻小朋友，这题再记一记"}</strong><br>${item.e}</div><button class="next-btn" id="nextQuestion">${last?"查看结果":"下一题"}</button>`;
  document.getElementById("nextQuestion").onclick=()=>{if(last)finishQuiz();else{quiz.index++;quiz.locked=false;renderQuestion()}};
}
function finishQuiz(){
  const first=!state.completed.includes(quiz.taskId),earned=first?5:1;
  award(quiz.taskId,quiz.subject,earned);confetti();
  document.getElementById("quizBody").innerHTML=`<div class="result"><div class="result-star">★</div><h2>${quiz.correct===3?"千寻小朋友，全部答对！":"千寻小朋友，挑战完成！"}</h2><p>答对 ${quiz.correct} / 3 题，${first?`获得 ${earned} 颗能量星`:`复习奖励 ${earned} 颗星`}。</p><button class="primary-btn" id="finishQuiz">收下奖励</button></div>`;
  document.getElementById("finishQuiz").onclick=closeQuiz;
}
function award(id,subject,stars){
  const first=!state.completed.includes(id);if(first){state.completed.push(id);state.subjectDone[subject]=(state.subjectDone[subject]||0)+1}state.stars+=stars;state.lastDate=new Date().toDateString();saveState();renderDaily();
}
function closeQuiz(){document.getElementById("quizModal").hidden=true;document.body.style.overflow="";quiz=null}
document.getElementById("closeQuiz").onclick=closeQuiz;
document.getElementById("quizModal").onclick=e=>{if(e.target.id==="quizModal")closeQuiz()};
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&quiz)closeQuiz()});

function renderStats(){
  document.getElementById("starCount").textContent=state.stars;
  document.getElementById("totalDone").textContent=state.completed.length;
  document.getElementById("streakDays").textContent=state.streak;
  const levels=state.stars>=80?["知识领航员","已经点亮全部基础等级"]:state.stars>=40?["勇敢探索家",`再获得 ${80-state.stars} 颗星升级`]:state.stars>=20?["求知者",`再获得 ${40-state.stars} 颗星升级`]:["初出发",`再获得 ${20-state.stars} 颗星升级为求知者`];
  document.getElementById("levelName").textContent=levels[0];document.getElementById("levelHint").textContent=levels[1];
  document.getElementById("progressRing").style.background=`conic-gradient(var(--green) ${Math.min(state.stars/80*360,360)}deg,#e8f0f8 0)`;
  document.getElementById("weekDots").innerHTML=["一","二","三","四","五","六","日"].map((d,i)=>`<span class="day-dot ${i<Math.min(state.streak,7)?"active":""}">${d}</span>`).join("");
  document.getElementById("subjectProgress").innerHTML=Object.entries(subjects).map(([id,s])=>{const n=state.subjectDone[id]||0,p=Math.min(n/5*100,100);return `<div class="subject-meter"><strong>${s.name}</strong><span>${n} 次练习</span><div class="meter"><i style="width:${p}%;background:${s.color}"></i></div></div>`}).join("");
  const badges=[
    ["第一颗星","完成首次练习",state.completed.length>=1],["英语开口","完成情景表达",state.completed.includes("dialogue-first")],["三科启程","三门学科有记录",Object.values(state.subjectDone).filter(n=>n>0).length>=3],["能量满格","累计获得 40 颗星",state.stars>=40]
  ];
  document.getElementById("badgeGrid").innerHTML=badges.map(b=>`<article class="badge ${b[2]?"unlocked":""}"><span class="badge-symbol"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="m24 4 6 12 14 2-10 10 2 14-12-7-12 7 2-14L4 18l14-2 6-12Z" fill="currentColor"/></svg></span><strong>${b[0]}</strong><small>${b[1]}</small></article>`).join("");
}

function toast(message){const t=document.getElementById("toast");t.textContent=message;t.classList.add("show");clearTimeout(t.timer);t.timer=setTimeout(()=>t.classList.remove("show"),2600)}
function confetti(){const c=document.getElementById("confetti"),colors=["#2457d6","#ff9c3b","#2ca86f","#ffd35c","#d95752"];c.innerHTML=Array.from({length:45},(_,i)=>`<i style="left:${Math.random()*100}%;background:${colors[i%colors.length]};animation-delay:${Math.random()*.6}s"></i>`).join("");setTimeout(()=>c.innerHTML="",2600)}

document.getElementById("startToday").onclick=()=>{const next=daily.findIndex((_,i)=>!state.completed.includes(`daily-${i}`));startQuiz(daily[next<0?0:next].subject,`daily-${next<0?0:next}`)};
document.getElementById("resetProgress").onclick=()=>{if(confirm("确定清空这台设备上的所有学习记录吗？此操作无法撤销。")){state={...defaultState,subjectDone:{...defaultState.subjectDone}};saveState();renderDaily();toast("学习记录已清空")}};

const hour=new Date().getHours();document.getElementById("greeting").textContent=hour<11?"早上好，千寻小朋友":hour<18?"下午好，千寻小朋友":"晚上好，千寻小朋友";
renderDaily();renderCourses();renderEnglish();renderStats();
