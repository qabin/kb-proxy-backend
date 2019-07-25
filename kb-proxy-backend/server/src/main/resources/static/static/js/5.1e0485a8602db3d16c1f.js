webpackJsonp([5],{"2Kv+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("dq7p"),i=n("ETYQ"),r=n("UvNm"),a=(n("qFbV"),n("clOe"),{name:"host_editor",mixins:[r.a],methods:{render_tools_bar_left:function(e){return e("div",{staticClass:"row items-center col-grow text-left full-height"},[])},initView:function(){this.contentBackup=this.value&&null!==this.value?this.value:"";var e=this.$refs.vue_editor,t=this.editor=ace.edit(e);this.disable&&e.classList.add("ace_content_disable"),this.$emit("init",t),t.$blockScrolling=1/0,t.setOption("enableEmmet",!1),t.getSession().setMode("ace/mode/sh"),t.setTheme("ace/theme/eclipse"),t.getSession().setUseWrapMode(!0),t.setShowPrintMargin(!1),t.setValue(this.contentBackup),t.on("change",this.onChange),this.disable&&t.setReadOnly(!0)}}}),o=n("3bfZ"),l=n("ALvQ"),c={name:null,hosts:null,id:null},d={1:{label:"启用",color:"positive"},"-1":{label:"禁用",color:"warning"}},h={name:"env_info_detail",data:function(){return{new:!1,edit:!0,filter_env_list:[],kw:null}},computed:{env_list:function(){return this.$store.state.env.env_list},selected_env:function(){return this.$store.state.env.selected_env}},validations:{},methods:{render_left_detail:function(e){return e("div",{},[e("div",{staticClass:"row"},[this.render_filter_input(e),this.render_new_env_btn(e)]),this.render_env_list(e)])},render_new_env_btn:function(e){var t=this;return e("q-btn",{staticClass:"pp-search-button no-shadow q-ml-sm",style:{height:"35px"},props:{label:"新增",color:"positive"},nativeOn:{click:function(){t.new=!0,t.edit=!0,t.$store.state.env.selected_env=c}}})},render_env_list:function(e){return e("div",{staticClass:"col-grow",style:{height:"770px"}},[this.render_env_catalog(e)])},render_env_catalog:function(e){var t=this;return!this.new&&null==this.selected_env.name&&(this.$store.state.env.selected_env=this.filter_env_list.length<=0?c:this.filter_env_list[0]),e("div",{staticClass:"font-13 text-dark scroll pp-border-3 bg-grey-1",style:{height:"100%"}},[this.filter_env_list.map(function(n){return[t.render_env_item(e,n),e("q-item-separator",{staticClass:"q-ma-none"})]})])},render_env_item:function(e,t){var n=this;return e("div",{staticClass:"q-pl-sm q-pr-sm flex no-wrap justify-between cursor-pointer text-left text-primary",class:{"bg-blue-5 text-white":!(!this.selected_env||this.selected_env.id!==t.id)},style:{lineHeight:"36px"},on:{click:function(){n.new=!1,n.edit=!1,n.$store.state.env.selected_env=t}}},[e("div",{staticClass:"ellipsis col-grow"},[e("div",{staticClass:"row no-wrap text-weight-bold"},[e("span",{staticClass:"q-mr-md ellipsis",style:{width:"160px"}},[t.name]),e("span",{staticClass:"q-mr-md col-grow text-right text-"+d[t.status].color,class:{"text-white":this.selected_env.id===t.id}},[d[t.status].label])])])])},render_filter_input:function(e){var t=this;return e(o.a,{staticClass:"pp-search-input q-mb-sm",style:{width:"200px"},props:{value:this.kw,placeholder:"按名称查找"},on:{input:function(e){t.kw=e,t.$nextTick(t.filter_env_list_by_kw)}}})},render_right_detail:function(e){return e("div",{},[this.render_header(e),e(i.a,{staticClass:"font-13 text-dark q-mb-md",props:{label:"HOST配置",collapse:!1}},[this.render_config_info(e)])])},render_config_info:function(e){var t=this;return e(a,{props:{disable:!this.edit,value:this.selected_env.hosts||null,width:"100%",toolbar:!0,height:"644px"},on:{input:function(e){return t.selected_env.hosts=e}}})},render_header:function(e){var t=this;return e("div",{staticClass:"q-mb-md bg-grey-3 q-pa-sm row no-wrap items-center text-left pp-border-4"},[e("div",{staticClass:"q-mr-sm"},[e("q-icon",{props:{name:"settings",color:"primary",size:"50px"}})]),e("div",{staticClass:"col-grow"},[e("div",{staticClass:"font-16 text-weight-bold ellipsis",style:{maxWidth:"600px"}},[this.edit?e("q-input",{staticClass:"pp-input-focus font-16",class:{"pp-border-red":!this.selected_env.name},style:{width:"300px"},props:{hideUnderline:!0,placeholder:"请输入环境名称",value:this.selected_env.name},on:{input:function(e){t.selected_env.name=e}}}):e("span",{},[this.selected_env.name||"请输入环境名称"])]),e("div",{staticClass:"font-13",style:{marginTop:"3px",width:"900px",overflow:"hidden",display:"-webkit-box",webkitLineClamp:2,webkitBoxOrient:"vertical"}},[this.edit?e("q-input",{staticClass:"pp-input-focus font-13",style:{paddingLeft:"4px"},props:{type:"textarea",hideUnderline:!0,maxHeight:20,rows:2,placeholder:"请输入描述",value:this.selected_env.description},on:{input:function(e){return t.selected_env.description=e}}}):e("span",[this.selected_env.description||"请输入描述"])])]),e("div",{},[null!=this.selected_env.id?this.new_create?null:e("q-btn",{staticClass:"pp-search-button no-shadow q-mr-sm",props:{label:"编辑",color:this.edit?"teal-2":"secondary"},on:{click:function(){return t.edit=!t.edit}}}):null,e("q-btn",{staticClass:"pp-search-button no-shadow q-mr-sm",props:{label:"保存",color:"primary"},on:{click:function(){t.save_env_config()}}}),null!=this.selected_env.id?this.new_create?null:e("q-btn",{staticClass:"pp-search-button no-shadow q-mr-sm",props:{label:-1===this.selected_env.status?"启用":"禁用",color:-1===this.selected_env.status?"positive":"warning"},on:{click:function(){t.update_env_status()}}}):null,null!=this.selected_env.id?this.new_create?null:e("q-btn",{staticClass:"pp-search-button no-shadow q-mr-sm",props:{label:"删除",color:"negative"},on:{click:function(){return t.delete_env()}}}):null])])},refresh_env_list:function(){var e=this;Object(s.c)().then(function(t){1===t.status?(e.$store.state.env.env_list=t.data||[],e.filter_env_list=e.env_list.sort(function(e,t){return t.status-e.status})):e.$q.err("获取环境列表失败！")}).catch(function(t){e.$q.err("获取环境列表失败！")})},filter_env_list_by_kw:function(){var e=this;this.env_list&&(this.filter_env_list=this.env_list.filter(function(t){return-1!==t.name.indexOf(e.kw)}))},save_env_config:function(){var e=this;this.selected_env.id?Object(s.f)(this.selected_env.id,this.selected_env).then(function(t){1===t.status&&(e.$q.ok("修改环境成功！"),e.new=!1,e.$store.state.env.selected_env=t.data,e.refresh_env_list())}):Object(s.a)(this.selected_env).then(function(t){1===t.status&&(e.$q.ok("新增环境成功！"),e.new=!1,e.$store.state.env.selected_env=t.data,e.refresh_env_list())})},update_env_status:function(){var e=this,t=this;1===this.selected_env.status?Object(s.e)(this.selected_env.id).then(function(e){1===e.status&&(Object(l.c)("已停用！"),t.$store.state.env.selected_env.status=-1,t.new=!1,t.refresh_env_list())}).catch(function(e){}):Object(s.d)(this.selected_env.id).then(function(n){1===n.status&&(Object(l.c)("已启用！"),t.$store.state.env.selected_env.status=1,t.$store.state.env.active_env=e.selected_env,t.new=!1,t.refresh_env_list())}).catch(function(e){})},delete_env:function(){var e=this;Object(s.b)(this.selected_env.id).then(function(t){1===t.status&&(Object(l.c)("已删除！"),e.$store.state.env.selected_env=c,e.new=!1,e.refresh_env_list())}).catch(function(e){})}},mounted:function(){this.refresh_env_list()},render:function(e){return e("div",{staticClass:"q-pl-md q-pr-md",style:{marginTop:"18px"}},[e("div",{staticClass:"row",style:{width:"100%"}},[e("div",{staticClass:"q-mr-md",style:{width:"268px"}},[this.render_left_detail(e)]),e("div",{staticClass:"col-grow"},[this.render_right_detail(e)])])])}};t.default={name:"env_index",data:function(){return{}},methods:{},render:function(e){return e("div",{},[e(h)])}}},qFbV:function(e,t){ace.define("ace/mode/sh_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,n){"use strict";var s=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,r=t.reservedKeywords="!|{|}|case|do|done|elif|else|esac|fi|for|if|in|then|until|while|&|;|export|local|read|typeset|unset|elif|select|set|function|declare|readonly",a=t.languageConstructs="[|]|alias|bg|bind|break|builtin|cd|command|compgen|complete|continue|dirs|disown|echo|enable|eval|exec|exit|fc|fg|getopts|hash|help|history|jobs|kill|let|logout|popd|printf|pushd|pwd|return|set|shift|shopt|source|suspend|test|times|trap|type|ulimit|umask|unalias|wait",o=function(){var e=this.createKeywordMapper({keyword:r,"support.function.builtin":a,"invalid.deprecated":"debugger"},"identifier");this.$rules={start:[{token:"constant",regex:/\\./},{token:["text","comment"],regex:/(^|\s)(#.*)$/},{token:"string.start",regex:'"',push:[{token:"constant.language.escape",regex:/\\(?:[$`"\\]|$)/},{include:"variables"},{token:"keyword.operator",regex:/`/},{token:"string.end",regex:'"',next:"pop"},{defaultToken:"string"}]},{token:"string",regex:"\\$'",push:[{token:"constant.language.escape",regex:/\\(?:[abeEfnrtv\\'"]|x[a-fA-F\d]{1,2}|u[a-fA-F\d]{4}([a-fA-F\d]{4})?|c.|\d{1,3})/},{token:"string",regex:"'",next:"pop"},{defaultToken:"string"}]},{regex:"<<<",token:"keyword.operator"},{stateName:"heredoc",regex:"(<<-?)(\\s*)(['\"`]?)([\\w\\-]+)(['\"`]?)",onMatch:function(e,t,n){var s="-"==e[2]?"indentedHeredoc":"heredoc",i=e.split(this.splitRegex);return n.push(s,i[4]),[{type:"constant",value:i[1]},{type:"text",value:i[2]},{type:"string",value:i[3]},{type:"support.class",value:i[4]},{type:"string",value:i[5]}]},rules:{heredoc:[{onMatch:function(e,t,n){return e===n[1]?(n.shift(),n.shift(),this.next=n[0]||"start","support.class"):(this.next="","string")},regex:".*$",next:"start"}],indentedHeredoc:[{token:"string",regex:"^\t+"},{onMatch:function(e,t,n){return e===n[1]?(n.shift(),n.shift(),this.next=n[0]||"start","support.class"):(this.next="","string")},regex:".*$",next:"start"}]}},{regex:"$",token:"empty",next:function(e,t){return"heredoc"===t[0]||"indentedHeredoc"===t[0]?t[0]:e}},{token:["keyword","text","text","text","variable"],regex:/(declare|local|readonly)(\s+)(?:(-[fixar]+)(\s+))?([a-zA-Z_][a-zA-Z0-9_]*\b)/},{token:"variable.language",regex:"(?:\\$(?:SHLVL|\\$|\\!|\\?))"},{token:"variable",regex:"(?:[a-zA-Z_][a-zA-Z0-9_]*(?==))"},{include:"variables"},{token:"support.function",regex:"(?:[a-zA-Z_][a-zA-Z0-9_]*\\s*\\(\\))"},{token:"support.function",regex:"(?:&(?:\\d+))"},{token:"string",start:"'",end:"'"},{token:"constant.numeric",regex:"(?:(?:(?:(?:(?:(?:\\d+)?(?:\\.\\d+))|(?:(?:\\d+)\\.))|(?:\\d+)))|(?:(?:(?:\\d+)?(?:\\.\\d+))|(?:(?:\\d+)\\.)))"},{token:"constant.numeric",regex:"(?:(?:[1-9]\\d*)|(?:0))\\b"},{token:e,regex:"[a-zA-Z_][a-zA-Z0-9_]*\\b"},{token:"keyword.operator",regex:"\\+|\\-|\\*|\\*\\*|\\/|\\/\\/|~|<|>|<=|=>|=|!=|[%&|`]"},{token:"punctuation.operator",regex:";"},{token:"paren.lparen",regex:"[\\[\\(\\{]"},{token:"paren.rparen",regex:"[\\]]"},{token:"paren.rparen",regex:"[\\)\\}]",next:"pop"}],variables:[{token:"variable",regex:/(\$)(\w+)/},{token:["variable","paren.lparen"],regex:/(\$)(\()/,push:"start"},{token:["variable","paren.lparen","keyword.operator","variable","keyword.operator"],regex:/(\$)(\{)([#!]?)(\w+|[*@#?\-$!0_])(:[?+\-=]?|##?|%%?|,,?\/|\^\^?)?/,push:"start"},{token:"variable",regex:/\$[*@#?\-$!0_]/},{token:["variable","paren.lparen"],regex:/(\$)(\{)/,push:"start"}]},this.normalizeRules()};s.inherits(o,i),t.ShHighlightRules=o}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t,n){"use strict";var s=e("../../lib/oop"),i=e("../../range").Range,r=e("./fold_mode").FoldMode,a=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};s.inherits(a,r),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var s=e.getLine(n);if(this.singleLineBlockCommentRe.test(s)&&!this.startRegionRe.test(s)&&!this.tripleStarBlockCommentRe.test(s))return"";var i=this._getFoldWidgetBase(e,t,n);return!i&&this.startRegionRe.test(s)?"start":i},this.getFoldWidgetRange=function(e,t,n,s){var i,r=e.getLine(n);if(this.startRegionRe.test(r))return this.getCommentRegionBlock(e,r,n);if(i=r.match(this.foldingStartMarker)){var a=i.index;if(i[1])return this.openingBracketBlock(e,i[1],n,a);var o=e.getCommentFoldRange(n,a+i[0].length,1);return o&&!o.isMultiLine()&&(s?o=this.getSectionRange(e,n):"all"!=t&&(o=null)),o}if("markbegin"!==t&&(i=r.match(this.foldingStopMarker))){a=i.index+i[0].length;return i[1]?this.closingBracketBlock(e,i[1],n,a):e.getCommentFoldRange(n,a,-1)}},this.getSectionRange=function(e,t){for(var n=e.getLine(t),s=n.search(/\S/),r=t,a=n.length,o=t+=1,l=e.getLength();++t<l;){var c=(n=e.getLine(t)).search(/\S/);if(-1!==c){if(s>c)break;var d=this.getFoldWidgetRange(e,"all",t);if(d){if(d.start.row<=r)break;if(d.isMultiLine())t=d.end.row;else if(s==c)break}o=t}}return new i(r,a,o,e.getLine(o).length)},this.getCommentRegionBlock=function(e,t,n){for(var s=t.search(/\s*$/),r=e.getLength(),a=n,o=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,l=1;++n<r;){t=e.getLine(n);var c=o.exec(t);if(c&&(c[1]?l--:l++,!l))break}if(n>a)return new i(a,s,n,t.length)}}.call(a.prototype)}),ace.define("ace/mode/sh",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/sh_highlight_rules","ace/range","ace/mode/folding/cstyle","ace/mode/behaviour/cstyle"],function(e,t,n){"use strict";var s=e("../lib/oop"),i=e("./text").Mode,r=e("./sh_highlight_rules").ShHighlightRules,a=e("../range").Range,o=e("./folding/cstyle").FoldMode,l=e("./behaviour/cstyle").CstyleBehaviour,c=function(){this.HighlightRules=r,this.foldingRules=new o,this.$behaviour=new l};s.inherits(c,i),function(){this.lineCommentStart="#",this.getNextLineIndent=function(e,t,n){var s=this.$getIndent(t),i=this.getTokenizer().getLineTokens(t,e).tokens;if(i.length&&"comment"==i[i.length-1].type)return s;"start"==e&&(t.match(/^.*[\{\(\[:]\s*$/)&&(s+=n));return s};var e={pass:1,return:1,raise:1,break:1,continue:1};this.checkOutdent=function(t,n,s){if("\r\n"!==s&&"\r"!==s&&"\n"!==s)return!1;var i=this.getTokenizer().getLineTokens(n.trim(),t).tokens;if(!i)return!1;do{var r=i.pop()}while(r&&("comment"==r.type||"text"==r.type&&r.value.match(/^\s+$/)));return!!r&&("keyword"==r.type&&e[r.value])},this.autoOutdent=function(e,t,n){n+=1;var s=this.$getIndent(t.getLine(n)),i=t.getTabString();s.slice(-i.length)==i&&t.remove(new a(n,s.length-i.length,n,s.length))},this.$id="ace/mode/sh"}.call(c.prototype),t.Mode=c})}});
//# sourceMappingURL=5.1e0485a8602db3d16c1f.js.map