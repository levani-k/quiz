(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(7),a=n.n(r),i=(n(13),n(2)),o=n(3),l=n(5),u=n(4),j=n(8),h=(n(14),n(15),n(0)),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).changeQuestionForWrong=function(){s.setState({task:s.state.task+1})},s.changeQuestionForCorrect=function(){s.setState({task:s.state.task+1,totalScores:s.state.totalScores+5})},s.restartQuiz=function(){s.setState({task:0,totalScores:0})},s.shuffleFourAnswer=function(){var e=s.state,t=e.tasks,n=e.task,c=Math.floor(4*Math.random());return 0==c?Object(h.jsxs)("div",{className:"answers",children:[Object(h.jsx)("button",{onClick:s.changeQuestionForCorrect,className:"answer",children:t[n].correct_answer}),Object(h.jsx)("button",{onClick:s.changeQuestionForWrong,className:"answer",children:t[n].incorrect_answers[0]}),Object(h.jsx)("button",{onClick:s.changeQuestionForWrong,className:"answer",children:t[n].incorrect_answers[1]}),Object(h.jsx)("button",{onClick:s.changeQuestionForWrong,className:"answer",children:t[n].incorrect_answers[2]})]}):1==c?Object(h.jsxs)("div",{className:"answers",children:[Object(h.jsx)("button",{onClick:s.changeQuestionForWrong,className:"answer",children:t[n].incorrect_answers[0]}),Object(h.jsx)("button",{onClick:s.changeQuestionForCorrect,className:"answer",children:t[n].correct_answer}),Object(h.jsx)("button",{onClick:s.changeQuestionForWrong,className:"answer",children:t[n].incorrect_answers[1]}),Object(h.jsx)("button",{onClick:s.changeQuestionForWrong,className:"answer",children:t[n].incorrect_answers[2]})]}):2==c?Object(h.jsxs)("div",{className:"answers",children:[Object(h.jsx)("button",{onClick:s.changeQuestionForWrong,className:"answer",children:t[n].incorrect_answers[0]}),Object(h.jsx)("button",{onClick:s.changeQuestionForWrong,className:"answer",children:t[n].incorrect_answers[1]}),Object(h.jsx)("button",{onClick:s.changeQuestionForCorrect,className:"answer",children:t[n].correct_answer}),Object(h.jsx)("button",{onClick:s.changeQuestionForWrong,className:"answer",children:t[n].incorrect_answers[2]})]}):3==c?Object(h.jsxs)("div",{className:"answers",children:[Object(h.jsx)("button",{onClick:s.changeQuestionForWrong,className:"answer",children:t[n].incorrect_answers[0]}),Object(h.jsx)("button",{onClick:s.changeQuestionForWrong,className:"answer",children:t[n].incorrect_answers[1]}),Object(h.jsx)("button",{onClick:s.changeQuestionForWrong,className:"answer",children:t[n].incorrect_answers[2]}),Object(h.jsx)("button",{onClick:s.changeQuestionForCorrect,className:"answer",children:t[n].correct_answer})]}):Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:'function "shuffleFourAnswer" error \u0ca5_\u0ca5'})})},s.shuffleTwoAnswer=function(){var e=s.state,t=e.tasks,n=e.task,c=Math.floor(2*Math.random());return 0==c?Object(h.jsxs)("div",{className:"answers tc",children:[Object(h.jsx)("button",{onClick:s.changeQuestionForCorrect,className:"answer",children:t[n].correct_answer}),Object(h.jsx)("button",{onClick:s.changeQuestionForWrong,className:"answer",children:t[n].incorrect_answers[0]})]}):1==c?Object(h.jsxs)("div",{className:"answers tc",children:[Object(h.jsx)("button",{onClick:s.changeQuestionForWrong,className:"answer",children:t[n].incorrect_answers[0]}),Object(h.jsx)("button",{onClick:s.changeQuestionForCorrect,className:"answer",children:t[n].correct_answer})]}):Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:'function "shuffleTwoAnswer" error \u0ca5_\u0ca5'})})},s.state={tasks:e.tasks,task:0,totalScores:0},s}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.tasks,n=e.task;return Object(h.jsx)("div",{className:"tc",children:this.state.task<this.props.tasks.length?Object(h.jsxs)("div",{className:"questionAndAnswers ma2 tc",children:[Object(h.jsx)("div",{className:"question",children:Object(h.jsx)("h4",{className:"tc",children:t[n].question})}),1==t[n].incorrect_answers.length?this.shuffleTwoAnswer():this.shuffleFourAnswer(),Object(h.jsx)("p",{children:'help from creator "Think Before You Click" ^-^'})]}):Object(h.jsxs)("div",{className:"tc",children:[Object(h.jsx)("h1",{children:"Your Total Scores Are..."}),Object(h.jsx)("h1",{className:"tc",children:"".concat(this.state.totalScores)}),Object(h.jsx)("button",{onClick:this.props.getQuiz,className:"button",children:"new quiz"}),Object(h.jsx)("button",{onClick:this.restartQuiz,className:"button",children:"reset quiz"})]})})}}]),n}(c.a.Component),d=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"tc",children:[Object(h.jsx)("h1",{className:"tc",children:"please select category and difficulty"}),Object(h.jsx)("h3",{children:'"A winner is a dreamer who never gives up"'})]})}}]),n}(c.a.Component),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).handleChange=function(e){var t=e.target,n=t.name,c=t.value;s.setState(Object(j.a)({},n,c))},s.getQuiz=function(){fetch("https://opentdb.com/api.php?amount=".concat(s.state.trivia_amount,"&category=").concat(s.state.trivia_category,"&difficulty=").concat(s.state.trivia_difficulty)).then((function(e){return e.json()})).then((function(e){s.setState({tasks:e.results,triger:!s.state.triger})}))},s.state={categories:e.categories,trivia_category:"",trivia_difficulty:"",trivia_amount:10,tasks:[],triger:!1},s}return Object(o.a)(n,[{key:"render",value:function(){return this.state.triger?Object(h.jsx)(b,{tasks:this.state.tasks,getQuiz:this.getQuiz}):Object(h.jsxs)("div",{children:[Object(h.jsx)(d,{}),Object(h.jsxs)("div",{className:"allButtons tc",children:[Object(h.jsxs)("select",{value:this.state.trivia_category,name:"trivia_category",className:"button",onChange:this.handleChange,children:[">",Object(h.jsx)("option",{value:"any",children:"Select Category"}),Object(h.jsx)("option",{value:"9",children:"General Knowledge"}),Object(h.jsx)("option",{value:"10",children:"Entertainment: Books"}),Object(h.jsx)("option",{value:"11",children:"Entertainment: Film"}),Object(h.jsx)("option",{value:"12",children:"Entertainment: Music"}),Object(h.jsx)("option",{value:"13",children:"Entertainment: Musicals & Theatres"}),Object(h.jsx)("option",{value:"14",children:"Entertainment: Television"}),Object(h.jsx)("option",{value:"15",children:"Entertainment: Video Games"}),Object(h.jsx)("option",{value:"16",children:"Entertainment: Board Games"}),Object(h.jsx)("option",{value:"17",children:"Science & Nature"}),Object(h.jsx)("option",{value:"18",children:"Science: Computers"}),Object(h.jsx)("option",{value:"19",children:"Science: Mathematics"}),Object(h.jsx)("option",{value:"20",children:"Mythology"}),Object(h.jsx)("option",{value:"21",children:"Sports"}),Object(h.jsx)("option",{value:"22",children:"Geography"}),Object(h.jsx)("option",{value:"23",children:"History"}),Object(h.jsx)("option",{value:"24",children:"Politics"}),Object(h.jsx)("option",{value:"25",children:"Art"}),Object(h.jsx)("option",{value:"26",children:"Celebrities"}),Object(h.jsx)("option",{value:"27",children:"Animals"}),Object(h.jsx)("option",{value:"28",children:"Vehicles"}),Object(h.jsx)("option",{value:"29",children:"Entertainment: Comics"}),Object(h.jsx)("option",{value:"30",children:"Science: Gadgets"}),Object(h.jsx)("option",{value:"31",children:"Entertainment: Japanese Anime & Manga"}),Object(h.jsx)("option",{value:"32",children:"Entertainment: Cartoon & Animations"})]}),Object(h.jsxs)("select",{value:this.state.trivia_difficulty,name:"trivia_difficulty",className:"button",onChange:this.handleChange,children:[">",Object(h.jsx)("option",{value:"any",children:"Select Difficulty"}),Object(h.jsx)("option",{value:"easy",children:"Easy"}),Object(h.jsx)("option",{value:"medium",children:"Medium"}),Object(h.jsx)("option",{value:"hard",children:"Hard"})]}),Object(h.jsx)("button",{className:"button",onClick:this.getQuiz,children:"Start"})]})]})}}]),n}(c.a.Component),x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={categories:[]},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://opentdb.com/api_category.php").then((function(e){return e.json()})).then((function(t){e.state.categories.push(t.trivia_categories)}))}},{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)(O,{categories:this.state.categories})})}}]),n}(c.a.Component),m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};n(17);a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),m()}},[[18,1,2]]]);
//# sourceMappingURL=main.5fcb192b.chunk.js.map