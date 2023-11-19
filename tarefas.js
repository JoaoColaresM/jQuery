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
    
    $('ul').on("click", "a",function(){
        $(this).toggleClass("riscar")       
    })
})