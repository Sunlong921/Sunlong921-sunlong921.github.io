 /**
  * Created by sunlong  on 2017/6/12.
 **/
 namespace = function(){
    var argus = arguments;
    for(var i = 0; i < argus.length; i++){
        var objs = argus[i].split(".");
		var obj = window;
        for(var j = 0; j < objs.length; j++){
            obj[objs[j]] = obj[objs[j]] || {};
            obj = obj[objs[j]];
        }
    }
    return obj;
};
namespace('m.base');
(function () {
	m.base.extend = function(destination, source) {
			if (destination == null) {
				destination = source
			}
			else {
				for (var property in source){		
					if ( getParamType(source[property]).toLowerCase() === "object" && 
						getParamType(destination[property]).toLowerCase() === "object" )
							extend(destination[property], source[property])
					else
						destination[property] = source[property];
				}
			}
			return destination;
	}
 m.base.extend( m.base, {
		/**
		 * 判断对象是否定义
		 * 其实只对对象中的元素判断有效，如是纯变量，此方法会无法调用，需要外面加try
		 * @param {object} object 对象
		 * @return {bool} 是/否
		 */
		isUndefined : function(o){ 
    		 	return o === undefined && typeof o == "undefined";
    	},
		/**
		 * 判断对象是否数组
		 * @param {object} object 对象
		 * @return {bool} 是/否
		 */
		isArray : function(obj) {
			return getParamType(obj).toLowerCase() === "array";
		},		
		/**
		 * 判断对象是否函数
		 * @param {object} object 对象
		 * @return {bool} 是/否
		 */
		isFunction : function(obj){
			return getParamType(obj).toLowerCase() === "function";
		},		
		/**
		 * 判断对象是否对象
		 * @param {object} object 对象
		 * @return {bool} 是/否
		 */
		isObject : function(obj) {
			return getParamType(obj).toLowerCase() === "object";
		},
		/**
		 * 判断对象是否数值
		 * @param {object} object 对象
		 * @return {bool} 是/否
		 */
		isNumber : function(obj) {
			return getParamType(obj).toLowerCase() === "number";
		},
		/**
		 * 判断对象是否字符串
		 * @param {object} object 对象
		 * @return {bool} 是/否
		 */
		isString : function(obj) {
			return getParamType(obj).toLowerCase() === "string";
		},
		/**
		 * 判断是否布尔值
		 * @param {object} object 对象
		 * @return {bool} 是/否
		 */
		isBoolean : function(obj) {
			return getParamType(obj).toLowerCase() === "boolean";
		},
		/**
		 * 判断对象是否日期
		 * @param {object} object 对象
		 * @return {bool} 是/否
		 */
		isDate : function(obj){
			return getParamType(obj).toLowerCase() === "date";
		},
		
		/**
		 * 判断对象是否DOM元素
		 * @param {object} obj DOM对象
		 * @return {bool} 是/否
		 */
		isDom : function(obj){
    		try{
    			return obj && typeof obj === "object" && !isUndefined(obj.nodeType) && obj.nodeType==1 && !isUndefined(obj.nodeName) && typeof obj.nodeName == "string";
    		}
    		catch(e){
    			//console.log(e)
    			return false;
    		}
    	},
    	
		/**
		 * 获取DOM对象的值
		 * @param {object} obj DOM对象
		 * @return {string} 取value或innerHTML
		 */
    	getDomVal : function(obj){
    		return obj.value || obj.innerHTML;
    	},
		/**
		 * 索引序列
		 * @param {serial,function} 数组或对象集合
		 * @return {undefined}
		 */
    	forEach : function(haystack, callback) {
			var i = 0,
				length = haystack.length,
				name;

			if (length !== undefined) {
				for (; i < length;) {
					if (callback.call(haystack[i], i, haystack[i++]) === false) {
						break;
					}
				}
			} else {
				for (name in haystack) {
					callback.call(haystack[name], name, haystack[name]);
				}
			}
		},
    	/**
		 * 获取dom对象
		 * @param {string|dom} dom的id或对象k
		 * @return {dom} 
		 */
		g : function(obj){
			return (typeof obj=='object')?obj:document.getElementById(obj);
		}
	});
	
	/**
	 * 获取对象类型
	 * @private
	 * @param {object} object 对象
	 * @return {string} 类型
	 * 可判断类型：Boolean Number String Function Array Date RegExp Object
	 */	
	function getParamType(obj){
		return obj == null ? String(obj) : 
			Object.prototype.toString.call(obj).replace(/\[object\s+(\w+)\]/i,"$1") || "object";
	}	
})();

m.base.extend(window, m.base); 
m  = function (args){
 	 return new B(args);
}
function B(args){
     this.elements = [];
     if (typeof args =='string') {
     	  if (args.indexOf(' ') !=-1 ) {
     	  	 var elements = args.split(' ');	//把节点拆开分别保存到数组里
     	  	 var C =  [];
     	  	 var N =  [];
             for (var i = 0; i < elements.length; i++) {
              	   if ( N[i] == 0 ) N.push(document);
              	   switch (elements[i].charAt(0)) {
              	   	   case  '#':
	                       C = [];
	                       C.push(this.getId(elements[i].substring(1)));
	                      N= C;
                       break;
                       case '.': 
	                       C = [];
	                       for (var j = 0; j < N.length; j++) {
	                          var t = this.getClass(elements(j).substring(1),N[j]);
	                          for (var k = 0; k < t.length; k++) {
	                          	   C.push(t[k]);
	                          };
	                       };
	                      N = C 
                       break;
                       default :
                       C = [];
		                   for (var j = 0; j < N.length; j++) {
		                   	    var t = this.getTagName(elements(j).substring(1),N(j));
		                   	    for (var k = 0; k < t.length; k++) {
		                   	     	  C.push(t[k]);
		                   	     }; 
		                   };
                        N = C;
              	   }
              };
              this.elements =C;  
     	  }else {
            switch(args.charAt(0)){
            	 case '#': 
            	 this.elements.push(this.getId(args.substring(1)));
            	 break;
            	 case '.': 
                 this.elements = this.getClass(args.substring(1)); 
                 break;
                 default :
                 this.elements = this.getTagName(args);
            }
     	  }
     }else if(typeof args =='object'){
          if (args != undefined) {
          	  this.elements[0] = args;
          };   

     }else if(typeof args =='function'){
         

     }       
 };
B.prototype.getId = function (id){
     return document.getElementById(id);
};
B.prototype.getTagName = function (tag, parentNode){
      var a = null;
      var b = [];
	    if (parentNode != undefined) {
			a  = parentNode;
		} else {
			a  = document;
		}
	   var  t  = a.getElementsByTagName(tag);
	   for (var i = 0; i < t.length; i++) {
	    		 b.push(t[i])
	    };
	    return b; 	
};
B.prototype.getClass = function (className, parentNode){
	 var a = null;
	 var b = [];
     if (parentNode != undefined) {
     	 a = parentNode
     }else{
     	 a = document;
     } 
    var all = a.getElementsByTagName('*');
     for (var i = 0; i < all.length; i ++) {
		if ((new RegExp('(\\s|^)' +className +'(\\s|$)')).test(all[i].className)) {
			b.push(all[i]);
		}
	}
	return b;
};
function getStyle (element, attr) {
	var value;
	if (typeof window.getComputedStyle != 'undefined') {//W3C
		value = window.getComputedStyle(element, null)[attr];
	} else if (typeof element.currentStyle != 'undeinfed') {//IE
		value = element.currentStyle[attr];
	}
	return value;
};
B.prototype.css = function (attr, value) {
	for (var i = 0; i < this.elements.length; i ++) {
		if (arguments.length == 1) {
			return getStyle(this.elements[i], attr);
		}
		this.elements[i].style[attr] = value;
	}
	return this;
}
// 事件
B.prototype.click = function (fn) {
	for (var i = 0; i < this.elements.length; i ++) {
		this.elements[i].onclick = fn;
	}
	return this;
};
 function addEvent(obj,type,fn){
 	// console.log(obj)
      if (typeof obj.addEventListener != 'undefined') {
      	         obj.addEventListener(type,fn)
      }else{
      	  if (!obj.events) obj.events ={};
      	  if (!obj.events[type]){
      	  	 obj.events[type] = [];
      	  	 if (obj['on' + type]) obj.events[type][0] = fn;
      	  } else {
			//同一个注册函数进行屏蔽，不添加到计数器中
			if (addEvent.equal(obj.events[type], fn)) return false;
		}
        obj.events[type][addEvent.ID++] = fn;
		//执行事件处理函数
		obj['on' + type] = addEvent.exec;
      }
}
//为每个事件分配一个计数器
addEvent.ID = 1;

//执行事件处理函数
addEvent.exec = function (event) {
	var e = event || addEvent.fixEvent(window.event);
	var es = this.events[e.type];
	for (var i in es) {
		es[i].call(this, e);
	}
};

//同一个注册函数进行屏蔽
addEvent.equal = function (es, fn) {
	for (var i in es) {
		if (es[i] == fn) return true;
	}
	return false;
}
B.prototype.on = function (event,fn){
	
	for (var i = 0; i < this.elements.length; i ++) {
		 addEvent(this.elements[i], event, fn);
		 // that.elements[i]
	}
	return this;
	  
};
B.prototype.value = function (str){
	 for (var i = 0; i < this.elements.length; i++) {
       if (arguments.length== 0){
       	  return this.elements[i].value;
       }
       	 this.elements[i].value = str
   };
};
B.prototype.html = function (str){
   for (var i = 0; i < this.elements.length; i++) {
       if (arguments.length== 0){
       	  return this.elements[i].innerHTML;
       }
       	 this.elements[i].innerHTML = str
   };
   return this;
}
//跨浏览器获取innerText
function getInnerText(element) {
	return (typeof element.textContent == 'string') ? element.textContent : element.innerText;
}

//跨浏览器设置innerText
function setInnerText(elememt, text) {
	if (typeof element.textContent == 'string') {
		element.textContent = text;
	} else {
		element.innerText = text;
	}
}
B.prototype.text = function (){
	 for (var i = 0; i < this.elements.length; i ++) {
		if (arguments.length == 0) {
			return getInnerText(this.elements[i]);
		}
		 setInnerText(this.elements[i], str);
	}
	return this;
};
B.prototype.attr = function (attr,value){
	  for (var i = 0; i < this.elements.length; i ++) {
           if (arguments.length == 1) {
           	return this.elements[i].getAttribute(attr);
           }else if (arguments.length == 2){
            this.elements[i].setAttribute(attr,value)
           }
	   };
	   return this;
};
B.prototype.eq = function (num){
    var element = this.elements[num];
	this.elements = [];
	this.elements[0] = element;
	return this;
};
B.prototype.addClass = function (className) {
      var that = this
	 for (var i = 0; i < that.elements.length; i ++) {
        if (!that.hasClass(className)) {
        	that.elements[i].className += ' ' + className;
        };
	 };
	 return this;
};
B.prototype.removeClass = function (className){
	    var that = this
	   for (var i = 0; i < that.elements.length; i ++) {
	   	  if (that.hasClass(className)) {
              that.elements[i].className = that.elements[i].className.replace(new RegExp('(\\s|^)'+className+'(\\s|$)'),' ');
	   	  };
	   }
}
B.prototype.hasClass = function (className){
	 for (var i = 0; i < this.elements.length; i ++) {
	    return this.elements[i].className.match(new RegExp('(\\s|^)' +className +'(\\s|$)'));
	 }
};
//插件入口
// B.prototype.extend = function (name, fn) {
// 	B.prototype[name] = fn;
// };
namespace('m.date');
(function(){
var date = m.date;
var _d = new Date();
extend( date, {
	/**
	 * 获取日期
	 * @param {string} sep 分隔符 默认为-
	 * @return {string} yyyy-mm-dd
	 */
	toDateString : function(nd){	
		var a=[],
			dt = isDate(nd) ? nd : _d;
			m = dt.getMonth()+1,
			d = dt.getDate(),
			sep = arguments[1] ? arguments[1] : (isString(arguments[0]) ? arguments[0] : "-"); 
		a.push(dt.getFullYear());
		a.push( m.toString().length < 2 ? "0" + m : m);
		a.push( d.toString().length < 2 ? "0" + d : d);
		return a.join(sep);
	},
	/**
	 * 获取日期和时间
	 * @param {string} sep 分隔符 默认为-
	 * @return {string} yyyy-mm-dd hh:ii:ss
	 */
	toDateTimeString : function(nd){
	    var dt = isDate(nd) ? nd : _d,
			h = dt.getHours(),
			i = dt.getMinutes(),
			s = dt.getSeconds(),
			a = [];
		a.push(h.toString().length < 2 ? "0" + h : h);
		a.push(i.toString().length < 2 ? "0" + i : i);
		a.push(s.toString().length < 2 ? "0" + s : s);
		return date.toDateString.apply(this,arguments) + " " + a.join(":");
	},
	/**
	 * 是否润年
	 * @param {int} year 年份
	 * @return {bool} 是/否
	 */
	isLeapYear : function(year) {
		return (0 == year % 4 && ((year % 100 != 0) || (year % 400 == 0)))
	},
	/**
	 * 获取服务器时间
	 * @return {date} Date
	 */
	getSeverDateTime : function(){
		var xhr = window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
		xhr.open("HEAD", window.location.href, false);
		xhr.send();	
		var d= new Date(xhr.getResponseHeader("Date"));
		
		
		return d;
	}	
  });
})();
namespace("m.url");
(function() {
	var url = m.url;
	extend(url, {
			get: function(pa) {
				var url = window.location.href.replace(/#+.*$/, ""),
					params = url.substring(url.indexOf("?") + 1, url.length).split("&"),
					param = {};
				for (var i = 0; i < params.length; i++) {
					var pos = params[i].indexOf("="),
						key = params[i].substring(0, pos),
						val = params[i].substring(pos + 1);
					param[key] = val
				}
				return typeof param[pa] == "undefined" ? "" : param[pa]
			}
 	})
})();

namespace("m.hashMap");
(function() {
	var hashMap = m.hashMap;
	extend(hashMap, {
		   size :  0 ,
		   entry : new Object(),
		   /** 存 **/
		   set : function (key , value){
		   	if(!this.containsKey(key)){
		            this.size ++ ;
		        }
		        this.entry[key] = value;
		   },
		    /** 取 **/
		   get : function (key) {
		        if( this.containsKey(key) ){
		            return this.entry[key];
		        }else{
		            return null;
		        }
			   },
			   /** 删除 **/
			 remove : function ( key ) {
			        if( delete this.entry[key] ){
			            this.size --;
			        }
			    },

              /** 是否包含 Key **/
		     containsKey : function ( key ){
		        return (key in this.entry);
		      },
             /** 是否包含 Value **/
		    containsValue : function ( value ){
		        for(var prop in this.entry)
		        {
		            if(this.entry[prop] == value)
		            {
		                return true;
		            }
		        }
		        return false;
		    },

		    /** 所有 Value **/
		    values : function () {
		        var values = new Array(size);
		        for(var prop in this.entry)
		        {
		            values.push(this.entry[prop]);
		        }
		        return values;
		    },
		    /** 所有 Key **/
		    keys :  function () {
		   
		        var keys = new Array(size);
		        for(var prop in this.entry)
		        {
		            keys.push(prop);
		        }
		        return keys;
		    },
		    /** Map Size **/
		    size :function (){
		       return this.size;
		    }
 	})
})();
extend(window, m.date);
extend(window, m.url);
extend(window, m.hashMap);