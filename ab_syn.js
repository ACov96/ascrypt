function translate(e) {
    switch(e.type){
    case 'eList': {
	var curr = e.head;
	while(curr){
	    translate(curr);
	    curr = curr.tail;
	}
	break;  
    }
    case 'exp': {
	console.log(e.type);
	break;
    }
    case 'op': {
	console.log(e);
	break;
    }
    case 'dec': {
	translate_dec(e.body);
	break;
    }
    case 'id': {
	return e.val;
    }
    default: {
	console.error("Fell out of switch. Exiting program...");
	console.error(e);
	process.exit(1);
    }
    }
}

function translate_dec(e) {
    switch(e.type){
    case 'vardec':{
	console.log(e);
	break;
    }
    case 'fundec': {
	var fun_string = '';
	var sync_type = null;
	if(e.sync == 'async')
	    sync_type = e.sync;
	else
	    sync_type = '';
	var fun_id = e.dec_body.id;
	var fun_args = translate_arg_list(e.dec_body.args);
	var fun_return = translate_return(e.dec_body.body.returnStm);
	var fun_body = translate(e.dec_body.body.body);
	//console.log(`${sync_type} function ${fun_id}(${fun_args}){\n${fun_body}\n${fun_return}\n}\n`);
	return `${sync_type} function ${fun_id}(${fun_args}){\n${fun_body}\n${fun_return}\n}\n`
    }
    }
    
    
}

function translate_return(returnStm) {
    if (returnStm.return_val) {
	var val = translate(returnStm.return_val);
	return "return " + val + ";";
    }
    else {
	return "return;";
    }
}

function translate_arg_list(arg_list) {
    var curr = arg_list;
    var arg_list_string = ""
    while(curr){
	if(curr.tail) {
	    arg_list_string += curr.head.val + ', ';
	}
	else {
	    arg_list_string += curr.head.val;
	}
	curr = curr.tail;
    }
    return arg_list_string;
}
module.exports = {
    translate: translate
}
