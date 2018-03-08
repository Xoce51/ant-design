webpackJsonp([134],{1769:function(n,a){n.exports={content:["section",["p","\u5c55\u793a\u884c\u5217\u6570\u636e\u3002"],["h2","\u4f55\u65f6\u4f7f\u7528"],["ul",["li",["p","\u5f53\u6709\u5927\u91cf\u7ed3\u6784\u5316\u7684\u6570\u636e\u9700\u8981\u5c55\u73b0\u65f6\uff1b"]],["li",["p","\u5f53\u9700\u8981\u5bf9\u6570\u636e\u8fdb\u884c\u6392\u5e8f\u3001\u641c\u7d22\u3001\u5206\u9875\u3001\u81ea\u5b9a\u4e49\u64cd\u4f5c\u7b49\u590d\u6742\u884c\u4e3a\u65f6\u3002"]]],["h2","\u5982\u4f55\u4f7f\u7528"],["p","\u6307\u5b9a\u8868\u683c\u7684\u6570\u636e\u6e90 ",["code","dataSource"]," \u4e3a\u4e00\u4e2a\u6570\u7ec4\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> dataSource <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n  key<span class="token punctuation">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'\u80e1\u5f66\u658c\'</span><span class="token punctuation">,</span>\n  age<span class="token punctuation">:</span> <span class="token number">32</span><span class="token punctuation">,</span>\n  address<span class="token punctuation">:</span> <span class="token string">\'\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  key<span class="token punctuation">:</span> <span class="token string">\'2\'</span><span class="token punctuation">,</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'\u80e1\u5f66\u7956\'</span><span class="token punctuation">,</span>\n  age<span class="token punctuation">:</span> <span class="token number">42</span><span class="token punctuation">,</span>\n  address<span class="token punctuation">:</span> <span class="token string">\'\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n  title<span class="token punctuation">:</span> <span class="token string">\'\u59d3\u540d\'</span><span class="token punctuation">,</span>\n  dataIndex<span class="token punctuation">:</span> <span class="token string">\'name\'</span><span class="token punctuation">,</span>\n  key<span class="token punctuation">:</span> <span class="token string">\'name\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  title<span class="token punctuation">:</span> <span class="token string">\'\u5e74\u9f84\'</span><span class="token punctuation">,</span>\n  dataIndex<span class="token punctuation">:</span> <span class="token string">\'age\'</span><span class="token punctuation">,</span>\n  key<span class="token punctuation">:</span> <span class="token string">\'age\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  title<span class="token punctuation">:</span> <span class="token string">\'\u4f4f\u5740\'</span><span class="token punctuation">,</span>\n  dataIndex<span class="token punctuation">:</span> <span class="token string">\'address\'</span><span class="token punctuation">,</span>\n  key<span class="token punctuation">:</span> <span class="token string">\'address\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>dataSource<span class="token punctuation">}</span></span> <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>'},["code","const dataSource = [{\n  key: '1',\n  name: '\u80e1\u5f66\u658c',\n  age: 32,\n  address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7'\n}, {\n  key: '2',\n  name: '\u80e1\u5f66\u7956',\n  age: 42,\n  address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7'\n}];\n\nconst columns = [{\n  title: '\u59d3\u540d',\n  dataIndex: 'name',\n  key: 'name',\n}, {\n  title: '\u5e74\u9f84',\n  dataIndex: 'age',\n  key: 'age',\n}, {\n  title: '\u4f4f\u5740',\n  dataIndex: 'address',\n  key: 'address',\n}];\n\n<Table dataSource={dataSource} columns={columns} />"]]],meta:{category:"Components",cols:1,type:"Data Display",title:"Table",subtitle:"\u8868\u683c",filename:"components/table/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4f55\u65f6\u4f7f\u7528",title:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5982\u4f55\u4f7f\u7528",title:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5728-TypeScript-\u4e2d\u4f7f\u7528",title:"\u5728 TypeScript \u4e2d\u4f7f\u7528"},"\u5728 TypeScript \u4e2d\u4f7f\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u6ce8\u610f",title:"\u6ce8\u610f"},"\u6ce8\u610f"]]],api:["section",["h2","API"],["h3","Table"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","bordered"],["td","\u662f\u5426\u5c55\u793a\u5916\u8fb9\u6846\u548c\u5217\u8fb9\u6846"],["td","boolean"],["td","false"]],["tr",["td","columns"],["td","\u8868\u683c\u5217\u7684\u914d\u7f6e\u63cf\u8ff0\uff0c\u5177\u4f53\u9879\u89c1\u4e0b\u8868"],["td",["a",{title:null,href:"https://git.io/vMMXC"},"ColumnProps"],"[","]"],["td","-"]],["tr",["td","components"],["td","\u8986\u76d6\u9ed8\u8ba4\u7684 table \u5143\u7d20"],["td","object"],["td","-"]],["tr",["td","dataSource"],["td","\u6570\u636e\u6570\u7ec4"],["td","any","[","]"],["td"]],["tr",["td","defaultExpandAllRows"],["td","\u521d\u59cb\u65f6\uff0c\u662f\u5426\u5c55\u5f00\u6240\u6709\u884c"],["td","boolean"],["td","false"]],["tr",["td","defaultExpandedRowKeys"],["td","\u9ed8\u8ba4\u5c55\u5f00\u7684\u884c"],["td","string","[","]"],["td","-"]],["tr",["td","expandedRowKeys"],["td","\u5c55\u5f00\u7684\u884c\uff0c\u63a7\u5236\u5c5e\u6027"],["td","string","[","]"],["td","-"]],["tr",["td","expandedRowRender"],["td","\u989d\u5916\u7684\u5c55\u5f00\u884c"],["td","Function(record):ReactNode"],["td","-"]],["tr",["td","expandRowByClick"],["td","\u901a\u8fc7\u70b9\u51fb\u884c\u6765\u5c55\u5f00\u5b50\u884c"],["td","boolean"],["td",["code","false"]]],["tr",["td","footer"],["td","\u8868\u683c\u5c3e\u90e8"],["td","Function(currentPageData)"],["td"]],["tr",["td","indentSize"],["td","\u5c55\u793a\u6811\u5f62\u6570\u636e\u65f6\uff0c\u6bcf\u5c42\u7f29\u8fdb\u7684\u5bbd\u5ea6\uff0c\u4ee5 px \u4e3a\u5355\u4f4d"],["td","number"],["td","15"]],["tr",["td","loading"],["td","\u9875\u9762\u662f\u5426\u52a0\u8f7d\u4e2d"],["td","boolean","|",["a",{title:null,href:"https://ant.design/components/spin-cn/#API"},"object"]," (",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/4544#issuecomment-271533135"},"\u66f4\u591a"],")"],["td","false"]],["tr",["td","locale"],["td","\u9ed8\u8ba4\u6587\u6848\u8bbe\u7f6e\uff0c\u76ee\u524d\u5305\u62ec\u6392\u5e8f\u3001\u8fc7\u6ee4\u3001\u7a7a\u6570\u636e\u6587\u6848"],["td","object"],["td","filterConfirm: '\u786e\u5b9a' ",["br"]," filterReset: '\u91cd\u7f6e' ",["br"]," emptyText: '\u6682\u65e0\u6570\u636e' ",["br"]," ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/575#issuecomment-159169511"},"\u9ed8\u8ba4\u503c"]]],["tr",["td","pagination"],["td","\u5206\u9875\u5668\uff0c\u53c2\u8003",["a",{title:null,href:"#pagination"},"\u914d\u7f6e\u9879"],"\u6216 ",["a",{title:null,href:"/components/pagination/"},"pagination"],"\uff0c\u8bbe\u4e3a false \u65f6\u4e0d\u5c55\u793a\u548c\u8fdb\u884c\u5206\u9875"],["td","object"],["td"]],["tr",["td","rowClassName"],["td","\u8868\u683c\u884c\u7684\u7c7b\u540d"],["td","Function(record, index):string"],["td","-"]],["tr",["td","rowKey"],["td","\u8868\u683c\u884c key \u7684\u53d6\u503c\uff0c\u53ef\u4ee5\u662f\u5b57\u7b26\u4e32\u6216\u4e00\u4e2a\u51fd\u6570"],["td","string","|","Function(record):string"],["td","'key'"]],["tr",["td","rowSelection"],["td","\u5217\u8868\u9879\u662f\u5426\u53ef\u9009\u62e9\uff0c",["a",{title:null,href:"#rowSelection"},"\u914d\u7f6e\u9879"]],["td","object"],["td","null"]],["tr",["td","scroll"],["td","\u6a2a\u5411\u6216\u7eb5\u5411\u652f\u6301\u6eda\u52a8\uff0c\u4e5f\u53ef\u7528\u4e8e\u6307\u5b9a\u6eda\u52a8\u533a\u57df\u7684\u5bbd\u9ad8\u5ea6\uff1a",["code","{{ x: true, y: 300 }}"]],["td","object"],["td","-"]],["tr",["td","showHeader"],["td","\u662f\u5426\u663e\u793a\u8868\u5934"],["td","boolean"],["td","true"]],["tr",["td","size"],["td","\u6b63\u5e38\u6216\u8ff7\u4f60\u7c7b\u578b\uff0c",["code","default"]," or ",["code","small"]],["td","string"],["td","default"]],["tr",["td","title"],["td","\u8868\u683c\u6807\u9898"],["td","Function(currentPageData)"],["td"]],["tr",["td","onChange"],["td","\u5206\u9875\u3001\u6392\u5e8f\u3001\u7b5b\u9009\u53d8\u5316\u65f6\u89e6\u53d1"],["td","Function(pagination, filters, sorter)"],["td"]],["tr",["td","onExpand"],["td","\u70b9\u51fb\u5c55\u5f00\u56fe\u6807\u65f6\u89e6\u53d1"],["td","Function(expanded, record)"],["td"]],["tr",["td","onExpandedRowsChange"],["td","\u5c55\u5f00\u7684\u884c\u53d8\u5316\u65f6\u89e6\u53d1"],["td","Function(expandedRows)"],["td"]],["tr",["td","onHeaderRow"],["td","\u8bbe\u7f6e\u5934\u90e8\u884c\u5c5e\u6027"],["td","Function(column, index)"],["td","-"]],["tr",["td","onRow"],["td","\u8bbe\u7f6e\u884c\u5c5e\u6027"],["td","Function(record, index)"],["td","-"]]]],["h4","onRow \u7528\u6cd5"],["p","\u9002\u7528\u4e8e ",["code","onRow"]," ",["code","onHeaderRow"]," ",["code","onCell"]," ",["code","onHeaderCell"],"\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token operator">&lt;</span>Table\n  onRow<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>record<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      onClick<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>       <span class="token comment" spellcheck="true">// \u70b9\u51fb\u884c</span>\n      onMouseEnter<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment" spellcheck="true">// \u9f20\u6807\u79fb\u5165\u884c</span>\n      onXxxx<span class="token operator">...</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">)</span><span class="token punctuation">}</span>\n  onHeaderRow<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>column<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      onClick<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>        <span class="token comment" spellcheck="true">// \u70b9\u51fb\u8868\u5934\u884c</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">)</span><span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>'},["code","<Table\n  onRow={(record) => {\n    return {\n      onClick: () => {},       // \u70b9\u51fb\u884c\n      onMouseEnter: () => {},  // \u9f20\u6807\u79fb\u5165\u884c\n      onXxxx...\n    };\n  )}\n  onHeaderRow={(column) => {\n    return {\n      onClick: () => {},        // \u70b9\u51fb\u8868\u5934\u884c\n    };\n  )}\n/>"]],["h3","Column"],["p","\u5217\u63cf\u8ff0\u6570\u636e\u5bf9\u8c61\uff0c\u662f columns \u4e2d\u7684\u4e00\u9879\uff0cColumn \u4f7f\u7528\u76f8\u540c\u7684 API\u3002"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","className"],["td","\u5217\u7684 className"],["td","string"],["td","-"]],["tr",["td","colSpan"],["td","\u8868\u5934\u5217\u5408\u5e76,\u8bbe\u7f6e\u4e3a 0 \u65f6\uff0c\u4e0d\u6e32\u67d3"],["td","number"],["td"]],["tr",["td","dataIndex"],["td","\u5217\u6570\u636e\u5728\u6570\u636e\u9879\u4e2d\u5bf9\u5e94\u7684 key\uff0c\u652f\u6301 ",["code","a.b.c"]," \u7684\u5d4c\u5957\u5199\u6cd5"],["td","string"],["td","-"]],["tr",["td","filterDropdown"],["td","\u53ef\u4ee5\u81ea\u5b9a\u4e49\u7b5b\u9009\u83dc\u5355\uff0c\u6b64\u51fd\u6570\u53ea\u8d1f\u8d23\u6e32\u67d3\u56fe\u5c42\uff0c\u9700\u8981\u81ea\u884c\u7f16\u5199\u5404\u79cd\u4ea4\u4e92"],["td","ReactNode"],["td","-"]],["tr",["td","filterDropdownVisible"],["td","\u7528\u4e8e\u63a7\u5236\u81ea\u5b9a\u4e49\u7b5b\u9009\u83dc\u5355\u662f\u5426\u53ef\u89c1"],["td","boolean"],["td","-"]],["tr",["td","filtered"],["td","\u6807\u8bc6\u6570\u636e\u662f\u5426\u7ecf\u8fc7\u8fc7\u6ee4\uff0c\u7b5b\u9009\u56fe\u6807\u4f1a\u9ad8\u4eae"],["td","boolean"],["td","false"]],["tr",["td","filteredValue"],["td","\u7b5b\u9009\u7684\u53d7\u63a7\u5c5e\u6027\uff0c\u5916\u754c\u53ef\u7528\u6b64\u63a7\u5236\u5217\u7684\u7b5b\u9009\u72b6\u6001\uff0c\u503c\u4e3a\u5df2\u7b5b\u9009\u7684 value \u6570\u7ec4"],["td","string","[","]"],["td","-"]],["tr",["td","filterIcon"],["td","\u81ea\u5b9a\u4e49 fiter \u56fe\u6807\u3002"],["td","ReactNode"],["td","false"]],["tr",["td","filterMultiple"],["td","\u662f\u5426\u591a\u9009"],["td","boolean"],["td","true"]],["tr",["td","filters"],["td","\u8868\u5934\u7684\u7b5b\u9009\u83dc\u5355\u9879"],["td","object","[","]"],["td","-"]],["tr",["td","fixed"],["td","\u5217\u662f\u5426\u56fa\u5b9a\uff0c\u53ef\u9009 ",["code","true"],"(\u7b49\u6548\u4e8e left) ",["code","'left'"]," ",["code","'right'"]],["td","boolean","|","string"],["td","false"]],["tr",["td","key"],["td","React \u9700\u8981\u7684 key\uff0c\u5982\u679c\u5df2\u7ecf\u8bbe\u7f6e\u4e86\u552f\u4e00\u7684 ",["code","dataIndex"],"\uff0c\u53ef\u4ee5\u5ffd\u7565\u8fd9\u4e2a\u5c5e\u6027"],["td","string"],["td","-"]],["tr",["td","render"],["td","\u751f\u6210\u590d\u6742\u6570\u636e\u7684\u6e32\u67d3\u51fd\u6570\uff0c\u53c2\u6570\u5206\u522b\u4e3a\u5f53\u524d\u884c\u7684\u503c\uff0c\u5f53\u524d\u884c\u6570\u636e\uff0c\u884c\u7d22\u5f15\uff0c@return\u91cc\u9762\u53ef\u4ee5\u8bbe\u7f6e\u8868\u683c",["a",{title:null,href:"#components-table-demo-colspan-rowspan"},"\u884c/\u5217\u5408\u5e76"]],["td","Function(text, record, index) {}"],["td","-"]],["tr",["td","sorter"],["td","\u6392\u5e8f\u51fd\u6570\uff0c\u672c\u5730\u6392\u5e8f\u4f7f\u7528\u4e00\u4e2a\u51fd\u6570(\u53c2\u8003 ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort"},"Array.sort"]," \u7684 compareFunction)\uff0c\u9700\u8981\u670d\u52a1\u7aef\u6392\u5e8f\u53ef\u8bbe\u4e3a true"],["td","Function","|","boolean"],["td","-"]],["tr",["td","sortOrder"],["td","\u6392\u5e8f\u7684\u53d7\u63a7\u5c5e\u6027\uff0c\u5916\u754c\u53ef\u7528\u6b64\u63a7\u5236\u5217\u7684\u6392\u5e8f\uff0c\u53ef\u8bbe\u7f6e\u4e3a ",["code","'ascend'"]," ",["code","'descend'"]," ",["code","false"]],["td","boolean","|","string"],["td","-"]],["tr",["td","title"],["td","\u5217\u5934\u663e\u793a\u6587\u5b57"],["td","string","|","ReactNode"],["td","-"]],["tr",["td","width"],["td","\u5217\u5bbd\u5ea6"],["td","string","|","number"],["td","-"]],["tr",["td","onCell"],["td","\u8bbe\u7f6e\u5355\u5143\u683c\u5c5e\u6027"],["td","Function(record)"],["td","-"]],["tr",["td","onFilter"],["td","\u672c\u5730\u6a21\u5f0f\u4e0b\uff0c\u786e\u5b9a\u7b5b\u9009\u7684\u8fd0\u884c\u51fd\u6570"],["td","Function"],["td","-"]],["tr",["td","onFilterDropdownVisibleChange"],["td","\u81ea\u5b9a\u4e49\u7b5b\u9009\u83dc\u5355\u53ef\u89c1\u53d8\u5316\u65f6\u8c03\u7528"],["td","function(visible) {}"],["td","-"]],["tr",["td","onHeaderCell"],["td","\u8bbe\u7f6e\u5934\u90e8\u5355\u5143\u683c\u5c5e\u6027"],["td","Function(column)"],["td","-"]]]],["h3","ColumnGroup"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","title"],["td","\u5217\u5934\u663e\u793a\u6587\u5b57"],["td","string","|","ReactNode"],["td","-"]]]],["h3","pagination"],["p","\u5206\u9875\u7684\u914d\u7f6e\u9879\u3002"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","position"],["td","\u6307\u5b9a\u5206\u9875\u663e\u793a\u7684\u4f4d\u7f6e"],["td","'top' ","|"," 'bottom' ","|"," 'both'"],["td","'bottom'"]]]],["p","\u66f4\u591a\u914d\u7f6e\u9879\uff0c\u8bf7\u67e5\u770b ",["a",{title:null,href:"/components/pagination/"},["code","Pagination"]],"\u3002"],["h3","rowSelection"],["p","\u9009\u62e9\u529f\u80fd\u7684\u914d\u7f6e\u3002"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","fixed"],["td","\u628a\u9009\u62e9\u6846\u5217\u56fa\u5b9a\u5728\u5de6\u8fb9"],["td","boolean"],["td","-"]],["tr",["td","getCheckboxProps"],["td","\u9009\u62e9\u6846\u7684\u9ed8\u8ba4\u5c5e\u6027\u914d\u7f6e"],["td","Function(record)"],["td","-"]],["tr",["td","hideDefaultSelections"],["td","\u53bb\u6389\u300e\u5168\u9009\u300f\u300e\u53cd\u9009\u300f\u4e24\u4e2a\u9ed8\u8ba4\u9009\u9879"],["td","boolean"],["td","false"]],["tr",["td","selectedRowKeys"],["td","\u6307\u5b9a\u9009\u4e2d\u9879\u7684 key \u6570\u7ec4\uff0c\u9700\u8981\u548c onChange \u8fdb\u884c\u914d\u5408"],["td","string","[","]"],["td","[","]"]],["tr",["td","selections"],["td","\u81ea\u5b9a\u4e49\u9009\u62e9\u9879 ",["a",{title:null,href:"#selection"},"\u914d\u7f6e\u9879"],", \u8bbe\u4e3a ",["code","true"]," \u65f6\u4f7f\u7528\u9ed8\u8ba4\u9009\u62e9\u9879"],["td","object","[","]","|","boolean"],["td","true"]],["tr",["td","type"],["td","\u591a\u9009/\u5355\u9009\uff0c",["code","checkbox"]," or ",["code","radio"]],["td","string"],["td",["code","checkbox"]]],["tr",["td","onChange"],["td","\u9009\u4e2d\u9879\u53d1\u751f\u53d8\u5316\u7684\u65f6\u7684\u56de\u8c03"],["td","Function(selectedRowKeys, selectedRows)"],["td","-"]],["tr",["td","onSelect"],["td","\u7528\u6237\u624b\u52a8\u9009\u62e9/\u53d6\u6d88\u9009\u62e9\u67d0\u5217\u7684\u56de\u8c03"],["td","Function(record, selected, selectedRows)"],["td","-"]],["tr",["td","onSelectAll"],["td","\u7528\u6237\u624b\u52a8\u9009\u62e9/\u53d6\u6d88\u9009\u62e9\u6240\u6709\u5217\u7684\u56de\u8c03"],["td","Function(selected, selectedRows, changeRows)"],["td","-"]],["tr",["td","onSelectInvert"],["td","\u7528\u6237\u624b\u52a8\u9009\u62e9\u53cd\u9009\u7684\u56de\u8c03"],["td","Function(selectedRows)"],["td","-"]]]],["h3","selection"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","key"],["td","React \u9700\u8981\u7684 key\uff0c\u5efa\u8bae\u8bbe\u7f6e"],["td","string"],["td","-"]],["tr",["td","text"],["td","\u9009\u62e9\u9879\u663e\u793a\u7684\u6587\u5b57"],["td","string","|","React.ReactNode"],["td","-"]],["tr",["td","onSelect"],["td","\u9009\u62e9\u9879\u70b9\u51fb\u56de\u8c03"],["td","Function(changeableRowKeys)"],["td","-"]]]],["h2","\u5728 TypeScript \u4e2d\u4f7f\u7528"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Table <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> ColumnProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd/lib/table\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">interface</span> <span class="token class-name">IUser</span> <span class="token punctuation">{</span>\n  key<span class="token punctuation">:</span> number<span class="token punctuation">;</span>\n  name<span class="token punctuation">:</span> string<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> columns<span class="token punctuation">:</span> ColumnProps<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IUser</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n  key<span class="token punctuation">:</span> <span class="token string">\'name\'</span><span class="token punctuation">,</span>\n  title<span class="token punctuation">:</span> <span class="token string">\'Name\'</span><span class="token punctuation">,</span>\n  dataIndex<span class="token punctuation">:</span> <span class="token string">\'name\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> data<span class="token punctuation">:</span> IUser<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n  key<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'Jack\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">UserTable</span> <span class="token keyword">extends</span> <span class="token class-name">Table</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IUser</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>UserTable</span> <span class="token attr-name">columns</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>columns<span class="token punctuation">}</span></span> <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\n<span class="token comment" spellcheck="true">// \u4f7f\u7528 JSX \u98ce\u683c\u7684 API</span>\n<span class="token keyword">class</span> <span class="token class-name">NameColumn</span> <span class="token keyword">extends</span> <span class="token class-name">Table<span class="token punctuation">.</span>Column</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IUser</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>UserTable</span> <span class="token attr-name">dataSource</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NameColumn</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Name<span class="token punctuation">"</span></span> <span class="token attr-name">dataIndex</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>name<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>UserTable</span><span class="token punctuation">></span></span>'},["code","import { Table } from 'antd';\nimport { ColumnProps } from 'antd/lib/table';\n\ninterface IUser {\n  key: number;\n  name: string;\n}\n\nconst columns: ColumnProps<IUser>[] = [{\n  key: 'name',\n  title: 'Name',\n  dataIndex: 'name',\n}];\n\nconst data: IUser[] = [{\n  key: 0,\n  name: 'Jack',\n}];\n\nclass UserTable extends Table<IUser> {}\n<UserTable columns={columns} dataSource={data} />\n\n// \u4f7f\u7528 JSX \u98ce\u683c\u7684 API\nclass NameColumn extends Table.Column<IUser> {}\n\n<UserTable dataSource={data}>\n  <NameColumn key=\"name\" title=\"Name\" dataIndex=\"name\" />\n</UserTable>"]],["h2","\u6ce8\u610f"],["p","\u6309\u7167 ",["a",{title:null,href:"https://facebook.github.io/react/docs/lists-and-keys.html#keys"},"React \u7684\u89c4\u8303"],"\uff0c\u6240\u6709\u7684\u7ec4\u4ef6\u6570\u7ec4\u5fc5\u987b\u7ed1\u5b9a key\u3002\u5728 Table \u4e2d\uff0c",["code","dataSource"]," \u548c ",["code","columns"]," \u91cc\u7684\u6570\u636e\u503c\u90fd\u9700\u8981\u6307\u5b9a ",["code","key"]," \u503c\u3002\u5bf9\u4e8e ",["code","dataSource"]," \u9ed8\u8ba4\u5c06\u6bcf\u5217\u6570\u636e\u7684 ",["code","key"]," \u5c5e\u6027\u4f5c\u4e3a\u552f\u4e00\u7684\u6807\u8bc6\u3002"],["p","\u5982\u679c\u4f60\u7684\u6570\u636e\u6ca1\u6709\u8fd9\u4e2a\u5c5e\u6027\uff0c\u52a1\u5fc5\u4f7f\u7528 ",["code","rowKey"]," \u6765\u6307\u5b9a\u6570\u636e\u5217\u7684\u4e3b\u952e\u3002\u82e5\u6ca1\u6709\u6307\u5b9a\uff0c\u63a7\u5236\u53f0\u4f1a\u51fa\u73b0\u4ee5\u4e0b\u7684\u63d0\u793a\uff0c\u8868\u683c\u7ec4\u4ef6\u4e5f\u4f1a\u51fa\u73b0\u5404\u7c7b\u5947\u602a\u7684\u9519\u8bef\u3002"],["p",["img",{title:null,src:"https://os.alipayobjects.com/rmsportal/luLdLvhPOiRpyss.png",alt:null}]],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// \u6bd4\u5982\u4f60\u7684\u6570\u636e\u4e3b\u952e\u662f uid</span>\n<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">rowKey</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>uid<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// \u6216</span>\n<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Table</span> <span class="token attr-name">rowKey</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>record <span class="token operator">=</span><span class="token operator">></span> record<span class="token punctuation">.</span>uid<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>'},["code",'// \u6bd4\u5982\u4f60\u7684\u6570\u636e\u4e3b\u952e\u662f uid\nreturn <Table rowKey="uid" />;\n// \u6216\nreturn <Table rowKey={record => record.uid} />;']]]}}});