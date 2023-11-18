$(document).ready(function(){
    let q = 0
    $('form').on('submit', function(e){
        e.preventDefault()
        const novaTarefa = $('#nova-tarefa').val()
        const novoItem = $(`<li style="display:none"></li>`)
        
        $(`<a id="item${q + 1}" href="#item${q + 1}">${novaTarefa}</a>`).appendTo(novoItem)
        
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)
        
        $('#nova-tarefa').val('')
        q ++
    })
    
    let w = true
    $('ul').click(function(){
        if(w == true){
            $('a').css({"text-decoration":"line-through","color":"rgb(0,0,0)"})
            w = false
        } else {
            $('a').css({"text-decoration":"none", "color":"rgb(245,245,245)"})
            w = true
        }
    })
})