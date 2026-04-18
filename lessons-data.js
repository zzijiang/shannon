// ═══════════════════════════════════════════════════════
// lessons-data.js — Stages 2-6 lesson content
// Shannon Python Learning Platform
// ═══════════════════════════════════════════════════════

// Code span helpers for syntax highlighting
const FN = t => `<span class="fn">${t}</span>`;
const KW = t => `<span class="kw">${t}</span>`;
const VAR = t => `<span class="var">${t}</span>`;
const NUM = t => `<span class="num">${t}</span>`;
const STR = t => `<span class="str">${t}</span>`;
const CM = t => `<span class="cm">${t}</span>`;

Object.assign(LEARN_PAGES, {

// ─── Stage 2: 核心数据结构 ───

L06: [
  {
    title: '认识列表 — 数据的收纳盒',
    desc: '<p>列表（List）是 Python 中最常用的数据结构，用方括号 <b>[ ]</b> 创建，元素用逗号分隔。</p>',
    type: 'info',
    code: `${VAR('fruits')} = [${STR('"苹果"')}, ${STR('"香蕉"')}, ${STR('"橘子"')}]\n${FN('print')}(${VAR('fruits')})`,
    codeOutput: "[\'苹果\', \'香蕉\', \'橘子\']",
  },
  {
    title: '列表索引',
    desc: '<p>索引从 <b>0</b> 开始，负数索引从后往前数。</p>',
    type: 'choice',
    codeShow: `${VAR('colors')} = [${STR('"红"')}, ${STR('"绿"')}, ${STR('"蓝"')}, ${STR('"黄"')}]\n${FN('print')}(${VAR('colors')}[${NUM('-2')}])`,
    options: ['红', '绿', '蓝', '黄'],
    correct: 2,
    feedback: { correct: '-2 是倒数第二个，即 "蓝"。', wrong: '-1 是最后一个（黄），-2 是倒数第二个。' }
  },
  {
    title: '列表切片',
    desc: '<p>切片：<b>列表[起始:结束]</b>，包含起始、不包含结束。</p>',
    type: 'choice',
    codeShow: `${VAR('nums')} = [${NUM('10')}, ${NUM('20')}, ${NUM('30')}, ${NUM('40')}, ${NUM('50')}]\n${FN('print')}(${VAR('nums')}[${NUM('1')}:${NUM('4')}])`,
    options: ['[10, 20, 30]', '[20, 30, 40]', '[20, 30, 40, 50]', '[10, 20, 30, 40]'],
    correct: 1,
    feedback: { correct: '索引 1 到 3（不含 4），就是 [20, 30, 40]。', wrong: '切片包含起始，不包含结束。' }
  },
  {
    title: 'append / pop / len',
    desc: '<p><b>append()</b> 添加元素，<b>pop()</b> 删除末尾，<b>len()</b> 获取长度。</p>',
    type: 'choice',
    codeShow: `${VAR('scores')} = [${NUM('90')}, ${NUM('85')}]\n${VAR('scores')}.${FN('append')}(${NUM('95')})\n${FN('print')}(${FN('len')}(${VAR('scores')}))`,
    options: ['2', '3', '4', '报错'],
    correct: 1,
    feedback: { correct: '原来 2 个，append 加 1 个，共 3 个。', wrong: 'append 会在末尾添加一个新元素。' }
  },
  {
    title: '动手：遍历列表',
    desc: '<p>用 for 循环打印 [1,2,3,4,5] 每个元素的平方。</p>',
    type: 'code',
    starter: 'nums = [1, 2, 3, 4, 5]\nfor n in nums:\n    print(n ** 2)',
    check: (output) => output.trim() === '1\n4\n9\n16\n25',
    successMsg: 'for 循环 + 列表是最常见的搭配！',
    failMsg: '提示：for n in nums: print(n ** 2)',
  },
],

L07: [
  {
    title: '元组 — 不可修改的列表',
    desc: '<p>元组用<b>圆括号 ( )</b> 创建，<b>创建后不能修改</b>。</p>',
    type: 'info',
    code: `${VAR('point')} = (${NUM('3')}, ${NUM('5')})\n${FN('print')}(${VAR('point')})\n${FN('print')}(${FN('type')}(${VAR('point')}))`,
    codeOutput: "(3, 5)\n<class \'tuple\'>",
  },
  {
    title: '元组不可变',
    desc: '<p>试图修改元组会报 <b>TypeError</b>。</p>',
    type: 'choice',
    codeShow: `${VAR('info')} = (${STR('"小明"')}, ${NUM('14')})\n${VAR('info')}[${NUM('1')}] = ${NUM('15')}`,
    options: ['正常运行', '报错：TypeError', '正常但不变', '报错：IndexError'],
    correct: 1,
    feedback: { correct: '元组是不可变的！', wrong: '元组是 immutable，任何修改操作都会报 TypeError。' }
  },
  {
    title: '元组解包',
    desc: '<p>一次性把元组的值分别赋给多个变量。</p>',
    type: 'choice',
    codeShow: `${VAR('name')}, ${VAR('age')} = (${STR('"小红"')}, ${NUM('13')})\n${FN('print')}(${VAR('name')})`,
    options: ['小红', '13', '("小红", 13)', '报错'],
    correct: 0,
    feedback: { correct: 'name 拿到了第一个值 "小红"。', wrong: '解包时变量和元素一一对应。' }
  },
  {
    title: '动手：用解包交换变量',
    desc: '<p>用一行代码交换 a 和 b 的值。</p>',
    type: 'code',
    starter: 'a = 10\nb = 20\na, b = b, a\nprint(a, b)',
    check: (output) => output.trim() === '20 10',
    successMsg: 'a, b = b, a 就是元组解包的妙用！',
    failMsg: '提示：a, b = b, a',
  },
],

L08: [
  {
    title: '集合 — 自动去重',
    desc: '<p>集合用 <b>{ }</b> 创建，<b>自动去除重复</b>，元素<b>无序</b>。</p>',
    type: 'info',
    code: `${VAR('nums')} = {${NUM('1')}, ${NUM('2')}, ${NUM('3')}, ${NUM('2')}, ${NUM('1')}}\n${FN('print')}(${VAR('nums')})`,
    codeOutput: '{1, 2, 3}',
  },
  {
    title: '去重技巧',
    desc: '<p>把列表转集合就能去重！</p>',
    type: 'choice',
    codeShow: `${VAR('names')} = [${STR('"小明"')}, ${STR('"小红"')}, ${STR('"小明"')}, ${STR('"小华"')}]\n${FN('print')}(${FN('len')}(${FN('set')}(${VAR('names')})))`,
    options: ['4', '3', '2', '1'],
    correct: 1,
    feedback: { correct: '去重后剩小明、小红、小华 3 个。', wrong: '集合自动去重，数不同名字的个数。' }
  },
  {
    title: '集合运算',
    desc: '<p><b>&</b> 交集、<b>|</b> 并集、<b>-</b> 差集</p>',
    type: 'choice',
    codeShow: `${VAR('a')} = {${NUM('1')}, ${NUM('2')}, ${NUM('3')}}\n${VAR('b')} = {${NUM('2')}, ${NUM('3')}, ${NUM('4')}}\n${FN('print')}(${VAR('a')} & ${VAR('b')})`,
    options: ['{1, 2, 3, 4}', '{2, 3}', '{1}', '{4}'],
    correct: 1,
    feedback: { correct: '& 是交集，2 和 3 在两个集合中都有。', wrong: '& 取两个集合共有的元素。' }
  },
  {
    title: '动手：找共同元素',
    desc: '<p>用集合找两个列表的共同元素。</p>',
    type: 'code',
    starter: 'a = [1, 2, 3, 4, 5]\nb = [4, 5, 6, 7, 8]\nprint(sorted(set(a) & set(b)))',
    check: (output) => output.trim() === '[4, 5]',
    successMsg: '集合运算让这种任务变得超简单！',
    failMsg: '直接运行即可。',
  },
],

L09: [
  {
    title: '字典 — 键值对',
    desc: '<p>字典用<b>键值对</b>存储数据，键和值用冒号分隔。</p>',
    type: 'info',
    code: `${VAR('student')} = {${STR('"name"')}: ${STR('"小明"')}, ${STR('"age"')}: ${NUM('14')}}\n${FN('print')}(${VAR('student')}[${STR('"name"')}])`,
    codeOutput: '小明',
  },
  {
    title: '增删改查',
    desc: '<p>字典[键] = 值 可以添加或修改。</p>',
    type: 'choice',
    codeShow: `${VAR('d')} = {${STR('"a"')}: ${NUM('1')}}\n${VAR('d')}[${STR('"b"')}] = ${NUM('2')}\n${VAR('d')}[${STR('"a"')}] = ${NUM('10')}\n${FN('print')}(${FN('len')}(${VAR('d')}))`,
    options: ['1', '2', '3', '报错'],
    correct: 1,
    feedback: { correct: '新增 "b"，修改 "a" 不增加长度，共 2 个。', wrong: '修改已有键的值不会增加字典长度。' }
  },
  {
    title: '遍历字典',
    desc: '<p>.items() 同时获取键和值。</p>',
    type: 'choice',
    codeShow: `${VAR('ages')} = {${STR('"小明"')}: ${NUM('14')}, ${STR('"小红"')}: ${NUM('13')}}\n${KW('for')} ${VAR('k')}, ${VAR('v')} ${KW('in')} ${VAR('ages')}.${FN('items')}():\n    ${FN('print')}(${VAR('k')}, ${VAR('v')})`,
    options: ['小明 14\n小红 13', '14 小明\n13 小红', '报错', '{小明: 14}'],
    correct: 0,
    feedback: { correct: '.items() 返回键值对。', wrong: '.items() 中 k 是键，v 是值。' }
  },
  {
    title: '动手：字典操作',
    desc: '<p>创建水果价格字典并打印苹果的价格。</p>',
    type: 'code',
    starter: 'prices = {"苹果": 5, "香蕉": 3, "橘子": 4}\nprint(prices["苹果"])',
    check: (output) => output.trim() === '5',
    successMsg: '你已掌握字典的创建和访问！',
    failMsg: '提示：print(prices["苹果"])',
  },
],

L10: [
  {
    title: '字符串索引和切片',
    desc: '<p>字符串可以像列表一样用索引和切片。字符串是<b>不可变</b>的。</p>',
    type: 'info',
    code: `${VAR('s')} = ${STR('"Hello, Python!"')}\n${FN('print')}(${VAR('s')}[${NUM('0')}])\n${FN('print')}(${VAR('s')}[${NUM('7')}:${NUM('13')}])`,
    codeOutput: 'H\nPython',
  },
  {
    title: '字符串方法',
    desc: '<p>.upper()/.lower()/.strip() 处理大小写和空格。</p>',
    type: 'choice',
    codeShow: `${VAR('text')} = ${STR('"  Hello World  "')}\n${FN('print')}(${VAR('text')}.${FN('strip')}().${FN('lower')}())`,
    options: ['  hello world  ', 'hello world', 'HELLO WORLD', 'Hello World'],
    correct: 1,
    feedback: { correct: 'strip() 去空格，lower() 转小写。', wrong: 'strip() 先去两端空格，lower() 再转小写。' }
  },
  {
    title: 'split 和 join',
    desc: '<p>split() 拆分，join() 拼接。</p>',
    type: 'choice',
    codeShow: `${VAR('words')} = ${STR('"a-b-c"')}.${FN('split')}(${STR('"-"')})\n${FN('print')}(${STR('" "')}  .${FN('join')}(${VAR('words')}))`,
    options: ['a-b-c', 'a b c', '["a","b","c"]', '报错'],
    correct: 1,
    feedback: { correct: 'split 拆开，join 用空格拼回。', wrong: 'split("-") 按横杠拆分成列表，" ".join() 用空格连接。' }
  },
  {
    title: 'f-string',
    desc: '<p>f-string：字符串前加 f，花括号里写变量。</p>',
    type: 'choice',
    codeShow: `${VAR('x')} = ${NUM('42')}\n${FN('print')}(${STR('f"答案是{x}"')})`,
    options: ['答案是{x}', '答案是42', 'f"答案是42"', '报错'],
    correct: 1,
    feedback: { correct: 'f-string 自动把 {x} 替换成变量值。', wrong: 'f-string 中花括号里的表达式会被求值替换。' }
  },
  {
    title: '动手：字符串处理',
    desc: '<p>把 "apple,banana,cherry" 按逗号拆分，用 " + " 拼接。</p>',
    type: 'code',
    starter: 'text = "apple,banana,cherry"\nprint(" + ".join(text.split(",")))',
    check: (output) => output.trim() === 'apple + banana + cherry',
    successMsg: 'split + join 是字符串处理的黄金搭档！',
    failMsg: '提示：text.split(",") 然后 " + ".join(...)',
  },
],

L11: [
  {
    title: '列表推导式',
    desc: '<p>格式：<b>[表达式 for 变量 in 可迭代对象]</b>，一行生成新列表。</p>',
    type: 'info',
    code: `${VAR('squares')} = [${VAR('i')} ** ${NUM('2')} ${KW('for')} ${VAR('i')} ${KW('in')} ${FN('range')}(${NUM('5')})]\n${FN('print')}(${VAR('squares')})`,
    codeOutput: '[0, 1, 4, 9, 16]',
  },
  {
    title: '带条件过滤',
    desc: '<p>末尾加 if 条件筛选元素。</p>',
    type: 'choice',
    codeShow: `${VAR('evens')} = [${VAR('x')} ${KW('for')} ${VAR('x')} ${KW('in')} ${FN('range')}(${NUM('10')}) ${KW('if')} ${VAR('x')} % ${NUM('2')} == ${NUM('0')}]\n${FN('print')}(${VAR('evens')})`,
    options: ['[1, 3, 5, 7, 9]', '[0, 2, 4, 6, 8]', '[0, 1, 2, 3, 4]', '报错'],
    correct: 1,
    feedback: { correct: 'if x % 2 == 0 筛选出偶数。', wrong: 'x % 2 == 0 只保留偶数。' }
  },
  {
    title: '字典推导式',
    desc: '<p>{键: 值 for 变量 in 可迭代对象}</p>',
    type: 'choice',
    codeShow: `${VAR('d')} = {${VAR('x')}: ${VAR('x')}**${NUM('2')} ${KW('for')} ${VAR('x')} ${KW('in')} ${FN('range')}(${NUM('4')})}\n${FN('print')}(${VAR('d')})`,
    options: ['{0: 0, 1: 1, 2: 4, 3: 9}', '[0, 1, 4, 9]', '{0, 1, 4, 9}', '报错'],
    correct: 0,
    feedback: { correct: '字典推导式生成键到值的映射。', wrong: '{x: x**2 ...} 生成的是字典。' }
  },
  {
    title: '动手：推导式练习',
    desc: '<p>用推导式生成 1-10 中奇数的平方列表。</p>',
    type: 'code',
    starter: 'result = [x**2 for x in range(1, 11) if x % 2 == 1]\nprint(result)',
    check: (output) => output.trim() === '[1, 9, 25, 49, 81]',
    successMsg: '推导式让代码简洁又优雅！',
    failMsg: '提示：[x**2 for x in range(1,11) if x%2==1]',
  },
],


// ─── Stage 3: 函数进阶 ───

L12: [
  {
    title: '用 def 定义函数',
    desc: '<p>函数就像一台小机器：给它材料，它加工出结果。用 <code class="code-inline">def</code> 定义。</p>',
    type: 'info',
    code: `${KW('def')} ${FN('greet')}(${VAR('name')}):
    ${FN('print')}(${STR('"你好，"')} + ${VAR('name')})

${FN('greet')}(${STR('"小明"')})`.replace(/\n/g, '\\n'),
    codeOutput: '你好，小明',
  },
  {
    title: 'return 返回结果',
    desc: '<p>return 把结果交回来，你可以用变量接住。</p>',
    type: 'choice',
    codeShow: `def add(a, b):\n    return a + b\nprint(add(3, 5))`,
    options: ['35', '8', '15', '报错'],
    correct: 1,
    feedback: { correct: 'return 把 3+5=8 交了回来。', wrong: 'a 和 b 是数字，+ 是加法。' }
  },
  {
    title: '默认参数',
    desc: '<p>参数可以有默认值，调用时不传就用默认值。</p>',
    type: 'choice',
    codeShow: 'def power(base, exp=2):\n    return base ** exp\nprint(power(3))\nprint(power(3, 3))',
    options: ['3 和 3', '9 和 27', '9 和 9', '报错'],
    correct: 1,
    feedback: { correct: 'power(3) 用默认 exp=2 得 9，power(3,3) 得 27。', wrong: '不传 exp 就用默认值 2。' }
  },
  {
    title: '多个参数和返回值',
    desc: '<p>函数可以返回多个值（实际返回元组）。</p>',
    type: 'info',
    codeShow: 'def min_max(nums):\n    return min(nums), max(nums)\n\nlo, hi = min_max([3, 1, 7, 2])\nprint(lo, hi)',
    codeOutput: '1 7',
  },
  {
    title: '动手：写乘法函数',
    desc: '<p>写函数 multiply(a, b) 返回乘积，打印 multiply(6, 7)。</p>',
    type: 'code',
    starter: 'def multiply(a, b):\n    return a * b\n\nprint(multiply(6, 7))',
    check: (output) => output.trim() === '42',
    successMsg: '6 × 7 = 42，函数基础掌握了！',
    failMsg: '提示：return a * b',
  },
],

L13: [
  {
    title: '*args 接收任意多参数',
    desc: '<p>参数名前加 * 把多余参数打包成元组。</p>',
    type: 'info',
    code: 'def total(*args):\n    return sum(args)\n\nprint(total(1, 2, 3, 4))',
    codeOutput: '10',
  },
  {
    title: '**kwargs 关键字参数',
    desc: '<p>** 把"名字=值"参数打包成字典。</p>',
    type: 'choice',
    codeShow: 'def info(**kw):\n    for k, v in kw.items():\n        print(k, "=", v)\ninfo(name="小红", age=14)',
    options: ['name = 小红\nage = 14', '报错', '{name: 小红}', '(小红, 14)'],
    correct: 0,
    feedback: { correct: '**kwargs 收集为字典，然后遍历打印。', wrong: '**kwargs 把关键字参数变成字典。' }
  },
  {
    title: '返回多个值',
    desc: '<p>用逗号返回多个值，实际返回元组。</p>',
    type: 'choice',
    codeShow: 'def calc(a, b):\n    return a+b, a*b\nprint(calc(3, 4))',
    options: ['7', '12', '(7, 12)', '报错'],
    correct: 2,
    feedback: { correct: '返回的是元组 (7, 12)。', wrong: '多个返回值打包成元组。' }
  },
  {
    title: '函数也是对象',
    desc: '<p>函数可以赋给变量、传给其他函数。</p>',
    type: 'choice',
    codeShow: 'def double(x): return x * 2\nf = double\nprint(f(7))',
    options: ['7', '14', '报错', 'double'],
    correct: 1,
    feedback: { correct: 'f 指向 double，f(7) = double(7) = 14。', wrong: 'f 和 double 指向同一个函数。' }
  },
  {
    title: '动手：写平均值函数',
    desc: '<p>写 avg(*args) 返回平均值。</p>',
    type: 'code',
    starter: 'def avg(*args):\n    return sum(args) / len(args)\n\nprint(avg(10, 20, 30))',
    check: (output) => output.trim() === '20.0',
    successMsg: '完美！*args 让函数接收任意个数字。',
    failMsg: '提示：sum(args) / len(args)',
  },
],

L14: [
  {
    title: '局部 vs 全局变量',
    desc: '<p>函数内创建的是局部变量，函数外的是全局变量。</p>',
    type: 'info',
    code: 'x = 10\ndef foo():\n    y = 5\n    print("函数内 x =", x)\nfoo()\nprint("函数外 x =", x)',
    codeOutput: '函数内 x = 10\n函数外 x = 10',
  },
  {
    title: 'global 关键字',
    desc: '<p>在函数内<b>修改</b>全局变量需要 global 声明。</p>',
    type: 'choice',
    codeShow: 'count = 0\ndef add_one():\n    global count\n    count += 1\nadd_one()\nadd_one()\nprint(count)',
    options: ['0', '1', '2', '报错'],
    correct: 2,
    feedback: { correct: 'global 声明后修改的是全局 count，调用两次变 2。', wrong: '用 global 后函数里的 count 就是全局变量。' }
  },
  {
    title: 'LEGB 查找规则',
    desc: '<p>Python 按 LEGB 顺序查找变量：</p>',
    type: 'choice',
    extraHTML: '<div class="concept-box"><h4>LEGB 规则</h4><ul><li><b>L</b> — Local（当前函数）</li><li><b>E</b> — Enclosing（外层函数）</li><li><b>G</b> — Global（模块全局）</li><li><b>B</b> — Built-in（内置）</li></ul></div>',
    options: ['Built-in → Global → Local', 'Local → Enclosing → Global → Built-in', 'Global → Local', 'Random'],
    correct: 1,
    feedback: { correct: '从里到外：L → E → G → B。', wrong: '记住顺序：Local → Enclosing → Global → Built-in。' }
  },
  {
    title: '变量遮蔽',
    desc: '<p>局部变量会遮住同名全局变量。</p>',
    type: 'code',
    starter: 'msg = "全局"\ndef test():\n    msg = "局部"\n    print("函数内:", msg)\ntest()\nprint("函数外:", msg)',
    check: (output) => output.includes('局部') && output.includes('全局'),
    successMsg: '函数内外看到的是不同的 msg！',
    failMsg: '直接运行观察变量遮蔽效果。',
  },
],

L15: [
  {
    title: 'lambda 匿名函数',
    desc: '<p>lambda 创建一次性小函数：<code class="code-inline">lambda 参数: 表达式</code></p>',
    type: 'info',
    code: 'double = lambda x: x * 2\nprint(double(5))\nprint(double(12))',
    codeOutput: '10\n24',
  },
  {
    title: 'lambda + map',
    desc: '<p>map(函数, 列表) 把函数作用到每个元素。</p>',
    type: 'choice',
    codeShow: 'nums = [1, 2, 3, 4]\nresult = list(map(lambda x: x**2, nums))\nprint(result)',
    options: ['[1, 2, 3, 4]', '[1, 4, 9, 16]', '[2, 4, 6, 8]', '报错'],
    correct: 1,
    feedback: { correct: 'lambda x: x**2 对每个元素求平方。', wrong: 'map 把函数应用到列表每个元素。' }
  },
  {
    title: 'lambda + sorted',
    desc: '<p>sorted 的 key 参数指定排序依据。</p>',
    type: 'choice',
    codeShow: 'students = [("小明", 88), ("小红", 95), ("小刚", 72)]\nresult = sorted(students, key=lambda s: s[1])\nprint(result[0][0])',
    options: ['小明', '小红', '小刚', '报错'],
    correct: 2,
    feedback: { correct: '按分数排序，72 分的小刚排第一。', wrong: 'key=lambda s: s[1] 按元组第二个元素排序。' }
  },
  {
    title: 'lambda + filter',
    desc: '<p>filter 只保留返回 True 的元素。</p>',
    type: 'code',
    starter: 'ages = [10, 15, 8, 20, 13]\nteens = list(filter(lambda a: a >= 13, ages))\nprint(teens)',
    check: (output) => output.trim() === '[15, 20, 13]',
    successMsg: 'filter + lambda 是数据筛选的利器！',
    failMsg: '直接运行即可。',
  },
],

L16: [
  {
    title: '函数返回函数',
    desc: '<p>函数可以返回另一个函数，这是装饰器的基础。</p>',
    type: 'info',
    code: 'def make_greeter(greeting):\n    def greeter(name):\n        return greeting + "，" + name + "！"\n    return greeter\n\nhi = make_greeter("嗨")\nprint(hi("小明"))',
    codeOutput: '嗨，小明！',
  },
  {
    title: '装饰器',
    desc: '<p>装饰器给函数"包一层"额外功能。</p>',
    type: 'info',
    code: 'def loud(func):\n    def wrapper(*args):\n        print(">>> 开始")\n        func(*args)\n        print(">>> 结束")\n    return wrapper\n\n@loud\ndef say(msg):\n    print(msg)\n\nsay("你好")',
    codeOutput: '>>> 开始\n你好\n>>> 结束',
  },
  {
    title: '@ 语法糖',
    desc: '<p>@装饰器名 等价于 函数 = 装饰器(函数)。</p>',
    type: 'choice',
    codeShow: 'def repeat3(func):\n    def wrapper(*a):\n        for _ in range(3): func(*a)\n    return wrapper\n\n@repeat3\ndef cheer(): print("加油！")\ncheer()',
    options: ['加油！', '加油！\n加油！\n加油！', '报错', 'None'],
    correct: 1,
    feedback: { correct: '装饰器让函数执行了 3 次。', wrong: 'repeat3 让原函数重复执行 3 次。' }
  },
  {
    title: '动手：计时装饰器',
    desc: '<p>运行一个带计时功能的装饰器。</p>',
    type: 'code',
    starter: 'from time import time\n\ndef timer(func):\n    def wrapper(*args):\n        start = time()\n        result = func(*args)\n        print(f"耗时：{time()-start:.4f}秒")\n        return result\n    return wrapper\n\n@timer\ndef slow_sum(n):\n    return sum(range(n))\n\nprint(slow_sum(1000000))',
    check: (output) => output.includes('耗时') && output.includes('499999500000'),
    successMsg: '你已经写出了实用的计时装饰器！',
    failMsg: '直接运行即可。',
  },
],

L17: [
  {
    title: 'yield 和生成器',
    desc: '<p>把 return 换成 yield，函数变成<b>生成器</b>——每次吐出一个值然后暂停。</p>',
    type: 'info',
    code: 'def count_up(n):\n    i = 1\n    while i <= n:\n        yield i\n        i += 1\n\nfor num in count_up(5):\n    print(num, end=" ")',
    codeOutput: '1 2 3 4 5 ',
  },
  {
    title: '生成器 vs 列表',
    desc: '<p>生成器按需计算，节省内存。</p>',
    type: 'choice',
    extraHTML: '<div class="concept-box"><h4>对比</h4><ul><li><b>列表</b>：[x**2 for x in range(1000000)] → 占大量内存</li><li><b>生成器</b>：(x**2 for x in range(1000000)) → 几乎不占内存</li></ul></div>',
    options: ['生成器比列表快', '生成器一次性算完', '生成器按需计算省内存', '没有区别'],
    correct: 2,
    feedback: { correct: '生成器的最大优势是按需计算、省内存。', wrong: '生成器是"懒计算"——只在需要时才算下一个值。' }
  },
  {
    title: '生成器表达式',
    desc: '<p>把 [] 换成 () 就得到生成器表达式。</p>',
    type: 'info',
    code: 'sq_gen = (x**2 for x in range(5))\nprint(list(sq_gen))',
    codeOutput: '[0, 1, 4, 9, 16]',
  },
  {
    title: '动手：斐波那契生成器',
    desc: '<p>运行斐波那契生成器。</p>',
    type: 'code',
    starter: 'def fib(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b\n\nfor num in fib(8):\n    print(num, end=" ")',
    check: (output) => output.trim() === '0 1 1 2 3 5 8 13',
    successMsg: '经典的斐波那契生成器！',
    failMsg: '直接运行即可。',
  },
],


// ─── Stage 4: 文件与异常 ───

L18: [
  {
    title: '文件读写概念',
    desc: '<p>Python 用 open() 打开文件。基本流程：<b>打开 → 读/写 → 关闭</b>。</p><p>模式：<b>\'r\'</b> 只读、<b>\'w\'</b> 写入（清空）、<b>\'a\'</b> 追加。</p>',
    type: 'info',
    code: `${CM('# 用 io.StringIO 在内存中模拟文件')}\n${KW('import')} ${VAR('io')}\n${VAR('f')} = ${VAR('io')}.${FN('StringIO')}()\n${VAR('f')}.${FN('write')}(${STR('"你好，世界！\\n"')})\n${VAR('f')}.${FN('seek')}(${NUM('0')})\n${FN('print')}(${VAR('f')}.${FN('read')}())`,
    codeOutput: '你好，世界！',
  },
  {
    title: '用 StringIO 模拟文件',
    desc: '<p>浏览器里无法创建真文件，但 io.StringIO 可以在内存中模拟。</p>',
    type: 'code',
    starter: 'import io\nf = io.StringIO()\nf.write("数学\\n")\nf.write("英语\\n")\nf.write("科学\\n")\nf.seek(0)\nfor line in f:\n    print(line.strip())',
    check: (output) => output.trim().split('\n').length >= 3,
    successMsg: '掌握了内存文件的读写操作！',
    failMsg: 'write 后记得 seek(0) 回到开头。',
  },
  {
    title: '逐行读取',
    desc: '<p>用 for 循环遍历文件对象可以逐行读取。</p>',
    type: 'choice',
    codeShow: 'import io\nf = io.StringIO("苹果\\n香蕉\\n橘子")\nfor line in f:\n    print("水果:", line.strip())',
    options: ['水果: 苹果\n水果: 香蕉\n水果: 橘子', '苹果 香蕉 橘子', '报错', '水果: 苹果香蕉橘子'],
    correct: 0,
    feedback: { correct: 'for 循环逐行遍历，每行一个水果。', wrong: 'for line in f 逐行读取。' }
  },
  {
    title: '文件模式区别',
    desc: '<p>选择正确的模式很重要！</p>',
    type: 'choice',
    extraHTML: '<div class="concept-box"><h4>文件打开模式</h4><ul><li><b>\'r\'</b> — 只读（文件不存在报错）</li><li><b>\'w\'</b> — 写入（清空原内容！）</li><li><b>\'a\'</b> — 追加（在末尾添加）</li></ul></div>',
    options: ['w 模式会在末尾追加', 'a 模式会清空原内容', 'w 模式会清空原内容后写入', 'r 模式可以写入'],
    correct: 2,
    feedback: { correct: 'w 模式会清空文件后重新写入，要追加应该用 a。', wrong: 'w 是 write，会清空；a 是 append，在末尾追加。' }
  },
],

L19: [
  {
    title: 'with 语句',
    desc: '<p>with 语句能<b>自动关闭</b>资源，不管代码正常结束还是出错。</p>',
    type: 'info',
    code: `${CM('# with 自动管理资源')}\n${KW('with')} ${FN('open')}(${STR('"data.txt"')}) ${KW('as')} ${VAR('f')}:\n    ${VAR('data')} = ${VAR('f')}.${FN('read')}()\n${CM('# 自动关闭，不用操心')}`,
    codeOutput: '（with 块结束后文件自动关闭）',
  },
  {
    title: 'with + StringIO',
    desc: '<p>io.StringIO 也支持 with 语句。</p>',
    type: 'code',
    starter: 'import io\nwith io.StringIO("Hello Python") as f:\n    print("内容:", f.read())\n    print("关闭了吗?", f.closed)\nprint("with 结束后:", f.closed)',
    check: (output) => output.includes('True'),
    successMsg: 'with 块结束后文件自动关闭了！',
    failMsg: '运行代码看看 with 的效果。',
  },
  {
    title: 'with 的好处',
    desc: '<p>with 不只用于文件，所有需要"用完就释放"的资源都行。</p>',
    type: 'choice',
    options: ['with 块结束后文件自动关闭', '必须手动 close()', 'with 只能读文件', 'with 是可选的'],
    correct: 0,
    feedback: { correct: 'with 最大好处就是自动管理资源关闭。', wrong: 'with 的核心就是自动关闭资源，即使发生异常。' }
  },
  {
    title: '为什么用 with？',
    desc: '<p>即使 with 块中出错，文件也会被关闭。比手动 close() 安全得多。</p>',
    type: 'choice',
    options: ['异常时文件不会关闭', '异常时文件仍会自动关闭', '异常时文件会被删除', '异常时跳过关闭'],
    correct: 1,
    feedback: { correct: '不管有没有异常，with 都会自动关闭！', wrong: 'with 的核心价值就是保证清理操作一定执行。' }
  },
],

L20: [
  {
    title: '什么是异常？',
    desc: '<p>程序运行时遇到错误叫<b>异常</b>。常见：ZeroDivisionError、TypeError、ValueError、IndexError。</p>',
    type: 'info',
    code: `${CM('# 除以零会引发异常')}\n${FN('print')}(${NUM('10')} / ${NUM('0')})`,
    codeOutput: 'ZeroDivisionError: division by zero',
  },
  {
    title: 'try / except',
    desc: '<p>用 try/except "接住"异常，让程序不崩溃。</p>',
    type: 'code',
    starter: 'try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("不能除以零！")\nprint("程序继续运行")',
    check: (output) => output.includes('不能除以零') && output.includes('继续运行'),
    successMsg: '即使出错，程序也没崩溃！',
    failMsg: '直接运行看 try/except 的效果。',
  },
  {
    title: 'else 和 finally',
    desc: '<p>else——没异常时执行；finally——不管怎样都执行。</p>',
    type: 'code',
    starter: 'try:\n    num = int("42")\nexcept ValueError:\n    print("转换失败")\nelse:\n    print("转换成功:", num)\nfinally:\n    print("处理完毕")',
    check: (output) => output.includes('转换成功: 42') && output.includes('处理完毕'),
    successMsg: 'else 和 finally 的执行时机掌握了！',
    failMsg: '运行代码观察各块的执行顺序。',
  },
  {
    title: '主动抛出异常 raise',
    desc: '<p>用 raise 主动抛出异常。</p>',
    type: 'code',
    starter: 'def check_age(age):\n    if age < 0: raise ValueError("年龄不能为负")\n    return f"{age}岁，合法"\n\ntry:\n    print(check_age(15))\n    print(check_age(-1))\nexcept ValueError as e:\n    print("错误:", e)',
    check: (output) => output.includes('15岁') && output.includes('年龄不能为负'),
    successMsg: 'raise 让你可以自定义错误检查！',
    failMsg: '直接运行看 raise 的效果。',
  },
  {
    title: '捕获特定异常',
    desc: '<p>多个 except 捕获不同类型的异常。</p>',
    type: 'choice',
    codeShow: 'try:\n    print("A")\n    x = 1/0\n    print("B")\nexcept:\n    print("C")\nfinally:\n    print("D")',
    options: ['A B C D', 'A C D', 'C D', 'A D'],
    correct: 1,
    feedback: { correct: 'A 打印后出错，B 不执行，C 捕获异常，D 始终执行。', wrong: '异常发生后跳到 except，finally 始终执行。' }
  },
],

L21: [
  {
    title: '什么是模块？',
    desc: '<p>模块就是一个 Python 文件。标准库可以直接 import 使用。</p>',
    type: 'info',
    code: `${KW('import')} ${VAR('math')}\n${FN('print')}(${VAR('math')}.${VAR('pi')})\n${FN('print')}(${VAR('math')}.${FN('sqrt')}(${NUM('16')}))`,
    codeOutput: '3.141592653589793\n4.0',
  },
  {
    title: '不同导入方式',
    desc: '<p>import math / from math import sqrt / import math as m</p>',
    type: 'code',
    starter: 'import math\nprint(math.sqrt(25))\n\nfrom math import sqrt\nprint(sqrt(25))\n\nimport math as m\nprint(m.sqrt(25))',
    check: (output) => output.trim().split('\n').every(l => l.trim() === '5.0'),
    successMsg: '三种方式都能得到同样的结果！',
    failMsg: '三种导入方式都应该打印 5.0。',
  },
  {
    title: '__name__ 的秘密',
    desc: '<p>直接运行时 __name__ == "__main__"，被 import 时等于模块名。</p>',
    type: 'choice',
    codeShow: 'if __name__ == "__main__":\n    print("我被直接运行了")',
    options: ['只在直接运行时执行', '只在被 import 时执行', '任何时候都执行', '永远不执行'],
    correct: 0,
    feedback: { correct: '对！__name__ == "__main__" 判断是否被直接运行。', wrong: '直接运行时 __name__ 等于 "__main__"。' }
  },
  {
    title: '标准库概览',
    desc: '<p>Python 自带很多有用的模块。</p>',
    type: 'choice',
    extraHTML: '<div class="concept-box"><h4>常用标准库</h4><ul><li><b>math</b> — 数学计算</li><li><b>random</b> — 随机数</li><li><b>json</b> — JSON 数据处理</li><li><b>datetime</b> — 日期时间</li><li><b>os/sys</b> — 系统交互</li></ul></div>',
    options: ['numpy 是标准库', 'json 是标准库', 'pandas 是标准库', 'requests 是标准库'],
    correct: 1,
    feedback: { correct: 'json 是 Python 自带的标准库。numpy/pandas/requests 需要额外安装。', wrong: '标准库不需要安装，import 即用。numpy 等是第三方库。' }
  },
],

L22: [
  {
    title: 'os.path 路径处理',
    desc: '<p>os.path 自动处理不同系统的路径分隔符。</p>',
    type: 'code',
    starter: 'import os.path\nprint(os.path.join("home", "user", "data.txt"))\nname, ext = os.path.splitext("photo.png")\nprint(f"名称: {name}, 扩展名: {ext}")',
    check: (output) => output.includes('data.txt') && output.includes('.png'),
    successMsg: 'os.path 是路径操作的瑞士军刀！',
    failMsg: '运行看看 os.path 的效果。',
  },
  {
    title: 'sys 模块',
    desc: '<p>sys 模块了解 Python 运行环境。</p>',
    type: 'code',
    starter: 'import sys\nprint("Python 版本:", sys.version.split()[0])\nprint("平台:", sys.platform)',
    check: (output) => output.includes('Python 版本') && output.includes('平台'),
    successMsg: '你看到了当前 Python 环境信息！',
    failMsg: '运行代码看看。',
  },
  {
    title: '命令行参数概念',
    desc: '<p>sys.argv 获取命令行参数（在浏览器中无法演示，但概念重要）。</p>',
    type: 'choice',
    codeShow: '# 运行: python greet.py 小明\nimport sys\nprint(f"你好，{sys.argv[1]}！")',
    options: ['输出: 你好，小明！', '输出: 你好，greet.py！', '输出: 你好，python！', '报错'],
    correct: 0,
    feedback: { correct: 'sys.argv[0] 是脚本名，[1] 是第一个参数。', wrong: 'sys.argv[1] 是用户传的第一个参数。' }
  },
  {
    title: 'os.path 实战',
    desc: '<p>判断路径是否为绝对路径。</p>',
    type: 'choice',
    codeShow: 'import os.path\nprint(os.path.isabs("/home/user"))\nprint(os.path.isabs("docs/file"))',
    options: ['True 和 True', 'True 和 False', 'False 和 True', 'False 和 False'],
    correct: 1,
    feedback: { correct: '/home/user 以 / 开头是绝对路径，docs/file 是相对路径。', wrong: '以 / 或盘符开头的是绝对路径。' }
  },
],

L23: [
  {
    title: 'math 模块',
    desc: '<p>数学计算好帮手。</p>',
    type: 'code',
    starter: 'import math\nprint("π =", round(math.pi, 4))\nprint("√2 =", round(math.sqrt(2), 4))\nprint("2^10 =", int(math.pow(2, 10)))\nprint("ceil(3.2) =", math.ceil(3.2))\nprint("floor(3.8) =", math.floor(3.8))',
    check: (output) => output.includes('3.1415') && output.includes('1024'),
    successMsg: 'math 模块让数学计算变简单！',
    failMsg: '运行看看各种数学函数。',
  },
  {
    title: 'random 模块',
    desc: '<p>随机数模块，做游戏和模拟必备。</p>',
    type: 'code',
    starter: 'import random\nprint("随机整数:", random.randint(1, 10))\nfruits = ["苹果", "香蕉", "橘子"]\nprint("随机选:", random.choice(fruits))\nnums = [1, 2, 3, 4, 5]\nrandom.shuffle(nums)\nprint("打乱:", nums)',
    check: (output) => output.includes('随机整数') && output.includes('随机选'),
    successMsg: '每次运行结果都不一样！',
    failMsg: '运行体验随机数。',
  },
  {
    title: 'json 模块',
    desc: '<p>处理 JSON 格式数据。</p>',
    type: 'code',
    starter: 'import json\ndata = {"name": "小明", "age": 14}\njson_str = json.dumps(data, ensure_ascii=False)\nprint("JSON:", json_str)\nparsed = json.loads(json_str)\nprint("名字:", parsed["name"])',
    check: (output) => output.includes('小明'),
    successMsg: 'json.dumps 序列化，json.loads 反序列化！',
    failMsg: '运行看看 JSON 转换。',
  },
  {
    title: 'collections.Counter',
    desc: '<p>快速统计元素出现次数。</p>',
    type: 'code',
    starter: 'from collections import Counter\nc = Counter("abracadabra")\nprint("统计:", dict(c))\nprint("最常见:", c.most_common(3))',
    check: (output) => output.includes('最常见'),
    successMsg: 'Counter 是数据统计的利器！',
    failMsg: '运行看 Counter 的统计效果。',
  },
],


// ─── Stage 5: 算法逻辑 ───

L24: [
  {
    title: '变量是标签，不是盒子',
    desc: '<p>Python 中变量是<b>标签</b>，贴在对象上。用 id() 查看对象内存地址。</p>',
    type: 'info',
    code: 'a = [1, 2, 3]\nb = a  # b 和 a 指向同一个列表\nb.append(4)\nprint(a)  # a 也变了！',
    codeOutput: '[1, 2, 3, 4]',
  },
  {
    title: '可变 vs 不可变',
    desc: '<p>不可变：int、str、tuple。可变：list、dict、set。</p>',
    type: 'choice',
    extraHTML: '<div class="concept-box"><h4>可变与不可变</h4><ul><li><b>不可变</b>：int、float、str、tuple</li><li><b>可变</b>：list、dict、set</li></ul></div>',
    options: ['字符串是可变的', '列表是不可变的', '字符串不可变，列表可变', '都是可变的'],
    correct: 2,
    feedback: { correct: '字符串不可变，列表可变。', wrong: '你能修改列表元素，但不能修改字符串字符。' }
  },
  {
    title: '浅拷贝 vs 深拷贝',
    desc: '<p>copy.copy() 只复制外层，copy.deepcopy() 完全独立。</p>',
    type: 'info',
    code: 'import copy\noriginal = [[1, 2], [3, 4]]\nshallow = copy.copy(original)\ndeep = copy.deepcopy(original)\noriginal[0].append(99)\nprint("shallow:", shallow[0])\nprint("deep:", deep[0])',
    codeOutput: 'shallow: [1, 2, 99]\ndeep: [1, 2]',
  },
  {
    title: '列表别名陷阱',
    desc: '<p>经典陷阱！这段代码的结果是？</p>',
    type: 'choice',
    codeShow: 'row = [0, 0, 0]\nmatrix = [row, row, row]\nmatrix[0][1] = 5\nprint(matrix)',
    options: ['[[0,5,0],[0,0,0],[0,0,0]]', '[[0,5,0],[0,5,0],[0,5,0]]', '报错', '[[5,5,5],[5,5,5],[5,5,5]]'],
    correct: 1,
    feedback: { correct: '三行是同一个 row！改一个全变。正确做法：[[0,0,0] for _ in range(3)]', wrong: '三个元素都指向同一个列表对象。' }
  },
],

L25: [
  {
    title: '什么是递归？',
    desc: '<p><b>递归</b>就是函数自己调用自己。</p>',
    type: 'info',
    code: 'def countdown(n):\n    if n <= 0:\n        print("发射！")\n    else:\n        print(n)\n        countdown(n - 1)\n\ncountdown(3)',
    codeOutput: '3\n2\n1\n发射！',
  },
  {
    title: '阶乘',
    desc: '<p>n! = n × (n-1)!，1! = 1。</p>',
    type: 'info',
    code: 'def factorial(n):\n    if n == 1: return 1\n    return n * factorial(n - 1)\n\nprint(factorial(5))',
    codeOutput: '120',
  },
  {
    title: '基准情况',
    desc: '<p>没有基准情况（base case）会怎样？</p>',
    type: 'choice',
    codeShow: 'def bad(n):\n    return n * bad(n-1)  # 没有基准情况！\nbad(5)',
    options: ['返回 120', '返回 0', '无限递归，RecursionError', '返回 None'],
    correct: 2,
    feedback: { correct: '没有停止条件，递归会溢出。', wrong: '没有基准情况，Python 约 1000 层后报 RecursionError。' }
  },
  {
    title: '动手：斐波那契',
    desc: '<p>补全递归斐波那契函数。</p>',
    type: 'code',
    starter: 'def fib(n):\n    if n <= 2: return 1\n    return fib(n-1) + fib(n-2)\n\nprint(fib(7))',
    check: (output) => output.trim() === '13',
    successMsg: 'fib(7) = 13，完全正确！',
    failMsg: '提示：fib(n) = fib(n-1) + fib(n-2)',
  },
  {
    title: '递归 vs 循环',
    desc: '<p>各有优势，根据问题选择。</p>',
    type: 'choice',
    extraHTML: '<div class="concept-box"><h4>对比</h4><ul><li><b>递归</b>：代码简洁，适合树形问题；可能栈溢出</li><li><b>循环</b>：效率高；有些问题写起来更复杂</li></ul></div>',
    options: ['递归总是更快', '循环总是更快', '各有优势，看情况选', '完全等价'],
    correct: 2,
    feedback: { correct: '实际编程中要根据问题特点选择。', wrong: '递归和循环各有擅长的场景。' }
  },
],


// ─── Stage 6: 面向对象与正则 ───

L26: [
  {
    title: '什么是类？',
    desc: '<p><b>类</b>是对象的设计图纸，定义属性和行为。</p>',
    type: 'info',
    code: 'class Cat:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\nkitty = Cat("小花", 3)\nprint(kitty.name, kitty.age)',
    codeOutput: '小花 3',
  },
  {
    title: 'self 是什么？',
    desc: '<p>self 代表对象自己，Python 自动传入。</p>',
    type: 'choice',
    codeShow: 'class Dog:\n    def __init__(self, name):\n        self.name = name\n    def bark(self):\n        print(f"{self.name}：汪汪！")\nd = Dog("旺财")\nd.bark()',
    options: ['旺财：汪汪！', 'self：汪汪！', '报错', 'Dog：汪汪！'],
    correct: 0,
    feedback: { correct: 'Python 自动把 d 传给 self。', wrong: 'd.bark() 时 self = d，所以 self.name = "旺财"。' }
  },
  {
    title: '实例属性和方法',
    desc: '<p>每个对象有独立的属性，方法通过 self 访问属性。</p>',
    type: 'info',
    code: 'class Student:\n    def __init__(self, name, grade):\n        self.name = name\n        self.grade = grade\n    def info(self):\n        print(f"{self.name}: {self.grade}分")\n\ns1 = Student("小明", 95)\ns2 = Student("小红", 88)\ns1.info()\ns2.info()',
    codeOutput: '小明: 95分\n小红: 88分',
  },
  {
    title: '动手：写方法',
    desc: '<p>补全 introduce 方法。</p>',
    type: 'code',
    starter: 'class Cat:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    def introduce(self):\n        print(f"我叫{self.name}，今年{self.age}岁")\n\nc = Cat("咪咪", 2)\nc.introduce()',
    check: (output) => output.trim() === '我叫咪咪，今年2岁',
    successMsg: '__init__ 设属性，方法用 self 读属性！',
    failMsg: '提示：print(f"我叫{self.name}，今年{self.age}岁")',
  },
  {
    title: '类 vs 字典',
    desc: '<p>类比字典强在哪？</p>',
    type: 'choice',
    options: ['类可以定义方法（行为）', '类更省内存', '类运行更快', '没有区别'],
    correct: 0,
    feedback: { correct: '类不仅存数据，还能定义行为（方法）！', wrong: '类的核心优势是把数据和操作数据的方法绑在一起。' }
  },
],

L27: [
  {
    title: '继承',
    desc: '<p>子类自动获得父类的属性和方法，还能添加自己的。</p>',
    type: 'info',
    code: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Cat(Animal):\n    def speak(self):\n        print(f"{self.name}：喵~")\n\nc = Cat("小花")\nc.speak()',
    codeOutput: '小花：喵~',
  },
  {
    title: 'super() 调用父类',
    desc: '<p>super() 在父类基础上扩展。</p>',
    type: 'info',
    code: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name)\n        self.breed = breed\n\nd = Dog("旺财", "柴犬")\nprint(d.name, d.breed)',
    codeOutput: '旺财 柴犬',
  },
  {
    title: '方法重写',
    desc: '<p>子类可以重写父类方法。</p>',
    type: 'choice',
    codeShow: 'class Shape:\n    def area(self): return 0\nclass Circle(Shape):\n    def __init__(self, r): self.r = r\n    def area(self): return 3.14 * self.r ** 2\nprint(Circle(5).area())',
    options: ['0', '78.5', '15.7', '报错'],
    correct: 1,
    feedback: { correct: 'Circle 重写了 area，3.14×25=78.5。', wrong: '子类方法优先于父类方法。' }
  },
  {
    title: 'isinstance',
    desc: '<p>检查对象是否是某个类（含子类）的实例。</p>',
    type: 'choice',
    codeShow: 'class Animal: pass\nclass Cat(Animal): pass\nc = Cat()\nprint(isinstance(c, Cat))\nprint(isinstance(c, Animal))',
    options: ['True, False', 'True, True', 'False, True', 'False, False'],
    correct: 1,
    feedback: { correct: 'Cat 实例也是 Animal 实例！', wrong: '子类的实例也是父类的实例。' }
  },
  {
    title: '动手：继承练习',
    desc: '<p>创建 Animal 和 Cat 子类。</p>',
    type: 'code',
    starter: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n    def sound(self): print("...")\n\nclass Cat(Animal):\n    def sound(self): print("喵")\n\nc = Cat("小花")\nc.sound()',
    check: (output) => output.trim() === '喵',
    successMsg: '方法重写成功！',
    failMsg: '直接运行即可。',
  },
],

L28: [
  {
    title: '__str__ 魔术方法',
    desc: '<p>定义 __str__ 让 print 显示友好信息。</p>',
    type: 'info',
    code: 'class Cat:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    def __str__(self):\n        return f"猫咪{self.name}，{self.age}岁"\n\nprint(Cat("小花", 3))',
    codeOutput: '猫咪小花，3岁',
  },
  {
    title: '__len__ 和 __getitem__',
    desc: '<p>让对象支持 len() 和下标访问。</p>',
    type: 'info',
    code: 'class Playlist:\n    def __init__(self, songs): self.songs = songs\n    def __len__(self): return len(self.songs)\n    def __getitem__(self, i): return self.songs[i]\n\np = Playlist(["晴天", "稻香", "七里香"])\nprint(len(p))\nprint(p[1])',
    codeOutput: '3\n稻香',
  },
  {
    title: '__eq__ 自定义相等',
    desc: '<p>默认 == 比较内存地址，__eq__ 可以自定义。</p>',
    type: 'choice',
    codeShow: 'class Point:\n    def __init__(self, x, y): self.x, self.y = x, y\n    def __eq__(self, other): return self.x==other.x and self.y==other.y\np1 = Point(1, 2)\np2 = Point(1, 2)\nprint(p1 == p2)',
    options: ['True', 'False', '报错', 'None'],
    correct: 0,
    feedback: { correct: '定义了 __eq__，坐标相同就相等！', wrong: '__eq__ 自定义了相等的含义。' }
  },
  {
    title: '动手：__add__ 运算符重载',
    desc: '<p>让两个 Vector 对象可以用 + 相加。</p>',
    type: 'code',
    starter: 'class Vector:\n    def __init__(self, x, y): self.x, self.y = x, y\n    def __add__(self, other): return Vector(self.x+other.x, self.y+other.y)\n    def __str__(self): return f"({self.x}, {self.y})"\n\nprint(Vector(1,2) + Vector(3,4))',
    check: (output) => output.trim() === '(4, 6)',
    successMsg: '你让对象支持了 + 运算符！',
    failMsg: '提示：return Vector(self.x+other.x, self.y+other.y)',
  },
],

L29: [
  {
    title: '正则表达式入门',
    desc: '<p><b>正则</b>用特殊符号描述文本模式。Python 用 re 模块。</p>',
    type: 'info',
    code: 'import re\ntext = "我的电话是 13812345678"\nresult = re.search(r"\\d{11}", text)\nprint(result.group())',
    codeOutput: '13812345678',
  },
  {
    title: '字符类和量词',
    desc: '<p>\\d 数字、\\w 字母数字、\\s 空白、. 任意字符。量词：* 0+、+ 1+、? 0或1、{n} 恰好n个。</p>',
    type: 'choice',
    codeShow: 'import re\nprint(re.findall(r"\\d+", "我有3只猫和12条鱼"))',
    options: ["['3', '1', '2']", "['3', '12']", "['312']", '报错'],
    correct: 1,
    feedback: { correct: '\\d+ 匹配连续数字，找到 3 和 12。', wrong: '+ 表示一个或多个，12 作为整体匹配。' }
  },
  {
    title: '分组 ()',
    desc: '<p>小括号把匹配的部分分组提取。</p>',
    type: 'info',
    code: 'import re\nm = re.search(r"(\\d{4})-(\\d{2})-(\\d{2})", "日期是 2024-09-15")\nprint("年:", m.group(1))\nprint("月:", m.group(2))\nprint("日:", m.group(3))',
    codeOutput: '年: 2024\n月: 09\n日: 15',
  },
  {
    title: 'findall 和 sub',
    desc: '<p>findall 找所有匹配，sub 做替换。</p>',
    type: 'code',
    starter: 'import re\ntext = "联系方式：13812345678"\nresult = re.sub(r"(\\d{3})\\d{4}(\\d{4})", r"\\1****\\2", text)\nprint(result)',
    check: (output) => output.trim() === '联系方式：138****5678',
    successMsg: '正则替换成功！',
    failMsg: '直接运行看 re.sub 的效果。',
  },
  {
    title: '常用正则模式',
    desc: '<p>选出正确描述。</p>',
    type: 'choice',
    extraHTML: '<div class="concept-box"><h4>常用字符类</h4><ul><li><b>\\d</b> — 数字</li><li><b>\\w</b> — 字母/数字/下划线</li><li><b>\\s</b> — 空白字符</li><li><b>.</b> — 任意字符（除换行）</li></ul></div>',
    options: ['\\d 匹配字母', '\\w 只匹配数字', '\\s 匹配空白字符', '. 只匹配句号'],
    correct: 2,
    feedback: { correct: '\\s 匹配空格、Tab、换行等空白字符。', wrong: '\\d=数字，\\w=字母数字下划线，\\s=空白，.=任意。' }
  },
],


});

Object.assign(PRACTICE_QUESTIONS, {

L06: [
  { type: 'choice', question: '以下哪种写法创建空列表？', options: ['list = {}', 'list = []', 'list = ()', 'list = ""'], correct: 1, explanation: '空列表用 [] 创建。{} 是空字典。' },
  { type: 'tf', question: 'Python 列表可以同时存不同类型数据。', correct: true, explanation: '列表是动态类型的，可以混合存储。' },
  { type: 'fill', question: '获取列表最后一个元素：nums[___]', template: ['nums[', '___', ']'], blanks: [{ answer: '-1', width: 60 }], explanation: '-1 表示最后一个元素。' },
  { type: 'choice', question: 'a=[1,2,3]; a.append([4,5]) 后 len(a) 是？', options: ['3', '4', '5', '报错'], correct: 1, explanation: 'append 把 [4,5] 作为整体添加，长度变为 4。' },
  { type: 'code', question: '排序列表 nums=[5,3,8,1,9] 并打印。', starter: 'nums = [5, 3, 8, 1, 9]\nnums.sort()\nprint(nums)', expected: '[1, 3, 5, 8, 9]', explanation: 'nums.sort() 原地排序。' },
  { type: 'choice', question: 'x=[1,2,3]; y=x[1:] 后 y 是？', options: ['[1,2]', '[2,3]', '[1]', '[1,2,3]'], correct: 1, explanation: 'x[1:] 从索引 1 到结尾。' },
],

L07: [
  { type: 'choice', question: '创建只有一个元素的元组？', options: ['t = (1)', 't = (1,)', 't = [1]', 't = tuple[1]'], correct: 1, explanation: '单元素元组必须加逗号：(1,)。' },
  { type: 'tf', question: '元组可以作为字典的键。', correct: true, explanation: '元组是不可变的，可以做字典键。列表不行。' },
  { type: 'fill', question: 'a, b = (10, 20) 后 b 的值是', template: ['b = ', '___'], blanks: [{ answer: '20', width: 60 }], explanation: '解包时一一对应。' },
  { type: 'choice', question: '哪个操作会让元组报错？', options: ['t[0]', 't[0]=10', 'len(t)', 't+(3,4)'], correct: 1, explanation: '元组不可变，不能修改元素。' },
  { type: 'tf', question: '两个元组可以用 + 拼接。', correct: true, explanation: '(1,2)+(3,4) 得到 (1,2,3,4)，创建新元组。' },
  { type: 'code', question: '用解包算 point=(3,7) 中 x+y 并打印。', starter: 'point = (3, 7)\nx, y = point\nprint(x + y)', expected: '10', explanation: '解包后 x+y = 3+7 = 10。' },
],

L08: [
  { type: 'choice', question: '创建空集合用什么？', options: ['s = {}', 's = set()', 's = {,}', 's = set[]'], correct: 1, explanation: '{} 创建的是空字典！空集合必须用 set()。' },
  { type: 'tf', question: '集合中的元素是有序的。', correct: false, explanation: '集合是无序的，不保证顺序。' },
  { type: 'fill', question: '{1,2,3} | {3,4,5} 有几个元素？', template: ['共 ', '___', ' 个'], blanks: [{ answer: '5', width: 50 }], explanation: '并集 {1,2,3,4,5}，5 个。' },
  { type: 'choice', question: 's={1,2,3}; s.add(2) 后 s 是？', options: ['{1,2,3,2}', '{1,2,3}', '报错', '{1,3}'], correct: 1, explanation: '添加已存在的元素不会变化。' },
  { type: 'code', question: '找两个列表的交集并排序打印。', starter: 'a = [1,2,3,4]\nb = [3,4,5,6]\nprint(sorted(set(a) & set(b)))', expected: '[3, 4]', explanation: 'set(a) & set(b) 是交集。' },
  { type: 'tf', question: '列表可以作为集合的元素。', correct: false, explanation: '集合元素必须可哈希（不可变），列表不行。' },
],

L09: [
  { type: 'choice', question: 'd["xxx"] vs d.get("xxx") 区别？', options: ['都报错', '都返回 None', 'd["xxx"]报错，get返回None', 'get报错'], correct: 2, explanation: '方括号找不到键会报 KeyError，get() 返回 None。' },
  { type: 'tf', question: '字典的键可以是列表。', correct: false, explanation: '键必须是不可变类型。' },
  { type: 'fill', question: '获取所有键：list(d.___())', template: ['list(d.', '___', '())'], blanks: [{ answer: 'keys', width: 70 }], explanation: 'd.keys() 返回所有键。' },
  { type: 'choice', question: 'd={"x":1}; d["x"]=2; d["y"]=3 后 len(d)?', options: ['1', '2', '3', '报错'], correct: 1, explanation: '修改 x 不增长度，新增 y 增 1，共 2。' },
  { type: 'code', question: '创建字典统计三人成绩均分。', starter: 'scores = {"小明": 90, "小红": 85, "小华": 92}\nprint(sum(scores.values()) / len(scores))', expected: '89.0', explanation: 'sum(values)/len 计算平均。' },
  { type: 'choice', question: '安全删除字典键的方法？', options: ['del d[k]', 'd.remove(k)', 'd.pop(k,None)', 'd.discard(k)'], correct: 2, explanation: 'pop(k,None) 键不存在时返回 None 不报错。' },
],

L10: [
  { type: 'choice', question: 's="Python" 中 s[1:4] 是？', options: ['"Pyt"', '"yth"', '"ytho"', '"Pyth"'], correct: 1, explanation: '索引 1(y) 到 3(h)，不含 4。' },
  { type: 'tf', question: '"Hello".upper() 会修改原字符串。', correct: false, explanation: '字符串不可变，upper() 返回新字符串。' },
  { type: 'fill', question: '用"-"连接列表：', template: ['"', '___', '".join(["a","b","c"])'], blanks: [{ answer: '-', width: 50 }], explanation: '"-".join() 用横杠连接。' },
  { type: 'choice', question: '"banana".count("an") 是？', options: ['1', '2', '3', '0'], correct: 1, explanation: '"an" 在 "banana" 中出现 2 次。' },
  { type: 'code', question: '转小写并替换空格为下划线。', starter: 's = "Hello World"\nprint(s.lower().replace(" ", "_"))', expected: 'hello_world', explanation: 'lower() 转小写，replace() 替换。' },
  { type: 'fill', question: 'f"结果是{2+3}" 输出：结果是___', template: ['结果是', '___'], blanks: [{ answer: '5', width: 50 }], explanation: 'f-string 中花括号内表达式被求值。' },
],

L11: [
  { type: 'choice', question: '[x*2 for x in range(4)] 是？', options: ['[0,2,4,6]', '[2,4,6,8]', '[0,1,2,3]', '[1,2,3,4]'], correct: 0, explanation: 'range(4)=0,1,2,3，每个乘2。' },
  { type: 'tf', question: '[x for x in range(10) if x>5] 是 [6,7,8,9]。', correct: true, explanation: '过滤出大于 5 的数。' },
  { type: 'fill', question: '生成平方列表：[x ___ for x in range(1,6)]', template: ['[x ', '___', ' for x in range(1,6)]'], blanks: [{ answer: '** 2', width: 70 }], explanation: 'x**2 是平方。' },
  { type: 'choice', question: '{x: x**2 for x in range(3)} 是？', options: ['{0,1,4}', '{0:0, 1:1, 2:4}', '[(0,0),(1,1),(2,4)]', '报错'], correct: 1, explanation: '字典推导式。' },
  { type: 'code', question: '提取 "Hello World 123" 中的数字字符。', starter: 's = "Hello World 123"\nprint([c for c in s if c.isdigit()])', expected: "['1', '2', '3']", explanation: 'c.isdigit() 判断是否数字。' },
  { type: 'tf', question: '集合推导式存在。', correct: true, explanation: '{表达式 for ...} 是集合推导式。' },
],

L12: [
  { type: 'choice', question: '正确的函数定义？', options: ['function f():', 'def f():', 'define f():', 'fun f():'], correct: 1, explanation: 'Python 用 def 定义函数。' },
  { type: 'tf', question: '没有 return 的函数返回 None。', correct: true, explanation: '默认返回 None。' },
  { type: 'fill', question: '补全 return 语句：', template: ['def sq(x):\n    ', '___', ' x**2'], blanks: [{ answer: 'return', width: 70 }], explanation: 'return 返回计算结果。' },
  { type: 'choice', question: 'def add(a,b=10): return a+b\nadd(5) 结果？', options: ['5', '10', '15', '报错'], correct: 2, explanation: 'b 用默认值 10，5+10=15。' },
  { type: 'code', question: '写 is_even(n) 判断偶数。', starter: 'def is_even(n):\n    return n % 2 == 0\nprint(is_even(4))', expected: 'True', explanation: 'n%2==0 就是偶数。' },
  { type: 'tf', question: '有默认参数时可以少传参数。', correct: true, explanation: 'Python 会用默认值。' },
],

L13: [
  { type: 'choice', question: '*args 收集的类型是？', options: ['list', 'tuple', 'dict', 'set'], correct: 1, explanation: '*args 收集为元组。' },
  { type: 'tf', question: '**kwargs 收集成字典。', correct: true, explanation: '关键字参数变成字典。' },
  { type: 'fill', question: '补全多返回值：', template: ['def f(lst):\n    ', '___', ' max(lst), min(lst)'], blanks: [{ answer: 'return', width: 70 }], explanation: '逗号分隔返回多个值。' },
  { type: 'choice', question: 'f=double; f(7) 输出？（double 返回 x*2）', options: ['7', '14', '报错', 'double'], correct: 1, explanation: 'f 指向 double 函数。' },
  { type: 'code', question: '写 avg(*args) 返回平均值。', starter: 'def avg(*args):\n    return sum(args)/len(args)\nprint(avg(10,20,30))', expected: '20.0', explanation: 'sum/len 求平均。' },
  { type: 'tf', question: 'docstring 只能用三双引号。', correct: false, explanation: '三单引号也可以。' },
],

L14: [
  { type: 'choice', question: 'x=5\ndef f(): x=10; print(x)\nf()\nprint(x)\n输出？', options: ['10和10', '5和5', '10和5', '报错'], correct: 2, explanation: '函数内 x 是局部的。' },
  { type: 'tf', question: '读取全局变量不需要 global。', correct: true, explanation: '只有修改才需要 global。' },
  { type: 'fill', question: '补全 global 声明：', template: ['score=0\ndef add():\n    ', '___', ' score\n    score+=10'], blanks: [{ answer: 'global', width: 70 }], explanation: 'global 声明后可修改全局变量。' },
  { type: 'choice', question: 'LEGB 中 E 代表？', options: ['External', 'Enclosing', 'Environment', 'Exception'], correct: 1, explanation: 'Enclosing 是外层嵌套函数。' },
  { type: 'code', question: '验证变量遮蔽。', starter: 'name = "全局"\ndef test():\n    name = "局部"\n    print(name)\ntest()\nprint(name)', expected: '局部\n全局', explanation: '函数内外看到不同的 name。' },
  { type: 'tf', question: '函数内赋值不加 global 会创建局部变量。', correct: true, explanation: '赋值操作让 Python 创建局部变量。' },
],

L15: [
  { type: 'choice', question: '正确的 lambda？', options: ['lambda: x -> x+1', 'lambda x: x+1', 'lambda(x){x+1}', 'def lambda(x)'], correct: 1, explanation: 'lambda 参数: 表达式。' },
  { type: 'tf', question: 'lambda 可以包含多条语句。', correct: false, explanation: 'lambda 只能一个表达式。' },
  { type: 'fill', question: '用 lambda+map 每个元素加1：', template: ['list(map(', '___', ', nums))'], blanks: [{ answer: 'lambda x: x+1', width: 140 }], explanation: 'lambda x: x+1 给每个元素加 1。' },
  { type: 'choice', question: 'filter(lambda x: x>0, [-1,0,2,-3,5]) 结果？', options: ['[-1,0,2,-3,5]', '[2,5]', '[0,2,5]', '[-1,-3]'], correct: 1, explanation: '只保留大于 0 的。' },
  { type: 'code', question: '按字符串长度排序。', starter: 'words = ["苹果","猫","巧克力蛋糕","花"]\nprint(sorted(words, key=lambda w: len(w)))', expected: "['猫', '花', '苹果', '巧克力蛋糕']", explanation: '按 len(w) 排序。' },
  { type: 'tf', question: 'map() 返回结果可直接当列表。', correct: false, explanation: 'map() 返回迭代器，需 list() 转换。' },
],

L16: [
  { type: 'choice', question: '装饰器本质是什么？', options: ['特殊的类', '接收函数并返回函数的函数', '循环结构', '内置模块'], correct: 1, explanation: '装饰器就是高阶函数。' },
  { type: 'tf', question: '@deco 等价于 func = deco(func)。', correct: true, explanation: '@ 是语法糖。' },
  { type: 'fill', question: '补全装饰器语法：', template: ['', '___', '\ndef greet(): return "你好"'], blanks: [{ answer: '@bold', width: 70 }], explanation: '@装饰器名 写在函数上方。' },
  { type: 'choice', question: 'wrapper 中 *args, **kwargs 的作用？', options: ['不接受参数', '接受任意参数传给原函数', '返回多个值', '语法错误'], correct: 1, explanation: '让装饰器适用于任何函数签名。' },
  { type: 'code', question: '运行 shout 装饰器。', starter: 'def shout(func):\n    def wrapper(*a):\n        return func(*a).upper()\n    return wrapper\n@shout\ndef hello(): return "hello world"\nprint(hello())', expected: 'HELLO WORLD', explanation: '装饰器把结果转大写。' },
  { type: 'tf', question: '只能用一个装饰器。', correct: false, explanation: '可以叠加多个 @装饰器。' },
],

L17: [
  { type: 'choice', question: '哪个关键字创建生成器？', options: ['return', 'yield', 'generate', 'next'], correct: 1, explanation: '有 yield 就是生成器函数。' },
  { type: 'tf', question: '生成器一次性算完所有值。', correct: false, explanation: '生成器是惰性的，按需计算。' },
  { type: 'fill', question: '生成器表达式用什么括号？', template: ['squares = ', '___', 'x**2 for x in range(5))'], blanks: [{ answer: '(', width: 40 }], explanation: '圆括号 () 是生成器，方括号 [] 是列表。' },
  { type: 'choice', question: 'g=gen(); next(g); next(g) 输出？（gen yields 1,2,3）', options: ['1和1', '1和2', '3和3', '报错'], correct: 1, explanation: '每次 next() 到下一个 yield。' },
  { type: 'code', question: '写 even_numbers(n) 生成前n个偶数。', starter: 'def even_numbers(n):\n    for i in range(n):\n        yield i * 2\nfor num in even_numbers(5):\n    print(num, end=" ")', expected: '0 2 4 6 8', explanation: 'yield i*2 产出偶数。' },
  { type: 'tf', question: '生成器只能用 for 遍历。', correct: false, explanation: '也可以用 next() 逐个获取。' },
],

L18: [
  { type: 'choice', question: 'open("f.txt","w") 中 w 模式？', options: ['清空后写入', '追加', '只读', '不存在报错'], correct: 0, explanation: 'w 会清空原内容。追加用 a。' },
  { type: 'tf', question: '不 close() 可能丢数据。', correct: true, explanation: '缓冲区数据可能没写入磁盘。' },
  { type: 'choice', question: '逐行读取文件？', options: ['for line in f:', 'f.read(1)', 'f.readall()', 'f.scan()'], correct: 0, explanation: 'for 循环遍历文件是最推荐的方式。' },
  { type: 'fill', question: '追加模式打开文件：', template: ['open("log.txt", "', '___', '")'], blanks: [{ answer: 'a', width: 40 }], explanation: 'a = append 追加。' },
  { type: 'tf', question: 'io.StringIO 创建真实磁盘文件。', correct: false, explanation: 'StringIO 是内存中的模拟文件。' },
  { type: 'choice', question: 'f.readlines() 返回什么？', options: ['列表', '字符串', '整数', '字典'], correct: 0, explanation: '返回列表，每行一个元素。' },
],

L19: [
  { type: 'tf', question: 'with 结束后文件自动关闭。', correct: true, explanation: '这是 with 的核心功能。' },
  { type: 'choice', question: '最推荐的文件打开方式？', options: ['with open() as f:', 'f=open(); f.close()', 'f=open()', 'open().read()'], correct: 0, explanation: 'with 自动管理关闭，最安全。' },
  { type: 'fill', question: '补全 with 语句：', template: ['', '___', ' open("data.csv") as f:'], blanks: [{ answer: 'with', width: 50 }], explanation: 'with 关键字开启上下文管理器。' },
  { type: 'choice', question: 'with 中出异常，文件会？', options: ['仍自动关闭', '不关闭', '被删除', '取决于异常'], correct: 0, explanation: '不管是否异常都会自动关闭。' },
  { type: 'tf', question: 'with 只能用于文件。', correct: false, explanation: '网络连接、数据库等都可以。' },
  { type: 'fill', question: 'with open("f") ___ file:', template: ['with open("f") ', '___', ' file:'], blanks: [{ answer: 'as', width: 40 }], explanation: 'as 把文件对象赋给变量。' },
],

L20: [
  { type: 'code', question: '安全除法函数。', starter: 'def safe_div(a,b):\n    try: return a/b\n    except ZeroDivisionError: return "不能除以零"\nprint(safe_div(10,2))\nprint(safe_div(5,0))', expected: '5.0\n不能除以零', explanation: 'try/except 捕获除零错误。' },
  { type: 'choice', question: 'try:A;1/0;B except:C finally:D 输出？', options: ['A C D', 'A B C D', 'A B D', 'C D'], correct: 0, explanation: 'A打印，出错跳过B，C捕获，D始终。' },
  { type: 'fill', question: '补全 except：', template: ['try:\n    int("abc")\n', '___', ' ValueError:\n    print("失败")'], blanks: [{ answer: 'except', width: 60 }], explanation: 'except 捕获特定异常。' },
  { type: 'tf', question: 'finally 只在无异常时执行。', correct: false, explanation: 'finally 始终执行。' },
  { type: 'code', question: '捕获异常并用 finally。', starter: 'try:\n    int("hello")\nexcept ValueError:\n    print("转换失败")\nfinally:\n    print("程序结束")', expected: '转换失败\n程序结束', explanation: 'except 捕获错误，finally 始终执行。' },
  { type: 'choice', question: 'raise ValueError("err") 的作用？', options: ['主动抛出异常', '捕获异常', '忽略异常', '打印不抛出'], correct: 0, explanation: 'raise 主动抛出异常。' },
],

L21: [
  { type: 'fill', question: '只导入 sqrt：', template: ['', '___', ' math import sqrt'], blanks: [{ answer: 'from', width: 50 }], explanation: 'from...import 导入特定函数。' },
  { type: 'choice', question: 'import numpy as np 中 as 的作用？', options: ['取别名', '只导入部分', '安装模块', '检查是否存在'], correct: 0, explanation: 'as 给模块取简短别名。' },
  { type: 'code', question: '用 math 算 π 和 √144。', starter: 'import math\nprint(round(math.pi, 2))\nprint(math.sqrt(144))', expected: '3.14\n12.0', explanation: 'math.pi 和 math.sqrt()。' },
  { type: 'tf', question: '直接运行时 __name__ == "__main__"。', correct: true, explanation: '被 import 时等于模块名。' },
  { type: 'choice', question: '哪个不是标准库？', options: ['numpy', 'math', 'random', 'json'], correct: 0, explanation: 'numpy 是第三方库。' },
  { type: 'code', question: '生成随机数。', starter: 'import random\nprint(random.randint(1, 100))', expected: null, explanation: 'randint(1,100) 生成 1-100 随机整数。' },
],

L22: [
  { type: 'choice', question: 'os.path.join() 的作用？', options: ['拼接路径', '创建文件', '检查存在', '删除文件'], correct: 0, explanation: '自动用正确的分隔符拼接。' },
  { type: 'fill', question: '获取扩展名：os.path.___("photo.png")', template: ['os.path.', '___', '("photo.png")'], blanks: [{ answer: 'splitext', width: 80 }], explanation: 'splitext 拆分文件名和扩展名。' },
  { type: 'tf', question: 'sys.argv[0] 是脚本文件名。', correct: true, explanation: '第 0 个元素是文件名。' },
  { type: 'choice', question: 'python test.py 小明 14 → sys.argv?', options: ['["test.py","小明","14"]', '["python","test.py","小明","14"]', '["小明","14"]', '["test.py","小明",14]'], correct: 0, explanation: '不含 python，所有参数是字符串。' },
  { type: 'tf', question: 'os.path.join() 自动处理不同系统的分隔符。', correct: true, explanation: 'Windows 用 \\，Linux 用 /。' },
  { type: 'choice', question: 'Pyodide 中 sys.platform 返回？', options: ['emscripten', 'windows', 'linux', 'browser'], correct: 0, explanation: 'Pyodide 基于 Emscripten 编译。' },
],

L23: [
  { type: 'code', question: 'math.ceil(7.1) 和 math.floor(7.9)。', starter: 'import math\nprint(math.ceil(7.1))\nprint(math.floor(7.9))', expected: '8\n7', explanation: 'ceil 向上，floor 向下。' },
  { type: 'choice', question: 'random.choice([1,2,3]) 做什么？', options: ['随机选一个', '返回第一个', '打乱列表', '生成随机数'], correct: 0, explanation: '从列表中随机选一个元素。' },
  { type: 'code', question: '字典转 JSON 字符串。', starter: 'import json\ndata = {"name":"小红","score":95}\nprint(json.dumps(data, ensure_ascii=False))', expected: '{"name": "小红", "score": 95}', explanation: 'json.dumps 序列化。' },
  { type: 'fill', question: 'Counter 在哪个模块？', template: ['from ', '___', ' import Counter'], blanks: [{ answer: 'collections', width: 90 }], explanation: 'Counter 在 collections 模块中。' },
  { type: 'tf', question: 'random.shuffle() 返回新列表。', correct: false, explanation: 'shuffle 原地修改，返回 None。' },
  { type: 'choice', question: 'json.loads() 解析 JSON 对象返回什么类型？', options: ['dict', 'str', 'list', 'int'], correct: 0, explanation: 'JSON 的 {} 对应 Python 的字典。' },
],

L24: [
  { type: 'tf', question: 'a=[1,2,3]; b=a 后，a 和 b 指向同一个对象。', correct: true, explanation: '赋值只是让 b 也指向同一个列表。' },
  { type: 'choice', question: '哪个是可变类型？', options: ['int', 'str', 'tuple', 'dict'], correct: 3, explanation: 'dict 是可变的。' },
  { type: 'choice', question: 'a=[1,2,3]; b=a[:]; b.append(4) 后 a?', options: ['[1,2,3]', '[1,2,3,4]', '[4,1,2,3]', '报错'], correct: 0, explanation: 'a[:] 是浅拷贝，修改 b 不影响 a。' },
  { type: 'fill', question: '完全独立复制：copy.___', template: ['copy.', '___', '(original)'], blanks: [{ answer: 'deepcopy', width: 90 }], explanation: 'deepcopy 递归复制所有层级。' },
  { type: 'code', question: '创建独立的 3×3 矩阵。', starter: 'matrix = [[0,0,0] for _ in range(3)]\nprint(matrix)', expected: '[[0, 0, 0], [0, 0, 0], [0, 0, 0]]', explanation: '列表推导式每次创建新列表。' },
  { type: 'tf', question: 'x=5; y=x; x=10 后 y 也变成 10。', correct: false, explanation: 'x 指向新对象，y 仍指向 5。' },
],

L25: [
  { type: 'choice', question: '避免无限递归需要什么？', options: ['return', '基准情况', 'while循环', 'try/except'], correct: 1, explanation: '基准情况是递归停止的条件。' },
  { type: 'code', question: '递归求 1+2+...+n。', starter: 'def sum_to(n):\n    if n == 1: return 1\n    return n + sum_to(n-1)\nprint(sum_to(10))', expected: '55', explanation: '1+2+...+10 = 55。' },
  { type: 'fill', question: 'Python 默认最大递归深度？', template: ['大约 ', '___', ' 层'], blanks: [{ answer: '1000', width: 60 }], explanation: '默认约 1000 层。' },
  { type: 'choice', question: 'factorial(0) 应返回？', options: ['0', '1', '-1', '报错'], correct: 1, explanation: '数学上 0! = 1。' },
  { type: 'tf', question: '所有递归都可以用循环实现。', correct: true, explanation: '理论上是的，用栈+循环可以模拟。' },
  { type: 'choice', question: '朴素斐波那契递归的复杂度？', options: ['O(n)', 'O(n²)', 'O(2ⁿ)', 'O(log n)'], correct: 2, explanation: '大量重复计算，接近 O(2ⁿ)。' },
],

L26: [
  { type: 'choice', question: '定义类的关键字？', options: ['def', 'class', 'struct', 'object'], correct: 1, explanation: '用 class 定义类。' },
  { type: 'fill', question: '初始化方法名：', template: ['def ', '___', '(self, ...):'], blanks: [{ answer: '__init__', width: 90 }], explanation: '前后各两个下划线。' },
  { type: 'tf', question: '调用方法时需手动传 self。', correct: false, explanation: 'Python 自动把对象传给 self。' },
  { type: 'choice', question: 'Box(10).size + Box(20).size = ?', options: ['10', '20', '30', '报错'], correct: 2, explanation: '10 + 20 = 30。' },
  { type: 'code', question: '写 Rectangle 类。', starter: 'class Rectangle:\n    def __init__(self, w, h): self.w, self.h = w, h\n    def area(self): return self.w * self.h\nprint(Rectangle(3, 5).area())', expected: '15', explanation: '3 × 5 = 15。' },
  { type: 'choice', question: '哪个不是正确创建对象的方式？', options: ['Cat("花",2)', 'Cat(name="花",age=2)', 'new Cat("花",2)', 'Cat(age=2,name="花")'], correct: 2, explanation: 'Python 不用 new 关键字。' },
],

L27: [
  { type: 'fill', question: 'Dog 继承 Animal：', template: ['class ', '___', ':'], blanks: [{ answer: 'Dog(Animal)', width: 120 }], explanation: '括号里写父类名。' },
  { type: 'choice', question: '子类调用父类 __init__？', options: ['parent.__init__()', 'super().__init__()', 'base.__init__()', 'this.__init__()'], correct: 1, explanation: 'super() 是标准做法。' },
  { type: 'tf', question: '子类不能重写父类方法。', correct: false, explanation: '子类可以 override 父类方法。' },
  { type: 'code', question: 'Cat 继承 Animal 重写 sound。', starter: 'class Animal:\n    def __init__(self, name): self.name = name\n    def sound(self): print("...")\nclass Cat(Animal):\n    def sound(self): print("喵")\nCat("花").sound()', expected: '喵', explanation: '方法重写。' },
  { type: 'choice', question: 'isinstance(True, int)?', options: ['True', 'False', '报错', 'None'], correct: 0, explanation: 'bool 是 int 的子类！' },
  { type: 'choice', question: 'Python 支持多重继承？', options: ['不支持', '只能两个', '支持多个', '只有Java支持'], correct: 2, explanation: 'class C(A, B) 可以。' },
],

L28: [
  { type: 'choice', question: 'print(obj) 调用哪个方法？', options: ['__repr__', '__str__', '__print__', '__display__'], correct: 1, explanation: 'print 优先调用 __str__。' },
  { type: 'fill', question: '支持 len()：', template: ['def ', '___', '(self):'], blanks: [{ answer: '__len__', width: 80 }], explanation: '定义 __len__ 后可用 len()。' },
  { type: 'choice', question: '支持 obj[i] 的魔术方法？', options: ['__index__', '__get__', '__getitem__', '__item__'], correct: 2, explanation: '__getitem__ 支持下标访问。' },
  { type: 'tf', question: '__eq__ 可以自定义相等判断。', correct: true, explanation: '根据属性值判断而非内存地址。' },
  { type: 'choice', question: '支持减法的魔术方法？', options: ['__minus__', '__sub__', '__subtract__', '__neg__'], correct: 1, explanation: '__sub__ 对应 - 运算符。' },
  { type: 'code', question: 'Score 类实现 __str__。', starter: 'class Score:\n    def __init__(self, v): self.v = v\n    def __str__(self): return f"得分：{self.v}分"\nprint(Score(95))', expected: '得分：95分', explanation: '__str__ 自定义打印格式。' },
],

L29: [
  { type: 'choice', question: 're.search vs re.match？', options: ['没区别', 'match只匹配开头，search搜索全部', 'search只匹配开头', 'match返回所有'], correct: 1, explanation: 'match 从开头匹配，search 搜索整个字符串。' },
  { type: 'fill', question: '匹配一个或多个数字：', template: ['r"', '___', '"'], blanks: [{ answer: '\\d+', width: 60 }], explanation: '\\d 一个数字，+ 一个或多个。' },
  { type: 'choice', question: 're.findall(r"[aeiou]","hello world")?', options: ['["hello","world"]', '["e","o","o"]', '["h","l","l"]', '["eo","o"]'], correct: 1, explanation: '[aeiou] 匹配元音字母。' },
  { type: 'code', question: '提取文本中的数字。', starter: 'import re\ntext = "小明98分小红87分"\nprint(re.findall(r"\\d+", text))', expected: "['98', '87']", explanation: '\\d+ 找所有连续数字。' },
  { type: 'tf', question: '. 可以匹配换行符。', correct: false, explanation: '默认不匹配换行，需要 re.DOTALL。' },
  { type: 'choice', question: 're.sub(r"\\d","*","abc123")?', options: ['"abc***"', '"***123"', '"abc*"', '"******"'], correct: 0, explanation: '每个数字替换成 *。' },
],


});

Object.assign(CHECKPOINT_QUESTIONS, {

CP3: [
  { type: 'choice', question: '哪个不是 Python 内置数据结构？', options: ['list', 'tuple', 'array', 'dict'], correct: 2, explanation: 'array 需要导入模块。' },
  { type: 'tf', question: '空的 {} 创建的是字典而不是集合。', correct: true, explanation: '空集合必须用 set()。' },
  { type: 'choice', question: 'nums=[1,2,3,4,5]; nums[1:4] = ?', options: ['[1,2,3]', '[2,3,4]', '[2,3,4,5]', '[1,2,3,4]'], correct: 1, explanation: '索引 1 到 3（不含 4）。' },
  { type: 'fill', question: '取字典所有值：d.___()', template: ['d.', '___', '()'], blanks: [{ answer: 'values', width: 70 }], explanation: 'values() 返回所有值。' },
  { type: 'code', question: '推导式把每个单词首字母大写。', starter: 'words = ["hello","world","python"]\nprint([w.capitalize() for w in words])', expected: "['Hello', 'World', 'Python']", explanation: 'capitalize() 首字母大写。' },
  { type: 'choice', question: '哪种类型不可变？', options: ['list', 'set', 'dict', 'tuple'], correct: 3, explanation: '元组是不可变的。' },
  { type: 'tf', question: '"a,b,c".split(",") 结果是 ["a","b","c"]。', correct: true, explanation: 'split 按逗号分割。' },
  { type: 'choice', question: 's={1,2,3}; s.add(2); s.add(4) 后几个元素？', options: ['3', '4', '5', '报错'], correct: 1, explanation: 'add(2) 不变，add(4) 新增，共 4 个。' },
  { type: 'fill', question: 'f"{3.14159:.2f}" 输出：', template: ['', '___'], blanks: [{ answer: '3.14', width: 60 }], explanation: ':.2f 保留两位小数。' },
  { type: 'code', question: '统计列表元素出现次数。', starter: 'data = ["a","b","a","c","b","a"]\ncounts = {}\nfor x in data:\n    counts[x] = counts.get(x, 0) + 1\nprint(counts)', expected: "{'a': 3, 'b': 2, 'c': 1}", explanation: 'get(x,0)+1 实现计数。' },
],

CP4: [
  { type: 'choice', question: 'def greet(name="同学"): return "你好，"+name\ngreet() = ?', options: ['报错', '"你好，"', '"你好，同学"', 'None'], correct: 2, explanation: '默认参数 "同学"。' },
  { type: 'tf', question: '*args 收集为列表。', correct: false, explanation: '收集为元组 tuple。' },
  { type: 'choice', question: 'x=1\ndef f():\n  x=2\n  def g(): print(x)\n  g()\nf()\n输出？', options: ['1', '2', '报错', 'None'], correct: 1, explanation: 'LEGB 规则，g 在 Enclosing 找到 x=2。' },
  { type: 'fill', question: 'lambda 求绝对值：', template: ['abs_val = lambda x: x if x >= 0 else ', '___'], blanks: [{ answer: '-x', width: 50 }], explanation: '条件表达式处理负数。' },
  { type: 'choice', question: '正确的装饰器用法？', options: ['@timer()\ndef f(): pass', '@timer\ndef f(): pass', 'def f() @timer:', 'timer @def f():'], correct: 1, explanation: '@装饰器名 在函数上方，无需括号。' },
  { type: 'tf', question: '生成器表达式用圆括号。', correct: true, explanation: '() 生成器，[] 列表。' },
  { type: 'code', question: '写 make_multiplier(n) 返回乘法函数。', starter: 'def make_multiplier(n):\n    return lambda x: x * n\ntriple = make_multiplier(3)\nprint(triple(7))', expected: '21', explanation: 'lambda 捕获外层的 n。' },
  { type: 'choice', question: 'filter(lambda x: x%2==0, range(10)) = ?', options: ['[1,3,5,7,9]', '[0,2,4,6,8]', '[2,4,6,8,10]', '[0,1,2,3,4]'], correct: 1, explanation: '偶数：0,2,4,6,8。' },
  { type: 'fill', question: '补全 yield：', template: ['def nums():\n    ', '___', ' 1\n    yield 2'], blanks: [{ answer: 'yield', width: 60 }], explanation: 'yield 逐个产出值。' },
  { type: 'choice', question: '关于 global 说法正确的？', options: ['读取时必须用', '只在修改时用', '可在函数外用', '让变量不可修改'], correct: 1, explanation: '只有修改全局变量才需要 global。' },
],

CP5: [
  { type: 'choice', question: 'open("f","a") 中 a 模式？', options: ['追加', '只读', '清空写入', '二进制'], correct: 0, explanation: 'a = append 追加。' },
  { type: 'tf', question: 'with 保证异常时也关闭文件。', correct: true, explanation: 'with 的核心价值。' },
  { type: 'choice', question: 'try: int("abc") except ValueError: A except TypeError: B finally: C', options: ['A C', 'B C', 'A B C', 'C'], correct: 0, explanation: 'ValueError 被第一个 except 捕获。' },
  { type: 'fill', question: '给模块取别名：import numpy ___ np', template: ['import numpy ', '___', ' np'], blanks: [{ answer: 'as', width: 40 }], explanation: 'as 取别名。' },
  { type: 'choice', question: '哪个是标准库？', options: ['json', 'numpy', 'pandas', 'requests'], correct: 0, explanation: 'json 自带，其他需安装。' },
  { type: 'choice', question: 'os.path.splitext("report.pdf") = ?', options: ['("report",".pdf")', '("report.pdf","")', '["report","pdf"]', '("report","pdf")'], correct: 0, explanation: '扩展名包含点号。' },
  { type: 'code', question: '捕获 ValueError。', starter: 'try:\n    int("abc")\nexcept ValueError:\n    print("无效输入")', expected: '无效输入', explanation: 'int("abc") 引发 ValueError。' },
  { type: 'tf', question: 'random.shuffle() 返回新列表。', correct: false, explanation: '原地修改，返回 None。' },
  { type: 'code', question: 'Counter 统计 "banana"。', starter: 'from collections import Counter\nprint(Counter("banana").most_common(2))', expected: "[('a', 3), ('n', 2)]", explanation: 'a 最多 3 次，n 其次 2 次。' },
  { type: 'fill', question: 'from math ___ pi, sqrt', template: ['from math ', '___', ' pi, sqrt'], blanks: [{ answer: 'import', width: 60 }], explanation: 'from...import 导入特定名称。' },
],

CP6: [
  { type: 'choice', question: 'a=[1,2]; b=a; b.append(3) 后 a = ?', options: ['[1,2]', '[1,2,3]', '[3,1,2]', '报错'], correct: 1, explanation: 'b=a 是同一个列表。' },
  { type: 'tf', question: 'tuple 是不可变的。', correct: true, explanation: '不能原地修改元组。' },
  { type: 'choice', question: '哪个创建浅拷贝？', options: ['b=a', 'b=a[:]', 'b=id(a)', 'b=str(a)'], correct: 1, explanation: 'a[:] 切片创建浅拷贝。' },
  { type: 'fill', question: '递归的停止条件叫什么？', template: ['', '___', '情况（base case）'], blanks: [{ answer: '基准', width: 60 }], explanation: '基准情况是递归的出口。' },
  { type: 'choice', question: 'f(4)=? (f(n)=n+f(n-1), f(0)=0)', options: ['4', '6', '10', '24'], correct: 2, explanation: '4+3+2+1+0 = 10。' },
  { type: 'choice', question: 'copy.copy() 做什么？', options: ['复制所有层级', '只复制外层', '只复制外层，内层共享', '完全相同'], correct: 2, explanation: '浅拷贝只复制最外层。' },
  { type: 'code', question: '递归求 2^8。', starter: 'def power(base, exp):\n    if exp == 0: return 1\n    return base * power(base, exp-1)\nprint(power(2, 8))', expected: '256', explanation: '2^8 = 256。' },
  { type: 'tf', question: 'x="hello"; y=x; x="world" 后 y="world"。', correct: false, explanation: '字符串不可变，x 指向新对象。' },
  { type: 'choice', question: '递归超限抛什么错？', options: ['StackOverflow', 'RecursionError', 'MemoryError', 'RuntimeError'], correct: 1, explanation: 'Python 3.5+ 抛 RecursionError。' },
  { type: 'choice', question: '哪种方式导致行共享？', options: ['[[0]*3 for _ in range(3)]', '[[0,0,0] for _ in range(3)]', '[[0]*3]*3', '[list(range(3)) for _ in range(3)]'], correct: 2, explanation: '[[0]*3]*3 三行是同一个对象。' },
],

CP7: [
  { type: 'choice', question: 'self 代表什么？', options: ['类本身', '当前实例', '父类', '模块名'], correct: 1, explanation: 'self 是当前实例对象。' },
  { type: 'fill', question: 'Cat 继承 Animal：', template: ['class ', '___', ':'], blanks: [{ answer: 'Cat(Animal)', width: 120 }], explanation: '括号里写父类名。' },
  { type: 'choice', question: 'A.greet→print("A"), B(A).greet→print("B")\nB().greet() = ?', options: ['A', 'B', 'AB', '报错'], correct: 1, explanation: 'B 重写了方法。' },
  { type: 'tf', question: 'super() 只能在 __init__ 中用。', correct: false, explanation: '任何方法中都可以。' },
  { type: 'choice', question: 'print(obj) 触发什么？', options: ['__repr__', '__str__', '__len__', '__getitem__'], correct: 1, explanation: 'print 调用 __str__。' },
  { type: 'choice', question: '支持 + 运算符的魔术方法？', options: ['__plus__', '__sum__', '__add__', '__concat__'], correct: 2, explanation: '__add__ 对应 +。' },
  { type: 'fill', question: '匹配恰好3个数字：', template: ['r"', '___', '"'], blanks: [{ answer: '\\d{3}', width: 60 }], explanation: '\\d{3} 恰好3个数字。' },
  { type: 'code', question: 'Counter 类调用 3 次 increment。', starter: 'class Counter:\n    def __init__(self): self.count = 0\n    def increment(self): self.count += 1\nc = Counter()\nc.increment()\nc.increment()\nc.increment()\nprint(c.count)', expected: '3', explanation: '3 次 +1 = 3。' },
  { type: 'choice', question: 're.findall(r"\\w+","Hello World 123") = ?', options: ['["Hello World 123"]', '["Hello","World","123"]', '["Hello","World"]', '各字符列表'], correct: 1, explanation: '\\w+ 按空格分割。' },
  { type: 'choice', question: 'isinstance("hello", object) = ?', options: ['True', 'False', '报错', 'None'], correct: 0, explanation: '所有东西都是 object 的实例。' },
],

});

