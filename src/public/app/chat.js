$(
   () => {

      let socket = io()

      let btnSend = document.getElementById('btnSend')
      let inpMsg = document.getElementById('inpMsg')
      let ulMsgList = document.getElementById('ulMsgList')

      btnSend.onclick = function () {
         socket.emit('msg_send', {
            user: currentuser.username,
            msg: inpMsg.value
         })
         inpMsg.value = ''
         // currentuser.username = ''
      }

      socket.on('msg_rcvd', (data) => {

         let liNewMsg = document.createElement('li')
         liNewMsg.setAttribute("class", "list-group-item");
         liNewMsg.innerText = data.user + " :  " + data.msg
         ulMsgList.appendChild(liNewMsg)
      })


   }
)


