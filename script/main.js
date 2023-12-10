const viewValue = document.querySelector('.viewValue');
const keyboard = document.querySelector('.keyboard')

keyboard.addEventListener('click',function(event){
    if(event.target.classList.contains('key')){
        
        var value = event.target.textContent;
        
        if(value === "DEL"){
            var str = viewValue.textContent
            viewValue.textContent = str.substring(0,str.length-1)
        }
        else if(value==="."){
            
            if(viewValue.textContent==="")
                viewValue.innerHTML+="0,";
                return;
            viewValue.innerHTML+=",";
        }
        else if(value==="RESET"){
            viewValue.textContent="";
        }
        else if(value==="+"){
            if(viewValue.textContent==="")
                return;
            viewValue.innerHTML+=" + "
        }
        else if(value==="-"){
            if(viewValue.textContent==="")
                return;
            viewValue.innerHTML+=" - "
        }
        else if(value==="x"){
            if(viewValue.textContent==="")
                return;
            viewValue.innerHTML+=" * "
        }
        else if(value==="/"){
            if(viewValue.textContent==="")
                return;
            viewValue.innerHTML+=" / "
        }
        else if(value === "="){
            let value = viewValue.textContent;
            let result = eval(value);
            viewValue.textContent=result;
        }
        else if(viewValue.textContent.length>=12 || value === ""){
            return;
        }
        else{
            viewValue.innerHTML+=value;
        }
        
    }
});