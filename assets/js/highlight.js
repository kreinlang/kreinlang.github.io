var strReg1 = /"(.*?)"/g,
    strReg2 = /'(.*?)'/g,
    num = /([0-9])/g,
    specialReg = /\b(import|defobject|let|if|try|catch|def|break|while|switch|for|as|in|continue|break)(?=[^\w])/g,
    specialJsGlobReg = /\b(document|window|Array|String|Object|Number|\$)(?=[^\w])/g,
    specialKreinReg = /\b(parse|jsonize|print|this)(?=[^\w])/g,
    specialCommentReg  = /(\/\*.*\*\/)/g,
    inlineCommentReg = /(\/\/.*)/g;

var htmlTagReg = /(&lt;[^\&]*&gt;)/g;



function light(x){
    var string = x.innerHTML,
    parsed = string.replace(strReg1,'<span class="string">"$1"</span>');
    parsed = parsed.replace(specialReg,'<span class="keywords">$1</span>');
    parsed = parsed.replace(num,'<span class="nums">$1</span>');
    parsed = parsed.replace(specialKreinReg,'<span class="functions">$1</span>');
    parsed = parsed.replace(specialCommentReg,'<span class="comment">$1</span>');
    parsed = parsed.replace(inlineCommentReg,'<span class="comment">$1</span>');
    parsed = parsed.replace(strReg2,"<span class=\"string\">'$1'</span>");

    x.innerHTML = parsed;
}


let codes = document.getElementsByClassName('code');

for(i = 0; i < codes.length; i++){
    light(codes[i]);
}

