(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(7),i=n.n(r),o=(n(13),n(2)),a=n(3),l=n(5),u=n(4),j=n(8),h=(n(14),n(15),n(0)),d=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).changeQuestionForWrong=function(){c.setState({task:c.state.task+1})},c.changeQuestionForCorrect=function(){c.setState({task:c.state.task+1,totalScores:c.state.totalScores+5})},c.restartQuiz=function(){c.setState({task:0,totalScores:0})},c.shuffleFourAnswer=function(){var e=c.state,t=e.tasks,n=e.task,s=Math.floor(4*Math.random());return 0==s?Object(h.jsxs)("div",{className:"questionAndAnswers",children:[Object(h.jsx)("button",{onClick:c.changeQuestionForCorrect,children:t[n].correct_answer}),Object(h.jsx)("button",{onClick:c.changeQuestionForWrong,children:t[n].incorrect_answers[0]}),Object(h.jsx)("button",{onClick:c.changeQuestionForWrong,children:t[n].incorrect_answers[1]}),Object(h.jsx)("button",{onClick:c.changeQuestionForWrong,children:t[n].incorrect_answers[2]})]}):1==s?Object(h.jsxs)("div",{className:"questionAndAnswers",children:[Object(h.jsx)("button",{onClick:c.changeQuestionForWrong,children:t[n].incorrect_answers[0]}),Object(h.jsx)("button",{onClick:c.changeQuestionForCorrect,children:t[n].correct_answer}),Object(h.jsx)("button",{onClick:c.changeQuestionForWrong,children:t[n].incorrect_answers[1]}),Object(h.jsx)("button",{onClick:c.changeQuestionForWrong,children:t[n].incorrect_answers[2]})]}):2==s?Object(h.jsxs)("div",{className:"questionAndAnswers",children:[Object(h.jsx)("button",{onClick:c.changeQuestionForWrong,children:t[n].incorrect_answers[0]}),Object(h.jsx)("button",{onClick:c.changeQuestionForWrong,children:t[n].incorrect_answers[1]}),Object(h.jsx)("button",{onClick:c.changeQuestionForCorrect,children:t[n].correct_answer}),Object(h.jsx)("button",{onClick:c.changeQuestionForWrong,children:t[n].incorrect_answers[2]})]}):3==s?Object(h.jsxs)("div",{className:"questionAndAnswers",children:[Object(h.jsx)("button",{onClick:c.changeQuestionForWrong,children:t[n].incorrect_answers[0]}),Object(h.jsx)("button",{onClick:c.changeQuestionForWrong,children:t[n].incorrect_answers[1]}),Object(h.jsx)("button",{onClick:c.changeQuestionForWrong,children:t[n].incorrect_answers[2]}),Object(h.jsx)("button",{onClick:c.changeQuestionForCorrect,children:t[n].correct_answer})]}):Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:'function "shuffleFourAnswer" error \u0ca5_\u0ca5'})})},c.shuffleTwoAnswer=function(){var e=c.state,t=e.tasks,n=e.task,s=Math.floor(2*Math.random());return 0==s?Object(h.jsxs)("div",{className:"questionAndAnswers",children:[Object(h.jsx)("button",{onClick:c.changeQuestionForCorrect,children:t[n].correct_answer}),Object(h.jsx)("button",{onClick:c.changeQuestionForWrong,children:t[n].incorrect_answers[0]})]}):1==s?Object(h.jsxs)("div",{className:"questionAndAnswers",children:[Object(h.jsx)("button",{onClick:c.changeQuestionForWrong,children:t[n].incorrect_answers[0]}),Object(h.jsx)("button",{onClick:c.changeQuestionForCorrect,children:t[n].correct_answer})]}):Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:'function "shuffleTwoAnswer" error \u0ca5_\u0ca5'})})},c.state={tasks:e.tasks,task:0,totalScores:0},c}return Object(a.a)(n,[{key:"render",value:function(){var e=this.state,t=e.tasks,n=e.task;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{className:"tc",children:"YOUR TOTAL SCORES ARE..."}),this.state.task<this.props.tasks.length?Object(h.jsxs)("div",{className:"questionAndAnswers ma2",children:[Object(h.jsx)("div",{className:"question",children:Object(h.jsx)("h4",{className:"tc",children:t[n].question})}),1==t[n].incorrect_answers.length?this.shuffleTwoAnswer():this.shuffleFourAnswer()]}):Object(h.jsxs)("div",{className:"tc",children:[Object(h.jsx)("h1",{className:"tc",children:"".concat(this.state.totalScores)}),Object(h.jsx)("button",{onClick:this.props.getQuiz,className:"button",children:"new quiz"}),Object(h.jsx)("button",{onClick:this.restartQuiz,className:"button",children:"reset current quiz"})]})]})}}]),n}(s.a.Component),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"tc",children:[Object(h.jsx)("h1",{className:"tc",children:"please select category and difficulty"}),Object(h.jsx)("h3",{children:'"A winner is a dreamer who never gives up"'})]})}}]),n}(s.a.Component),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var c;return Object(o.a)(this,n),(c=t.call(this,e)).handleChange=function(e){var t=e.target,n=t.name,s=t.value;c.setState(Object(j.a)({},n,s))},c.getQuiz=function(){fetch("https://opentdb.com/api.php?amount=".concat(c.state.trivia_amount,"&category=").concat(c.state.trivia_category,"&difficulty=").concat(c.state.trivia_difficulty)).then((function(e){return e.json()})).then((function(e){c.setState({tasks:e.results,triger:!c.state.triger})}))},c.state={categories:e.categories,trivia_category:"",trivia_difficulty:"",trivia_amount:10,tasks:[],triger:!1},c}return Object(a.a)(n,[{key:"render",value:function(){return this.state.triger?Object(h.jsx)(d,{tasks:this.state.tasks,getQuiz:this.getQuiz}):Object(h.jsxs)("div",{children:[Object(h.jsx)(b,{}),Object(h.jsxs)("div",{className:"allButtons tc",children:[Object(h.jsxs)("select",{value:this.state.trivia_category,name:"trivia_category",className:"button",onChange:this.handleChange,children:[">",Object(h.jsx)("option",{value:"any",children:"Select Category"}),Object(h.jsx)("option",{value:"9",children:"General Knowledge"}),Object(h.jsx)("option",{value:"10",children:"Entertainment: Books"}),Object(h.jsx)("option",{value:"11",children:"Entertainment: Film"}),Object(h.jsx)("option",{value:"12",children:"Entertainment: Music"}),Object(h.jsx)("option",{value:"13",children:"Entertainment: Musicals & Theatres"}),Object(h.jsx)("option",{value:"14",children:"Entertainment: Television"}),Object(h.jsx)("option",{value:"15",children:"Entertainment: Video Games"}),Object(h.jsx)("option",{value:"16",children:"Entertainment: Board Games"}),Object(h.jsx)("option",{value:"17",children:"Science & Nature"}),Object(h.jsx)("option",{value:"18",children:"Science: Computers"}),Object(h.jsx)("option",{value:"19",children:"Science: Mathematics"}),Object(h.jsx)("option",{value:"20",children:"Mythology"}),Object(h.jsx)("option",{value:"21",children:"Sports"}),Object(h.jsx)("option",{value:"22",children:"Geography"}),Object(h.jsx)("option",{value:"23",children:"History"}),Object(h.jsx)("option",{value:"24",children:"Politics"}),Object(h.jsx)("option",{value:"25",children:"Art"}),Object(h.jsx)("option",{value:"26",children:"Celebrities"}),Object(h.jsx)("option",{value:"27",children:"Animals"}),Object(h.jsx)("option",{value:"28",children:"Vehicles"}),Object(h.jsx)("option",{value:"29",children:"Entertainment: Comics"}),Object(h.jsx)("option",{value:"30",children:"Science: Gadgets"}),Object(h.jsx)("option",{value:"31",children:"Entertainment: Japanese Anime & Manga"}),Object(h.jsx)("option",{value:"32",children:"Entertainment: Cartoon & Animations"})]}),Object(h.jsxs)("select",{value:this.state.trivia_difficulty,name:"trivia_difficulty",className:"button",onChange:this.handleChange,children:[">",Object(h.jsx)("option",{value:"any",children:"Select Difficulty"}),Object(h.jsx)("option",{value:"easy",children:"Easy"}),Object(h.jsx)("option",{value:"medium",children:"Medium"}),Object(h.jsx)("option",{value:"hard",children:"Hard"})]}),Object(h.jsx)("button",{className:"button",onClick:this.getQuiz,children:"Start"})]})]})}}]),n}(s.a.Component),x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={categories:[]},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://opentdb.com/api_category.php").then((function(e){return e.json()})).then((function(t){e.state.categories.push(t.trivia_categories)}))}},{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)(O,{categories:this.state.categories})})}}]),n}(s.a.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),r(e),i(e)}))};n(17);i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),g()}},[[18,1,2]]]);
//# sourceMappingURL=main.03e296a0.chunk.js.map