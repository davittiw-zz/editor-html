let davittiw_editor = {

    editor:document.querySelectorAll('.editor'),
    buttons:{
        'p':{
            name:'p',
            attribute:false
        },
        'h1':{
            name:'h1',
            attribute:false
        },
        'h2':{
            name:'h2',
            attribute:false
        },
        'h3':{
            name:'h3',
            attribute:false
        },
        'h4':{
            name:'h4',
            attribute:false
        },
        'h5':{
            name:'h5',
            attribute:false
        },
        'h6':{
            name:'h6',
            attribute:false
        },
        'span':{
            name:'span',
            attribute:false
        },
        'block':{
            name:'block',
            attribute:false
        },
        'img':{
            name:'img',
            attribute:false
        },
        'br':{
            name:'break-line',
            attribute:false
        }
    }, 
    loadEditor(){

        this.editor.forEach((tag,index_tag)=>{
        
            for(let index in davittiw_editor.buttons){
                console.log(index,davittiw_editor.buttons[index]);
            }

            //let button = document.createElement('');

        });
    },
    init(){
        this.loadEditor();
    }

};
davittiw_editor.init();