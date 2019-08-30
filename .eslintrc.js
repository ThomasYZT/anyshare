module.exports = {
    //默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。此项是用来告诉eslint找当前配置文件不能往父级查找
    root: true,
    //此项是用来指定eslint解析器的，解析器必须符合规则，babel-eslint解析器是对babel解析器的包装使其与ESLint解析
    parser: 'babel-eslint',
    //env 指定代码运行的环境
    env: {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true,
    },
    // 引入第三方分享配置，启用一系列核心规则
    extends: [
        'standard',
        'eslint:recommended',
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // 自定义eslint规则
    'rules': {
        /******************************************
         ******************错误*********************
         ******************************************/

        "no-var": 1, // 阻止var使用,鼓励改为使用const或let。
        "no-extra-semi": 1, // 禁止使用不必要的分号
        "indent": [1, 4, {
            'SwitchCase' : 1
        }], // 四格缩进
        "no-cond-assign": 1, // 禁止在条件表达式中使用赋值语句
        "no-unexpected-multiline": 1, // 避免多行表达式
        "block-spacing": [1, "always"], // 规定单行代码两边加空格
        "brace-style": [1, "1tbs", { "allowSingleLine": true }], // 规定 “else” 关键字要与花括号保持在同一行
        "comma-spacing": [1, { "before": false, "after": true }], // 规定逗号后面必须添加空格
        "dot-location": [1, "property"], // 规定点号操作符须与属性需在同一行
        "curly": [1, "multi-line"], // 规定多行 if 语句的的括号不能省略
        "eol-last": 1, // 规定文件末尾空一行，以防文件解析错误
        "no-extend-native": 1, // 规定不要扩展原生对象。
        "no-extra-boolean-cast": 1, // 规定避免不必要的布尔转换。
        "no-extra-parens": [1, "functions"],// 规定不要使用多余的括号包裹函数。
        "no-floating-decimal": 1, //规定不要省去小数点前面的0（增强可读性）
        "no-implied-eval": 1, // 规定避免使用隐式的 eval()。
        "no-inner-declarations": [1, "functions"], // 规定嵌套的代码块中禁止再定义函数。
        "no-irregular-whitespace": 1, // 规定不要使用非法的空白符。
        "no-labels": [1, { "allowLoop": false, "allowSwitch": false }], // 规定不要使用标签语句。
        "no-lone-blocks": 1, // 规定不要书写不必要的嵌套代码块。
        "no-multi-str": 1, // 规定不要使用多行字符串
        "no-new": 1, //规定new 创建对象实例后需要赋值给变量。
        "no-new-func": 1, // 规定禁止使用 Function 构造器。
        "no-new-object": 1, // 规定禁止使用 Object 构造器，直接声明对象即可。
        "no-new-require": 1, //  规定禁止使用 new require。
        "no-octal-escape": 1, // 规定字符串字面量中也不要使用八进制转义字符
        "no-proto": 1, // 规定使用 getPrototypeOf 来替代 proto。
        "no-redeclare": 1, // 规定不要重复声明变量。
        "no-regex-spaces": 1, // 规定正则中避免使用多个空格。
        "no-return-assign": [1, "except-parens"], // 规定return 语句中的赋值必需有括号包裹
        "no-sequences": 1, // 规定避免使用逗号操作符。
        "no-undef-init": 1, // 规定不要使用 undefined 来初始化变量。
        "no-unneeded-ternary": [1, { "defaultAssignment": false }], // 规定如果有更好的实现，尽量不要使用三元表达式。
        "no-unsafe-negation": 1, // 规定关系运算符的左值不要做取反操作。
        "no-unused-vars": [1, { "vars": "all", "args": "none", "ignoreRestSiblings": true }], // 规定不要定义未使用的变量。
        "no-useless-call": 1, // 规定避免使用不必要的计算值作对象属性
        "no-useless-escape": 1, // 规定禁止不必要的转义。
        "no-useless-rename": 1, // 规定import, export 和解构操作中，禁止赋值到同名变量。
        "no-with": 1, // 规定禁止使用 with。
        "quotes": [1, "single", { "avoidEscape": true, "allowTemplateLiterals": true }], // 规定除需要转义的情况外，字符串统一使用单引号。
        "semi": [1, "always"], // 规定必须添加分号。
        "use-isnan": 1, // 规定检查 NaN 的正确姿势是使用 isNaN()。
        "wrap-iife": [1, "any", { "functionPrototypeMethods": true }], // 规定自调用匿名函数 (IIFEs) 使用括号包裹。
        "arrow-spacing": [1, { "before": true, "after": true }], // 规定箭头函数必须有前后括号。
        "new-cap": [1, { "newIsCap": true, "capIsNew": false }], // 规定构造函数要以大写字母开头。
        "no-void": 1, // 禁用void操作符
        "no-loop-func": 1, // 禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
        "no-native-reassign": 1, // 不能重写native对象
        "valid-typeof": 1,  // 必须使用合法的typeof的值
        "no-unused-expressions": [1, {
            "allowShortCircuit": true,
            "allowTernary": true
        }], // 禁止无用的表达式
        "valid-jsdoc": [1, {
            "requireParamDescription": false, // 允许在参数标签中缺少描述
            "requireReturnDescription": false // 允许在返回标签中缺少描述
        }],// jsdoc规则配置
        "no-warning-comments": [1, {
            "terms": ["todo", "fixme", "any other term"],
            "location": "anywhere"
        }], // 不能有警告备注
        "no-unmodified-loop-condition": 1, // 规定循环语句中注意更新循环变量。
        "no-unreachable": 1, // 规定return，throw，continue 和 break 后不要再跟代码。
        "no-use-before-define": [1, { "functions": false, "classes": false, "variables": false }], //规定未定义前不能使用。
        "accessor-pairs": 1, // 对象中定义了存值器，一定要定义对应的取值器。\
        "no-caller": 1, // 规定避免使用 arguments.callee 和 arguments.caller（不利于代码优化，且高级版本的ES标准会废弃它）
        "no-eval": 1, // 规定不要使用 eval()。
        "no-ex-assign": 1, //  定义catch 中不要对错误重新赋值。
        "no-fallthrough": 1, // 规定switch一定要使用 break 来将条件分支正常中断。
        "no-func-assign": 1, // 规定避免对声明过的函数重新赋值。
        "no-global-assign": 1, // 规定不要对全局只读对象重新赋值。
        "no-invalid-regexp": 1, //规定不要向 RegExp 构造器传入非法的正则表达式。
        "no-self-assign": 1, // 规定避免将变量赋值给自己。
        "no-shadow-restricted-names": 1, // 规定禁止随意更改关键字的值。
        "no-template-curly-in-string": 1, // 规定正确使用 ES6 中的字符串模板。
        "no-const-assign": 1, // 规定避免修改使用 const 声明的变量。
        "no-constant-condition": [1, { "checkLoops": false }], // 规定避免使用常量作为条件表达式的条件（循环语句除外）。
        "no-delete-var": 1, // 规定不要对变量使用 delete 操作。
        "no-dupe-args": 1, //规定不要定义重复的函数参数。
        "no-dupe-class-members": 1, //规定类中不要定义重复的属性。
        "no-dupe-keys": 1, //规定对象字面量中不要定义重复的属性。
        "no-duplicate-case": 1, // 规定switch 语句中不要定义重复的 case 分支。
        "no-empty-character-class": 1, // 规定正则中不要使用空字符。
        "eqeqeq": [1, "always", { "null": "ignore" }], // 规定始终使用 === 替代 ==，
        "semi-spacing": [1, { "before": false, "after": true }], // 规定分号前不留空格，后面留一个空格。
        "space-before-blocks": [1, "always"], // 规定代码块收尾需留空格。第二个参数配置是否需要空格
        "space-before-function-paren": [1, "always"], // 规定函数声明时括号与函数名间加空格。
        "space-in-parens": [1, "never"], // 规定圆括号间不留空格。
        "space-infix-ops": 1, // 规定字符串拼接操作符 (Infix operators) 之间要留空格。
        "space-unary-ops": [1, { "words": true, "nonwords": false }], // 规定文字格式的一元运算符后跟一个空格。
        "template-curly-spacing": [1, "never"], //规定模板字符串中变量前后不加空格。
        "comma-style": [1, "last"], // 规定始终将逗号置于行末。
        "no-whitespace-before-property": 1, // 规定属性前面不能加空格。
        "operator-linebreak": [1, "after", { "overrides": { "?": "before", ":": "before" } }], // 规定对于三元运算符 ? 和 : 与他们所负责的代码处于同一行
        "no-multiple-empty-lines": [1, { "max": 1, "maxEOF": 0 }], // 规定不允许有连续多行空行且文件头部不允许空行
        "key-spacing": [1, { "beforeColon": true, "afterColon": true }], // 规定键值对中冒号与值和键之间要留空白
        "func-call-spacing": [1, "never"], // 规定函数调用时标识符与括号间不留间隔
        "no-mixed-spaces-and-tabs": 1, // 规定不能混合使用空格与制表符作为缩进。
        "object-curly-spacing": [1, "always"], //非空对象首位必须加上空格


        /******************************************
         ******************警告*********************
         ******************************************/
        "complexity": [1, 10], // 循环复杂度，最大嵌套5层
        "no-duplicate-imports": 1, // 从单个模块进行的所有导入都以单一import语句存在。
        "no-empty": 1, // 块语句中的内容不能为空
        "no-multi-spaces": 1, // 不能用多余的空格
        "no-trailing-spaces": 1, // 规定行末不留空格。
        "padded-blocks": [1, { "blocks": "never", "switches": "never", "classes": "never" }], // 规则定义代码中不要啊出现多余留白。
        "rest-spread-spacing": [1, "never"], // 规定展开运算符与它的表达式间不要留空白。
        "handle-callback-err": [1, "^(err|error)$" ], // 规定函数里面的异常信息不要忘记处理。
        "no-empty-pattern": 1, // 规定不要解构空值。
        "no-throw-literal": 1, // 规定用throw 抛错时，抛出 Error 对象而不是字符串。

        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0,
        "no-console": 0, // 避免使用console
    }
};
