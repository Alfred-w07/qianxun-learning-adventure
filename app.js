const subjects = {
  chinese: {name:"语文",short:"语",color:"#d95752",soft:"#fff0ef",edition:"人教版 · 1–4 年级复习",intro:"从字词、古诗到阅读表达，把学过的知识重新串成线。",chapters:[
    ["字词寻宝","多音字、形近字、成语运用"],["句子工坊","扩句缩句、修辞与病句"],["古诗时光机","重点古诗背诵与理解"],["阅读侦探社","概括内容、寻找关键信息"],["表达小作家","写人、记事与观察日记"]]},
  math: {name:"数学",short:"数",color:"#e88a25",soft:"#fff4e5",edition:"苏教版 · 1–4 年级复习",intro:"数与运算、图形、单位、解决问题，逐步找回计算手感。",chapters:[
    ["计算训练营","四则运算与运算律"],["分数初相识","分数意义与简单比较"],["图形实验室","周长、面积与角"],["单位换算站","长度、质量、时间与面积"],["应用题拆解","读题、画图、分步解决"]]},
  english: {name:"英语",short:"英",color:"#2ca86f",soft:"#e8f8f0",edition:"人教版 · 1–4 年级复习",intro:"先听准、再说对，把单词放进学校、家庭和购物场景。",chapters:[
    ["高频词卡","听音、认词、拼写"],["自然拼读","字母与常见发音组合"],["情景对话","问候、介绍、购物、问路"],["句型积木","一般疑问句与特殊疑问句"],["开口挑战","跟读、替换与角色扮演"]]},
  science: {name:"自然科学",short:"科",color:"#257c86",soft:"#e9f7f8",edition:"从 0 开始 · 科学、人文与想象",intro:"从证据出发，探索三星堆、宇宙、地球、生命与人类历史。",chapters:[
    ["科学侦探社","观察、提问、实验与证据"],["三星堆寻宝","青铜面具、考古与古蜀文明"],["宇宙来信","太阳系、恒星与外星生命"],["天文观测站","月相、星座与望远镜"],["地理探险家","地图、地形、气候与家乡"],["历史时光机","时间线、文物与文明故事"],["生命小世界","植物、动物与生态关系"]]},
  coding: {name:"编程",short:"码",color:"#7156c9",soft:"#f1edff",edition:"从 0 开始 · 计算思维",intro:"不用背代码，先学会把大问题拆成清楚的小步骤。",chapters:[
    ["指令与顺序","让角色按步骤行动"],["循环魔法","发现重复，减少指令"],["条件判断","如果发生，就做什么"],["变量盒子","用名字保存变化的数据"],["创意小项目","迷宫、问答和动画故事"]]}
};

const q=(question,options,answer,explain)=>({q:question,o:options,a:answer,e:explain});
const quizzes = {
  chinese:[
    [q("“辨”和“辩”中，与说话争论有关的是？",["辨别","辩论","花瓣"],1,"“辩”中间是言字旁，和说话、争论有关。"),q("“教”在“教室”中的读音是？",["jiāo","jiào","jiǎo"],1,"表示场所或教育时读 jiào。"),q("哪个成语表示非常安静？",["鸦雀无声","五颜六色","争先恐后"],0,"“鸦雀无声”形容安静得连鸟叫声都没有。")],
    [q("“小鸟在枝头唱歌”使用了什么修辞？",["比喻","拟人","排比"],1,"把小鸟当作人来写，是拟人。"),q("“合肥的春天是个美丽的地方”怎样修改？",["春天的合肥是个美丽的地方","合肥是春天","不用修改"],0,"“地方”指合肥，交换词序后搭配正确。"),q("把“月亮升起来了”扩写得更具体，哪句合适？",["月亮。","一轮明月从山后慢慢升起来了","升起来了月亮"],1,"加入数量、位置和动作，让句子更具体。")],
    [q("“白日依山尽”的下一句是？",["黄河入海流","春风花草香","江清月近人"],0,"出自王之涣《登鹳雀楼》。"),q("“独在异乡为异客”表达的主要情感是？",["思念家乡","热爱运动","赞美美食"],0,"诗人在异乡思念家乡和亲人。"),q("“不识庐山真面目，只缘身在此山中”告诉我们？",["山里很黑","看问题要有不同角度","庐山没有路"],1,"身在其中可能看不全面，需要换角度观察。")],
    [q("概括一段话时，首先应找什么？",["中心意思","每个标点","最长的词"],0,"抓住谁、做什么、结果怎样，能帮助概括。"),q("文中反复出现的词语通常可能是？",["关键信息","一定是错字","无用内容"],0,"反复出现常提示文章重点。"),q("遇到不理解的词，哪种方法更合适？",["跳过全文","联系上下文猜意思","随便选一个意思"],1,"上下文能提供词语所处情境和线索。")],
    [q("写一件事，通常要交代哪些要素？",["时间地点人物经过","只写天气","只写结尾"],0,"事情写清楚需要基本要素和过程。"),q("观察日记最重要的是？",["真实细致地记录变化","照抄范文","写得越长越好"],0,"连续观察并记录真实变化最有价值。"),q("哪个细节更能表现“紧张”？",["我很紧张","手心冒汗，心跳得咚咚响","天气不错"],1,"动作和身体感受能让情绪更具体。")]
  ],
  math:[
    [q("125 × 8 的结果是？",["1000","900","1200"],0,"125 × 8 = 1000。"),q("25 × 16 可以怎样巧算？",["25×4×4","25+16","16÷4"],0,"16拆成4×4，25×4=100。"),q("480 ÷ 6 =？",["8","80","800"],1,"48÷6=8，所以480÷6=80。")],
    [q("把一个蛋糕平均分成4份，一份是？",["四分之一","四分之三","一半"],0,"整体平均分4份，每份是1/4。"),q("1/2 和 1/4 哪个大？",["1/2","1/4","一样大"],0,"同一个整体平均分得越少，每份越大。"),q("2个1/5是？",["1/5","2/5","5/2"],1,"分母不变，2个1/5就是2/5。")],
    [q("正方形边长6厘米，周长是多少？",["12厘米","24厘米","36平方厘米"],1,"周长=边长×4。"),q("长方形长8米、宽3米，面积是？",["11平方米","22米","24平方米"],2,"面积=长×宽=24平方米。"),q("直角是多少度？",["45°","90°","180°"],1,"直角是90度。")],
    [q("1米平均分成10份，每份是？",["1厘米","1分米","10分米"],1,"1米=10分米。"),q("3千克等于多少克？",["30克","300克","3000克"],2,"1千克=1000克。"),q("2小时30分等于多少分钟？",["130分","150分","230分"],1,"2小时=120分，再加30分。")],
    [q("每盒彩笔12元，买3盒要多少元？",["15元","36元","48元"],1,"单价×数量=总价。"),q("45人坐船，每船最多8人，至少要几条船？",["5条","6条","7条"],1,"5条只能坐40人，还需1条。"),q("小明有30元，买了18元的书，还剩？",["12元","18元","48元"],0,"30-18=12。")]
  ],
  english:[
    [q("“library”是什么意思？",["操场","图书馆","教室"],1,"library 是图书馆。"),q("听到 school，应该想到？",["学校","早餐","天气"],0,"school /skuːl/ 是学校。"),q("teacher 中的 ch 通常发什么音？",["/tʃ/","/s/","/m/"],0,"teacher 中 ch 发 /tʃ/。")],
    [q("哪个单词含有 sh 的发音？",["ship","cat","desk"],0,"ship 的开头是 /ʃ/。"),q("cake 中字母 a 的常见发音是？",["/eɪ/","/ɪ/","/uː/"],0,"末尾不发音的 e 常让 a 发字母音 /eɪ/。"),q("fish 和 shop 共有的字母组合是？",["ph","sh","th"],1,"两个单词都含 sh。")],
    [q("询问对方名字应该说？",["How are you?","What's your name?","How old are you?"],1,"What's your name? 是“你叫什么名字？”"),q("在商店询问价格应该说？",["How much is it?","Where are you?","What time is it?"],0,"How much 用于询问价格。"),q("别人说 Nice to meet you，你可以回答？",["Good night.","Nice to meet you, too.","I'm ten."],1,"too 表示“也”。")],
    [q("选择正确句子：",["She like apples.","She likes apples.","She liking apples."],1,"she 后一般动词加 s。"),q("询问“这是什么”应该说？",["What is this?","Who are you?","How is this?"],0,"What is this? 用于询问物品。"),q("Are you happy? 的肯定回答是？",["Yes, I am.","Yes, I do.","Yes, it is."],0,"be动词提问用 be动词回答。")],
    [q("介绍自己喜欢科学，哪句正确？",["I like science.","I am science.","I likes science."],0,"I like... 表达“我喜欢……”。"),q("请别人帮忙可以说？",["Help me, please.","I help you?","Please name."],0,"please 让请求更礼貌。"),q("朗读英语时，比较好的做法是？",["完全不张嘴","先听短句再模仿语音语调","只看中文"],1,"听、模仿、录下再比较更有效。")]
  ],
  science:[
    [q("科学探究通常从什么开始？",["提出问题","直接写答案","相信传言"],0,"观察后提出可研究的问题。"),q("只有一次实验结果，最好怎么做？",["马上宣布真理","重复实验并记录","修改结果"],1,"重复实验可以检查结果是否稳定。"),q("证据和猜想不一致时应该？",["忽略证据","根据证据调整想法","藏起记录"],1,"科学结论要尊重证据。")],
    [q("三星堆遗址位于今天的哪个省？",["四川省","安徽省","海南省"],0,"三星堆遗址位于四川广汉。"),q("考古学家研究古代生活的重要材料是？",["文物和遗迹","网络传言","未来日记"],0,"文物、遗迹和文字记录都是历史证据。"),q("三星堆青铜面具造型奇特，这说明？",["古蜀工匠有丰富想象与高超工艺","一定是外星人制作","它是现代玩具"],0,"奇特不等于外星制造，判断需要证据。")],
    [q("太阳是一颗什么天体？",["恒星","行星","卫星"],0,"太阳能自己发光发热，是恒星。"),q("目前科学家是否确认发现了外星人？",["已经确认很多","尚未找到确凿证据","月球上到处都是"],1,"科学家在寻找生命迹象，但没有确认外星文明。"),q("寻找外星生命时，科学家常关注什么？",["液态水和适宜环境","星球名字好不好听","想象画得像不像"],0,"液态水、能量和化学条件是重要线索。")],
    [q("月亮本身会发光吗？",["会","不会，它反射阳光","只在满月发光"],1,"我们看到的是月球反射的太阳光。"),q("使用望远镜观察太阳时应该？",["直接看","使用合格太阳滤镜并由成人指导","用墨镜就行"],1,"直视太阳会伤眼，必须使用专业保护。"),q("月相变化的主要原因是？",["月球被云咬掉","看到月球被太阳照亮部分的角度变化","月球每天变形"],1,"月球绕地球运动，观察角度随之变化。")],
    [q("地图上通常用什么表示方向？",["指向标","温度计","秒表"],0,"指向标帮助判断东南西北。"),q("山地和平原最主要的区别之一是？",["地势起伏","有没有人住","颜色固定不同"],0,"山地起伏大，平原较平坦。"),q("合肥所在的省份是？",["安徽","四川","广东"],0,"合肥是安徽省省会。")],
    [q("把历史事件按先后排列叫做？",["时间线","等高线","食物链"],0,"时间线能直观看到事件先后。"),q("博物馆里的文物能帮助我们？",["了解过去的人类生活","预测每道考试题","证明传说都是真的"],0,"文物是认识历史的重要实物证据。"),q("读历史故事时，怎样判断更可靠？",["比较不同资料和证据","只信最神奇的说法","转发最多就是真的"],0,"多来源互相印证更可靠。")],
    [q("植物制造养分通常需要？",["阳光","塑料","石头"],0,"绿色植物利用阳光进行光合作用。"),q("食物链中，植物通常是？",["生产者","消费者","分解者"],0,"植物能利用阳光制造养分。"),q("保护生物多样性可以怎么做？",["保护栖息地","随意放生外来物种","捕捉所有昆虫"],0,"健康栖息地能支持多种生物生存。")]
  ],
  coding:[
    [q("程序中的指令最像什么？",["清楚的行动命令","随便的猜测","静止的画"],0,"计算机按明确指令执行。"),q("让角色先走再转弯，顺序能交换吗？",["总能","不能，结果可能不同","没有顺序"],1,"指令顺序会影响结果。"),q("算法可以理解为？",["解决问题的一组步骤","电脑品牌","一张照片"],0,"算法是清晰、有限的步骤。")],
    [q("向前走4次，哪种写法简洁？",["重复执行前进4次","写100次","不写"],0,"循环减少重复指令。"),q("循环次数设为0会怎样？",["执行0次","执行1次","永不停止"],0,"固定次数循环会按设定次数执行。"),q("什么时候适合使用循环？",["动作反复出现时","每件事都不同且只做一次","关机时"],0,"重复模式适合循环。")],
    [q("“如果下雨，就带伞”属于？",["顺序","循环","条件判断"],2,"满足下雨条件才带伞。"),q("角色碰到墙就转弯，“碰到墙”是？",["条件","变量","角色名"],0,"它决定是否执行转弯。"),q("如果条件不成立且没有否则，程序会？",["跳过该动作","一定报错","从头开始"],0,"条件内动作不会执行。")],
    [q("变量最像什么？",["有名字的盒子","固定的石头","删除键"],0,"变量用名字保存可变化的数据。"),q("记录游戏分数适合用？",["变量","背景图","音量键"],0,"分数会变化，适合变量。"),q("score 从5增加1后是？",["4","5","6"],2,"5+1=6。")],
    [q("做迷宫项目前先做什么更好？",["画出规则和步骤","不停点鼠标","只选颜色"],0,"先规划目标、规则和流程。"),q("测试发现角色穿墙应该？",["检查碰墙条件","删掉项目","假装没看到"],0,"根据现象定位条件或移动逻辑。"),q("作品完成后还能怎样改进？",["邀请别人试玩并听建议","永远不能改","只改名字"],0,"试玩反馈能发现问题并产生新想法。")]
  ]
};

const scienceComics = [
  {tag:"考古漫画",title:"青铜面具会说话吗？",text:"跟着考古小队观察面具、神树和金杖，用文物碎片拼出古蜀人的故事。",bg:"#dff4ec",ink:"#257c86",chapter:1},
  {tag:"宇宙漫画",title:"外星邻居在哪里？",text:"乘坐想象飞船寻找液态水，但每一个大胆猜想都要接受证据检查。",bg:"#e8e9ff",ink:"#7156c9",chapter:2},
  {tag:"天文漫画",title:"月亮的变脸日记",text:"用饼干模型理解月相，认识为什么月亮不会真的被“吃掉”。",bg:"#fff2d8",ink:"#d98218",chapter:3},
  {tag:"地理漫画",title:"一滴水游安徽",text:"从大别山出发，沿河流经过平原，用地图认识地形与家乡。",bg:"#e2f3ff",ink:"#2457d6",chapter:4},
  {tag:"历史漫画",title:"博物馆午夜侦探",text:"文物不是沉默的宝物，它们会用材料、纹样和位置讲述过去。",bg:"#ffe9e6",ink:"#d95752",chapter:5},
  {tag:"生命漫画",title:"一平方米的生态城",text:"草、昆虫、鸟和微生物互相连接，小小角落也有完整生态故事。",bg:"#e4f7e7",ink:"#2ca86f",chapter:6}
];

const pictureApi="https://console.enterprise.trae.cn/api/ide/v1/text_to_image";
const englishVisuals={library:"A bright modern primary school library, colorful bookshelves, reading tables, warm daylight, no text, child friendly educational illustration",school:"A welcoming Chinese primary school campus with classroom buildings and playground, sunny day, no text, child friendly illustration",teacher:"A friendly female primary school English teacher standing by a classroom board, no text, warm educational illustration",breakfast:"Healthy breakfast with milk eggs bread and fruit on a family table, no text, child friendly illustration",weather:"Four weather conditions sun cloud rain snow in one educational scene, no text, child friendly illustration"};
function imageUrl(prompt,size="landscape_4_3"){return `${pictureApi}?prompt=${encodeURIComponent(`Educational website image for an 10-year-old child: ${prompt}`)}&image_size=${size}`}

const advancedData={
  chinese:[
    [["下列词语中没有错别字的是？","迫不及待","迫不急待","迫不急侍"],["“供”在“供不应求”中读？","gōng","gòng","gǒng"],["与“聚精会神”意思最接近的是？","全神贯注","心不在焉","东张西望"],["“循规蹈矩”中的“循”意思是？","遵守","寻找","循环"],["“震耳欲聋”形容？","声音很大","非常安静","速度很快"],["“临”在“身临其境”中的意思是？","到达","临时","照着写"],["填入“他做事一向____，从不马虎”的词语是？","一丝不苟","漫不经心","手忙脚乱"],["下列加点字意思不同的一项是？","绝处逢生中的绝","络绎不绝中的绝","绝妙中的绝"],["“鼎”字用部首查字法应查？","鼎部","目部","一部"]],
    [["“通过努力，使我的成绩提高了”应怎样修改？","删去“使”","删去“努力”","删去“成绩”"],["“桂花开了，很远就能闻到香味”改为夸张句？","桂花香飘十里","桂花很香","桂花开在院里"],["与“这难道不是伟大的奇观吗”意思相同的是？","这是伟大的奇观","这不是奇观","这可能是奇观"],["“书籍是人类进步的阶梯”把书籍比作？","阶梯","人类","进步"],["“风翻开了我的书页”使用了？","拟人","排比","反问"],["下列关联词正确的是？","虽然下雨，但是比赛继续","因为下雨，所以比赛继续举行得晴朗","不但下雨，而且所以"],["“我估计他今天一定会来”病因是？","前后矛盾","成分残缺","词序颠倒"],["缩句“美丽的彩虹高高地挂在天空”正确的是？","彩虹挂在天空","美丽彩虹挂","彩虹高高"],["“教室里响起了热烈的掌声”中“热烈”修饰？","掌声","教室","响起"]],
    [["“梅须逊雪三分白”的下一句是？","雪却输梅一段香","不教胡马度阴山","碧海青天夜夜心"],["“可怜九月初三夜”中“可怜”意为？","可爱","值得同情","贫穷"],["《题西林壁》的作者是？","苏轼","李白","王维"],["“生当作人杰”的下一句是？","死亦为鬼雄","不肯过江东","古来征战几人回"],["“嫦娥应悔偷灵药”表达了？","孤独寂寞","欢庆丰收","依依惜别"],["“莫愁前路无知己”是在？","劝慰朋友","赞美春天","思念故乡"],["“一道残阳铺水中”中的“铺”写出？","夕阳斜照水面的柔和","工人铺路","水面结冰"],["诗句“横看成岭侧成峰”说明？","观察角度不同结果不同","山会移动","天气变化"],["《夏日绝句》赞颂了项羽的？","英雄气概","聪明才智","勤劳节俭"]],
    [["阅读时判断人物品质，最有力的依据是？","人物言行和具体事件","文章字数","标点数量"],["概括长文章主要内容适合？","抓主要人物和关键事件","逐字抄写","只看题目猜"],["“它像离弦的箭冲出去”说明它？","速度很快","声音很响","体积很大"],["作者先写结果再回忆经过，属于？","倒叙","顺叙","说明"],["说明文列出准确数字的作用是？","具体准确地说明特点","增加想象","表达悲伤"],["联系上下文理解“破例”，应重点看？","前后发生了什么","字的笔画","作者姓名"],["文章结尾再次点题的作用是？","首尾呼应、突出中心","增加人物","改变时间"],["区分事实与观点，哪句是观点？","这本书非常精彩","书有180页","出版于2020年"],["阅读批注最有价值的是？","写下疑问、感受和依据","只画横线","抄写页码"]],
    [["写游记最清楚的顺序是？","按游览路线写","想到哪里写哪里","只写结尾"],["写人物特点应选择？","能表现特点的典型事例","所有小事","大量外貌词"],["习作中引用人物原话，通常使用？","引号","书名号","省略号"],["把事情经过写具体，应重点写？","动作、语言、心理和细节","日期","题目"],["修改习作时发现重复啰嗦，应？","删减合并","继续重复","换大字体"],["写观察日记，应重点记录？","连续变化和新发现","想象的结果","别人的结论"],["文章开头设置疑问可以？","吸引读者继续阅读","直接结束文章","省略主题"],["写信正文后通常要写？","祝福语、署名和日期","目录","页码"],["“那一刻我长大了”选材应围绕？","成长变化的具体瞬间","景物颜色","物品价格"]]
  ],
  english:[
    [["Which word means ‘博物馆’?","museum","music","mountain"],["Choose the correct spelling.","restaurant","restarant","restraunt"],["Which word has a different meaning?","hospital","library","delicious"],["I borrow books from the ____.","library","playground","kitchen"],["The opposite of ‘difficult’ is ____.","easy","heavy","early"],["Which word is a subject at school?","science","sandwich","station"],["We use an umbrella on a ____ day.","rainy","hungry","busy"],["Choose the correct phrase.","do homework","make homework","play homework"],["‘usually’ means ____.","通常","从不","突然"]],
    [["Which pair has the same ‘ea’ sound as teacher?","read and meat","bread and head","great and break"],["The ‘th’ in this word is voiced.","this","three","thin"],["Which word has a silent ‘e’?","plane","plan","plant"],["Which word has two syllables?","table","desk","book"],["The letter ‘c’ sounds /s/ in ____.","city","cat","cup"],["Which word rhymes with light?","night","late","let"],["The ‘oo’ sound in food is ____.","/uː/","/ʊ/","/ɒ/"],["Which word begins with /tʃ/?","China","school","thank"],["Where is the stress in ‘computer’?","second syllable","first syllable","last syllable"]],
    [["A shop assistant asks ‘Can I help you?’ You say ____.","Yes, I'd like a blue T-shirt.","I am ten.","It is sunny."],["To ask the way to a museum, say ____.","How can I get to the museum?","How old is the museum?","What is a museum?"],["Your friend says ‘Thank you.’ You reply ____.","You're welcome.","Excuse me.","Never mind me."],["At a restaurant, you want water. Say ____.","May I have some water, please?","I have water yesterday.","Where water?"],["To invite a friend, say ____.","Would you like to play with me?","Do you played?","You must me."],["When you are late, say ____.","I'm sorry I'm late.","You're late.","Nice late."],["To ask about the weather, say ____.","What's the weather like?","How weather?","Where is weather?"],["On the phone, identify yourself with ____.","This is Qianxun speaking.","I am speak.","That is me phone."],["To ask permission, say ____.","May I open the window?","I opening window?","Must window open?"]],
    [["Choose the correct sentence.","There are some books on the desk.","There is some books on the desk.","There are a book on the desk."],["He ____ football every Sunday.","plays","play","playing"],["What ____ your mother do?","does","do","is"],["We ____ to the zoo yesterday.","went","go","goes"],["There isn't ____ milk in the glass.","any","some","many"],["The cat is ____ the table and the chair.","between","under two","at"],["____ do you visit your grandparents? Once a week.","How often","How many","How long ago"],["My bag is ____ than yours.","heavier","heavy","heaviest"],["If it rains, we ____ at home.","will stay","stayed","stays yesterday"]],
    [["Which sentence is easiest to read with correct meaning groups?","I like science / because it is interesting.","I / like science because / it is interesting.","I like / science because it / is."],["Choose a natural self-introduction.","I'm Qianxun. I'm interested in astronomy.","I Qianxun and astronomy.","My interested is astronomy."],["Which word should be stressed? ‘I want the BLUE one, not the red one.’","BLUE","the","one"],["A polite request should end with ____.","please","yesterday","never"],["Read a question with usually ____ intonation.","rising or question intonation","no voice","only shouting"],["Which sentence expresses an opinion?","I think this story is exciting.","The story has ten pages.","It was printed in May."],["Replace ‘football’ in ‘I like football’ with an activity.","playing the piano","blue","at seven"],["Which response continues a conversation?","Really? Why do you like it?","OK. Bye.","No words."],["Before recording, the best preparation is ____.","listen, mark pauses, then imitate","speak as fast as possible","ignore pronunciation"]]
  ]
};

function generatedQuestions(subject,chapter){
  if(advancedData[subject]){const source=advancedData[subject][chapter],result=source.map(x=>q(x[0],x.slice(1),0,`答案是“${x[1]}”。请结合本模块知识点再读一遍。`));for(let i=0;i<8;i++){const x=source[i%source.length],answer=x[1],wrong=x.slice(2);result.push(q(`${x[0]}（变式 ${i+1}）`,[answer,...wrong.reverse()],0,`正确答案是“${answer}”。变式题考查同一教材能力点，但题目顺序和表达不同。`))}return result}
  const title=subjects[subject].chapters[chapter][0],base=[];
  for(let i=0;i<12;i++){
    if(subject==="math"){const a=12+chapter*7+i,b=3+i%6;if(chapter===0)base.push(q(`${a}×25＋${100-a}×25＝？`,["2500",String(a*25),"10000"],0,"运用乘法分配律：(a+b)×25=100×25。"));else if(chapter===1)base.push(q(`把${i+2}米长的绳子平均分成${b}段，每段占全长的？`,[`1/${b}`,`${i+2}/${b}`,`${b}/${i+2}`],0,"问占全长的几分之几，只看平均分成的份数。"));else if(chapter===2)base.push(q(`长方形长${a}米、宽${b}米，面积是？`,[`${a*b}平方米`,`${2*(a+b)}平方米`,`${a+b}米`],0,"长方形面积=长×宽。"));else if(chapter===3)base.push(q(`${i+2}.${i}千米等于多少米？`,[`${(i+2)*1000+i*100}米`,`${i+2+i}米`,`${(i+2)*100+i}米`],0,"1千米=1000米，小数部分也要乘1000。"));else base.push(q(`每本笔记本${b}元，买${i+3}本后付200元，应找回？`,[`${200-b*(i+3)}元`,`${b*(i+3)}元`,`${200-b}元`],0,"先算总价，再用付款金额减总价。"));}
    else if(subject==="science")base.push(q(`${title}探究中，下面哪项最符合科学方法？`,["记录证据并允许复查","只选择支持猜想的信息","把传说直接当结论"],0,"科学判断依靠可检查的证据。"));
    else base.push(q(`${title}任务中，哪种做法体现了清晰的计算思维？`,["先分解问题，再测试每一步","一次写完且不测试","发现错误就删除作品"],0,"分解、执行和测试是计算思维的重要过程。"));
  }return base;
}

Object.entries(quizzes).forEach(([subject,chapters])=>chapters.forEach((items,chapter)=>{items.forEach((item,i)=>{item.id=`${subject}-${chapter}-base-${i}`;item.chapter=chapter});generatedQuestions(subject,chapter).forEach((item,i)=>{item.id=`${subject}-${chapter}-adv-${i}`;item.chapter=chapter;items.push(item)});let extra=0;while(items.length<20){const seed=generatedQuestions(subject,chapter)[extra%generatedQuestions(subject,chapter).length],item={...seed,o:[...seed.o],id:`${subject}-${chapter}-extra-${extra}`,chapter,q:`${seed.q} · 进阶${extra+1}`};items.push(item);extra++}}));

const words = [
  ["school","/skuːl/","学校"],["library","/ˈlaɪbreri/","图书馆"],["teacher","/ˈtiːtʃə(r)/","老师"],
  ["breakfast","/ˈbrekfəst/","早餐"],["weather","/ˈweðə(r)/","天气"],["favorite","/ˈfeɪvərɪt/","最喜欢的"],
  ["help","/help/","帮助"],["please","/pliːz/","请"],["because","/bɪˈkɒz/","因为"]
];

const daily = [
  {subject:"english",chapter:0,title:"听音找单词",desc:"完成 10 道校园与日常词汇听辨题，可反复播放发音。",time:"10 分钟"},
  {subject:"math",chapter:0,title:"计算思维挑战",desc:"完成 10 道运算律与五年级衔接题，练习巧算与推理。",time:"12 分钟"},
  {subject:"chinese",chapter:2,title:"古诗理解挑战",desc:"完成 10 道诗句、作者、情感和表达理解题。",time:"10 分钟"}
];

const defaultState = {stars:0,completed:[],subjectDone:{chinese:0,math:0,english:0,science:0,coding:0},wishes:[],mistakes:{},lastSets:{},lastDate:"",streak:1};
let state = loadState();
let activeCourse = "chinese";
let activeMistakeSubject = "chinese";
let englishMode = "words";
let quiz = null;

function loadState(){
  try{const saved=JSON.parse(localStorage.getItem("grade5Adventure")||"{}");return {...defaultState,...saved,subjectDone:{...defaultState.subjectDone,...(saved.subjectDone||{})},wishes:Array.isArray(saved.wishes)?saved.wishes:[],mistakes:saved.mistakes||{},lastSets:saved.lastSets||{}};}catch{return {...defaultState,subjectDone:{...defaultState.subjectDone},wishes:[],mistakes:{},lastSets:{}};}
}
function saveState(){localStorage.setItem("grade5Adventure",JSON.stringify(state));renderStats();}
function iconSpeaker(){return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4Zm12.5-.8a5.4 5.4 0 0 1 0 7.6M19 5a9.4 9.4 0 0 1 0 14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'}

function showView(id){
  document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id===id));
  document.querySelectorAll(".nav-item").forEach(v=>v.classList.toggle("active",v.dataset.view===id));
  window.scrollTo({top:0,behavior:"smooth"});
  if(id==="progress")renderStats();
  if(id==="wishes")renderWishes();
  if(id==="mistakes")renderMistakes();
}
document.querySelectorAll("[data-view]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));
document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.go)));

function renderDaily(){
  document.getElementById("dailyTasks").innerHTML=daily.map((t,i)=>{
    const s=subjects[t.subject],done=state.completed.includes(`daily-${i}`);
    return `<article class="task-card ${done?"done":""}"><span class="task-number">0${i+1}</span><span class="subject-pill" style="color:${s.color};background:${s.soft}">${s.name}</span><h3>${t.title}</h3><p>${t.desc}</p><div class="task-meta"><span>${t.time}</span><span>完成得 5 星</span></div><button data-daily="${i}">${done?"已完成 · 再练一次":"开始挑战"}</button></article>`
  }).join("");
  document.querySelectorAll("[data-daily]").forEach(b=>b.onclick=()=>{const t=daily[+b.dataset.daily];startQuiz(t.subject,t.chapter,`daily-${b.dataset.daily}`)});
  const done=daily.filter((_,i)=>state.completed.includes(`daily-${i}`)).length;
  document.getElementById("dailyDone").textContent=`${done} / 3 已完成`;
  document.getElementById("dailyBar").style.width=`${done/3*100}%`;
}

function renderCourses(){
  document.getElementById("courseTabs").innerHTML=Object.entries(subjects).map(([id,s])=>`<button class="course-tab ${id===activeCourse?"active":""}" style="--tab-color:${s.color}" data-course="${id}"><i style="background:${s.color}"></i>${s.name}</button>`).join("");
  document.querySelectorAll("[data-course]").forEach(b=>b.onclick=()=>{activeCourse=b.dataset.course;renderCourses()});
  const s=subjects[activeCourse];
  document.getElementById("courseStage").innerHTML=`<div class="course-intro"><div><span class="section-kicker" style="color:${s.color}">${s.edition}</span><h2>${s.name}探索路线</h2><p>${s.intro}</p></div><div class="course-icon-large" style="background:${s.color}">${s.short}</div></div><div class="chapter-list">${s.chapters.map((c,i)=>`<article class="chapter-card" style="--chapter:${s.color};--chapter-soft:${s.soft}"><span class="chapter-index">${i+1}</span><div><h3>${c[0]}</h3><p>${c[1]}</p></div><button data-chapter="${i}">练一练</button></article>`).join("")}</div>`;
  document.querySelectorAll("[data-chapter]").forEach(b=>b.onclick=()=>startQuiz(activeCourse,+b.dataset.chapter,`${activeCourse}-${b.dataset.chapter}`));
  renderScienceComics();
}

function renderScienceComics(){
  const panel=document.getElementById("scienceComics");panel.hidden=activeCourse!=="science";if(panel.hidden)return;
  panel.innerHTML=`<div class="comic-heading"><div><span class="section-kicker">8–10 岁漫画科普</span><h2>千寻的科学漫画书架</h2></div><p>漫画负责打开好奇心，练习负责分清想象与证据。关于外星生命，只介绍科学探索，不把猜想说成事实。</p></div><div class="comic-grid">${scienceComics.map((c,i)=>`<article class="comic-card" style="--comic-bg:${c.bg};--comic-ink:${c.ink}"><div class="comic-scene"><span class="comic-ring"></span><span class="comic-orb"></span></div><div class="comic-body"><span>${c.tag}</span><h3>${c.title}</h3><p>${c.text}</p><button data-comic="${c.chapter}">阅读后挑战</button></div></article>`).join("")}</div>`;
  document.querySelectorAll("[data-comic]").forEach(b=>b.onclick=()=>startQuiz("science",+b.dataset.comic,`science-${b.dataset.comic}`));
}

function renderEnglish(){
  const modes=[["words","高频词卡"],["sounds","发音实验室"],["dialogue","情景小剧场"]];
  document.getElementById("englishMenu").innerHTML=modes.map(m=>`<button class="${englishMode===m[0]?"active":""}" data-english="${m[0]}">${m[1]}</button>`).join("");
  document.querySelectorAll("[data-english]").forEach(b=>b.onclick=()=>{englishMode=b.dataset.english;renderEnglish()});
  const box=document.getElementById("englishWorkbench");
  if(englishMode==="words"){
    box.innerHTML=`<div class="section-heading"><div><span class="section-kicker">本周 9 词</span><h2>校园与日常高频词</h2></div><button class="speak-btn" id="speakAll">${iconSpeaker()}连续听</button></div><div class="word-deck">${words.map((w,i)=>`<article class="word-card">${englishVisuals[w[0]]?`<img src="${imageUrl(englishVisuals[w[0]],"square")}" alt="${w[2]}的场景图片" loading="lazy">`:""}<strong>${w[0]}</strong><div class="phonetic">${w[1]}</div><p>${w[2]}</p><button class="speak-btn" data-speak="${w[0]}">${iconSpeaker()}听发音</button></article>`).join("")}</div>`;
    document.querySelectorAll("[data-speak]").forEach(b=>b.onclick=()=>speak(b.dataset.speak));
    document.getElementById("speakAll").onclick=()=>speakSequence(words.map(w=>w[0]));
  }else if(englishMode==="sounds"){
    box.innerHTML=`<div class="sound-lab"><span class="section-kicker">自然拼读</span><div class="sound-focus">sh</div><h2>像请大家安静时发出的声音</h2><p class="mouth-tip">嘴唇稍微向前，舌尖靠近上齿龈但不要碰到，让气流从中间通过。先听，再模仿三遍。</p><button class="primary-btn" id="soundDemo">${iconSpeaker()} 听示范：ship · fish · shop</button><h3>听一听，哪个单词含有 /ʃ/？</h3><div class="listen-options"><button data-soundword="cat">cat</button><button data-soundword="ship">ship</button><button data-soundword="desk">desk</button></div></div>`;
    document.getElementById("soundDemo").onclick=()=>speakSequence(["ship","fish","shop"]);
    document.querySelectorAll("[data-soundword]").forEach(b=>b.onclick=()=>{speak(b.dataset.soundword);toast(b.dataset.soundword==="ship"?"找对了！ship 含有 sh 的发音":"再听一次，注意开头的声音")});
  }else{
    const target="My name is Qianxun. I like science and astronomy.";
    box.innerHTML=`<div class="scene-title"><div><span class="section-kicker">场景 01 · 新同学见面</span><h2>Introduce yourself</h2></div><button class="speak-btn" id="playDialogue">${iconSpeaker()}播放对话</button></div><div class="scene-picture"><img src="${imageUrl("Two 10-year-old Chinese school children meeting and talking in a bright primary school classroom, friendly expressions, backpacks and books, no text, polished colorful educational illustration","landscape_16_9")}" alt="两位小学生在教室见面交谈的场景"></div><div class="dialogue-box"><div class="chat-row"><span class="avatar">A</span><div class="bubble"><strong>Hi! What's your name?</strong><span>你好！你叫什么名字？</span></div></div><div class="chat-row right"><span class="avatar">B</span><div class="bubble"><strong>My name is Qianxun. Nice to meet you.</strong><span>我叫千寻。很高兴认识你。</span></div></div><div class="chat-row"><span class="avatar">A</span><div class="bubble"><strong>What do you like?</strong><span>你喜欢什么？</span></div></div><div class="chat-row right"><span class="avatar">B</span><div class="bubble"><strong>I like science and astronomy.</strong><span>我喜欢科学和天文。</span></div></div></div><div class="speaking-challenge"><span class="section-kicker">开口挑战 · 90分通过</span><h3>${target}</h3><p>先听示范，再点击录音。浏览器会识别朗读内容并给出练习分。</p><div class="record-actions"><button class="speak-btn" id="speakTarget">${iconSpeaker()}听示范</button><button class="record-btn" id="recordTarget">开始录音</button></div><div class="speech-result" id="speechResult">等待千寻小朋友开口……</div></div>`;
    document.getElementById("playDialogue").onclick=()=>speakSequence(["Hi! What's your name?","My name is Leo. Nice to meet you.","Nice to meet you, too. What do you like?","I like science and football."]);
    document.getElementById("speakTarget").onclick=()=>speak(target);
    document.getElementById("recordTarget").onclick=()=>startSpeakingChallenge(target);
  }
}

function speak(text){
  if(!("speechSynthesis" in window))return toast("当前浏览器不支持语音播放");
  speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang="en-US";u.rate=.78;speechSynthesis.speak(u);
}
function speakSequence(list){let i=0;function next(){if(i>=list.length)return;const u=new SpeechSynthesisUtterance(list[i++]);u.lang="en-US";u.rate=.76;u.onend=()=>setTimeout(next,350);speechSynthesis.speak(u)}speechSynthesis.cancel();next()}

function normalizeText(text){return text.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]/g,"")}
function similarity(a,b){a=normalizeText(a);b=normalizeText(b);if(!a||!b)return 0;let same=0;const pool=[...b];for(const c of a){const i=pool.indexOf(c);if(i>=0){same++;pool.splice(i,1)}}return Math.round(200*same/(a.length+b.length))}
function startSpeakingChallenge(target){
  const Recognition=window.SpeechRecognition||window.webkitSpeechRecognition,result=document.getElementById("speechResult"),button=document.getElementById("recordTarget");
  if(!Recognition){result.innerHTML="当前浏览器不支持语音识别。建议使用最新版 Chrome 或 Edge，并允许麦克风权限。";return}
  const recognition=new Recognition();recognition.lang="en-US";recognition.interimResults=false;recognition.maxAlternatives=3;button.disabled=true;button.textContent="正在聆听…";result.textContent="请清楚地朗读完整句子。";
  recognition.onresult=e=>{const best=[...e.results[0]].map(r=>({text:r.transcript,confidence:r.confidence||.7,match:similarity(r.transcript,target)})).sort((a,b)=>b.match-a.match)[0];const score=Math.min(100,Math.round(best.match*.85+best.confidence*15));result.innerHTML=`识别到：<strong>${escapeHtml(best.text)}</strong><br><b class="speech-score ${score>=90?"pass":""}">${score} 分</b> ${score>=90?"通过！":"还需达到 90 分，请听示范后再试。"}`;if(score>=90){award("speaking-90","english",5);confetti()}};
  recognition.onerror=e=>{result.textContent=e.error==="not-allowed"?"没有麦克风权限，请在浏览器设置中允许后重试。":"没有听清，请靠近麦克风再试一次。"};
  recognition.onend=()=>{button.disabled=false;button.textContent="重新录音"};recognition.start();
}
function shuffle(items){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function selectQuizItems(subject,chapter){const key=`${subject}-${chapter}`,pool=quizzes[subject][chapter],last=new Set(state.lastSets[key]||[]);let candidates=shuffle(pool.filter(item=>!last.has(item.id)));if(candidates.length<10)candidates=candidates.concat(shuffle(pool.filter(item=>last.has(item.id))));const selected=candidates.slice(0,10);state.lastSets[key]=selected.map(item=>item.id);saveState();return selected}
function findQuestion(subject,id){for(let chapter=0;chapter<quizzes[subject].length;chapter++){const item=quizzes[subject][chapter].find(x=>x.id===id);if(item)return {...item,chapter}}return null}
function englishTarget(item){const quoted=item.q.match(/[“‘']([A-Za-z]+)[”’']/);if(quoted)return quoted[1].toLowerCase();const known=Object.keys(englishVisuals).find(word=>item.q.toLowerCase().includes(word));return known||null}
function questionMedia(item){if(quiz.subject!=="english")return "";const target=englishTarget(item);if(!target)return `<button class="question-audio" data-question-audio="${escapeHtml(item.q.replace(/[\u4e00-\u9fa5？?]/g," "))}">${iconSpeaker()}播放英语题目</button>`;const visual=englishVisuals[target];return `<div class="question-media">${visual?`<img src="${imageUrl(visual,"landscape_4_3")}" alt="${target} 对应的场景图片">`:""}<button class="question-audio" data-question-audio="${target}">${iconSpeaker()}播放 ${target} 发音</button></div>`}
function startQuiz(subject,chapter,taskId,options={}){const items=options.items||selectQuizItems(subject,chapter);quiz={subject,chapter,taskId,index:0,correct:0,locked:false,items,isMistake:!!options.isMistake,listening:taskId.startsWith("daily-0")};document.getElementById("quizModal").hidden=false;document.body.style.overflow="hidden";renderQuestion()}
function renderQuestion(){
  const items=quiz.items,item=items[quiz.index],s=subjects[quiz.subject],chapterName=quiz.isMistake?"错题三连胜":s.chapters[quiz.chapter][0];
  document.getElementById("quizSubject").textContent=`千寻小朋友 · ${s.name} · ${chapterName}`;
  document.getElementById("quizSubject").style.color=s.color;
  document.getElementById("quizStep").textContent=`${quiz.index+1} / ${items.length}`;
  document.getElementById("quizBody").innerHTML=`${questionMedia(item)}<h2 class="question-title" id="quizTitle">${item.q}</h2>${quiz.listening?`<button class="listen-question" id="listenQuestion">${iconSpeaker()}播放题目发音</button>`:""}<div class="option-list">${item.o.map((o,i)=>`<button class="option-btn" data-option="${i}">${String.fromCharCode(65+i)}. ${o}</button>`).join("")}</div><div id="feedbackArea"></div>`;
  document.querySelectorAll("[data-option]").forEach(b=>b.onclick=()=>answerQuestion(+b.dataset.option));
  document.querySelectorAll("[data-question-audio]").forEach(b=>b.onclick=()=>speak(b.dataset.questionAudio));
  if(quiz.listening){document.getElementById("listenQuestion").onclick=()=>speak(englishTarget(item)||item.o[item.a]);setTimeout(()=>speak(englishTarget(item)||item.o[item.a]),250)}
}
function answerQuestion(choice){
  if(quiz.locked)return;quiz.locked=true;const item=quiz.items[quiz.index],correct=choice===item.a;
  document.querySelectorAll("[data-option]").forEach((b,i)=>{if(i===item.a)b.classList.add("correct");else if(i===choice)b.classList.add("wrong")});
  if(correct)quiz.correct++;updateMistake(item,correct);const last=quiz.index===quiz.items.length-1;
  document.getElementById("feedbackArea").innerHTML=`<div class="feedback"><strong>${correct?"千寻小朋友，回答正确！":`千寻小朋友，这题已收进${subjects[quiz.subject].name}错题集${quiz.isMistake?"":"，扣 1 星"}`}</strong><br>${item.e}${quiz.isMistake&&correct?`<br>连续答对进度：${state.mistakes[item.id]?.streak||3} / 3`:""}</div><button class="next-btn" id="nextQuestion">${last?"查看结果":"下一题"}</button>`;
  document.getElementById("nextQuestion").onclick=()=>{if(last)finishQuiz();else{quiz.index++;quiz.locked=false;renderQuestion()}};
}
function updateMistake(item,correct){const record=state.mistakes[item.id];if(correct){if(record){record.streak=(record.streak||0)+1;if(record.streak>=3)delete state.mistakes[item.id]}}else{state.mistakes[item.id]={id:item.id,subject:quiz.subject,chapter:item.chapter??quiz.chapter,streak:0,wrongCount:(record?.wrongCount||0)+1,updatedAt:Date.now()};if(!quiz.isMistake)state.stars=Math.max(0,state.stars-1)}saveState()}
function finishQuiz(){
  const first=!state.completed.includes(quiz.taskId),earned=quiz.isMistake?0:first?5:1;if(!quiz.isMistake)award(quiz.taskId,quiz.subject,earned);else saveState();confetti();
  document.getElementById("quizBody").innerHTML=`<div class="result"><div class="result-star">★</div><h2>${quiz.correct===quiz.items.length?"千寻小朋友，全部答对！":"千寻小朋友，挑战完成！"}</h2><p>答对 ${quiz.correct} / ${quiz.items.length} 题。${quiz.isMistake?"错题需要连续答对 3 次才能毕业。":`本轮完成奖励 ${earned} 星；答错扣星已即时计算。`}</p><button class="primary-btn" id="finishQuiz">完成</button></div>`;
  document.getElementById("finishQuiz").onclick=closeQuiz;
}
function award(id,subject,stars){
  const first=!state.completed.includes(id);if(first){state.completed.push(id);state.subjectDone[subject]=(state.subjectDone[subject]||0)+1}state.stars+=stars;state.lastDate=new Date().toDateString();saveState();renderDaily();
}

function renderMistakes(){
  const records=Object.values(state.mistakes);document.getElementById("mistakeTotal").textContent=records.length;
  document.getElementById("mistakeTabs").innerHTML=Object.entries(subjects).map(([id,s])=>{const count=records.filter(x=>x.subject===id).length;return `<button class="course-tab ${id===activeMistakeSubject?"active":""}" style="--tab-color:${s.color}" data-mistake-tab="${id}"><i style="background:${s.color}"></i>${s.name} ${count}</button>`}).join("");
  document.querySelectorAll("[data-mistake-tab]").forEach(b=>b.onclick=()=>{activeMistakeSubject=b.dataset.mistakeTab;renderMistakes()});
  const current=records.filter(x=>x.subject===activeMistakeSubject),board=document.getElementById("mistakeBoard");
  if(!current.length){board.innerHTML=`<div class="empty-mistakes"><strong>${subjects[activeMistakeSubject].name}暂时没有错题</strong><p>继续认真思考，错题出现时我们再把它变成能力。</p></div>`;return}
  board.innerHTML=`<div class="mistake-list">${current.map(record=>{const item=findQuestion(record.subject,record.id);if(!item)return "";return `<article class="mistake-card"><div><span>${subjects[record.subject].chapters[record.chapter]?.[0]||"综合练习"}</span><h3>${escapeHtml(item.q)}</h3><p>答错 ${record.wrongCount} 次 · 连续答对 ${record.streak||0}/3</p></div><div class="streak-pips">${[1,2,3].map(i=>`<i class="${i<=(record.streak||0)?"active":""}"></i>`).join("")}</div></article>`}).join("")}</div><button class="primary-btn mistake-practice" id="practiceMistakes">开始${subjects[activeMistakeSubject].name}错题复习</button>`;
  document.getElementById("practiceMistakes").onclick=()=>{const items=current.map(r=>findQuestion(r.subject,r.id)).filter(Boolean).slice(0,10);startQuiz(activeMistakeSubject,items[0]?.chapter||0,`mistakes-${activeMistakeSubject}`,{items,isMistake:true})};
}

function renderWishes(){
  document.getElementById("wishStarBalance").textContent=state.stars;
  const list=document.getElementById("wishList");
  if(!state.wishes.length){list.innerHTML='<div class="empty-wishes"><strong>愿望板还是空的</strong><p>千寻可以先写下一个想通过努力实现的小愿望。</p></div>';return}
  list.innerHTML=`<div class="wish-list">${state.wishes.map(w=>{
    const status=w.redeemed?"已实现":w.stars?`萌萌妈咪定价 ${w.stars} 星`:"等待萌萌妈咪评星";
    const statusClass=w.redeemed?"redeemed":w.stars?"priced":"";
    return `<article class="wish-card ${w.redeemed?"redeemed":""}"><div class="wish-card-top"><div><h3>${escapeHtml(w.title)}</h3><p>${escapeHtml(w.reason||"这是千寻认真写下的愿望。")}</p></div><span class="wish-status ${statusClass}">${status}</span></div>${!w.stars&&!w.redeemed?`<div class="star-editor"><label>萌萌妈咪填写需要的星星</label><input type="number" min="1" max="999" inputmode="numeric" placeholder="例如 30" data-star-input="${w.id}"><button class="set-stars" data-set-stars="${w.id}">确认星星</button></div>`:""}${w.stars&&!w.redeemed?`<div class="wish-actions"><button class="redeem-wish" data-redeem="${w.id}" ${state.stars<w.stars?"disabled":""}>${state.stars>=w.stars?"用星星实现愿望":`还差 ${w.stars-state.stars} 星`}</button><button class="delete-wish" data-delete-wish="${w.id}">删除</button></div>`:""}${w.redeemed?`<div class="wish-actions"><button class="delete-wish" data-delete-wish="${w.id}">收进回忆盒</button></div>`:""}</article>`
  }).join("")}</div>`;
  document.querySelectorAll("[data-set-stars]").forEach(b=>b.onclick=()=>setWishStars(b.dataset.setStars));
  document.querySelectorAll("[data-redeem]").forEach(b=>b.onclick=()=>redeemWish(b.dataset.redeem));
  document.querySelectorAll("[data-delete-wish]").forEach(b=>b.onclick=()=>deleteWish(b.dataset.deleteWish));
}

function escapeHtml(value){const node=document.createElement("div");node.textContent=value;return node.innerHTML}
function setWishStars(id){const input=document.querySelector(`[data-star-input="${id}"]`),stars=Number(input.value);if(!Number.isInteger(stars)||stars<1||stars>999)return toast("萌萌妈咪，请填写 1–999 之间的整数星星");const wish=state.wishes.find(w=>String(w.id)===String(id));wish.stars=stars;saveState();renderWishes();toast("萌萌妈咪已和千寻约定好星星数量")}
function redeemWish(id){const wish=state.wishes.find(w=>String(w.id)===String(id));if(!wish||wish.redeemed||state.stars<wish.stars)return;state.stars-=wish.stars;wish.redeemed=true;wish.redeemedAt=Date.now();saveState();renderWishes();confetti();toast("千寻小朋友，愿望已点亮！请萌萌妈咪帮助兑现")}
function deleteWish(id){state.wishes=state.wishes.filter(w=>String(w.id)!==String(id));saveState();renderWishes();toast("愿望已从清单移除")}
function closeQuiz(){document.getElementById("quizModal").hidden=true;document.body.style.overflow="";quiz=null}
document.getElementById("closeQuiz").onclick=closeQuiz;
document.getElementById("quizModal").onclick=e=>{if(e.target.id==="quizModal")closeQuiz()};
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&quiz)closeQuiz()});

function renderStats(){
  document.getElementById("starCount").textContent=state.stars;
  if(document.getElementById("mistakeTotal")&&document.getElementById("mistakes")?.classList.contains("active"))renderMistakes();
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

document.getElementById("startToday").onclick=()=>{const next=daily.findIndex((_,i)=>!state.completed.includes(`daily-${i}`)),index=next<0?0:next,t=daily[index];startQuiz(t.subject,t.chapter,`daily-${index}`)};
document.getElementById("wishForm").onsubmit=e=>{e.preventDefault();const title=document.getElementById("wishTitle").value.trim(),reason=document.getElementById("wishReason").value.trim();if(title.length<2)return toast("千寻小朋友，请把愿望写得再清楚一点");state.wishes.unshift({id:Date.now(),title,reason,stars:0,redeemed:false,createdAt:Date.now()});saveState();e.target.reset();renderWishes();confetti();toast("愿望已提交给萌萌妈咪")};
document.getElementById("resetProgress").onclick=()=>{if(confirm("确定清空这台设备上的学习记录、错题和愿望清单吗？此操作无法撤销。")){state={...defaultState,subjectDone:{...defaultState.subjectDone},wishes:[],mistakes:{},lastSets:{}};saveState();renderDaily();renderWishes();renderMistakes();toast("本机学习记录已清空")}};

const hour=new Date().getHours();document.getElementById("greeting").textContent=hour<11?"早上好，千寻小朋友":hour<18?"下午好，千寻小朋友":"晚上好，千寻小朋友";
renderDaily();renderCourses();renderEnglish();renderWishes();renderMistakes();renderStats();
