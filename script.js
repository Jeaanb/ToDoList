let tarefas = 0

function contador() {
   const total = document.getElementById('total')
   total.innerText = tarefas
}

const input = document.getElementById('input-text')
const btnAdd = document.getElementById('btnAdd')

btnAdd.addEventListener('click', function(ev) {
   ev.preventDefault()

   if (input.value.trim() === '') {
      alert('Digite uma tarefa antes de adicionar!')
      return
   }

   const lista = document.getElementById('lista-de-tarefas')

   const liTarefas = document.createElement('li')
   liTarefas.innerText = input.value
   liTarefas.className = 'li-tarefas'
   lista.appendChild(liTarefas)

   const btnRemove = document.createElement('button')
   btnRemove.innerText = 'Remover'
   btnRemove.className = 'btn-remove'
   liTarefas.appendChild(btnRemove)

   tarefas++
   contador()

   btnRemove.addEventListener('click', function() {
      lista.removeChild(liTarefas)
      tarefas--
      contador()
   })

   input.value = ''
})