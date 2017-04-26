var MY_ADDRESS_dois = '0x1DdaBb3f9D1403BFAFb955874c7b3B998459b9F4'
      var tipButton_dois = document.querySelector('.tip-button_dois')
      tipButton_dois.addEventListener('click', function() {
        if (typeof web3 === 'undefined') {
          return renderMessage_dois('<div>Você precisa instalar o <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank" id="tlink_dois">MetaMask</a> para usar esse recurso.  <a href="https://metamask.io" target="_blank" id="tlink_dois">https://metamask.io</a></div>')
        }
        var user_address_dois = web3.eth.accounts[0]
        web3.eth.sendTransaction({
          to: MY_ADDRESS_dois,
          from: user_address_dois,
          value: web3.toWei('0.62', 'ether')
        }, function (err, transactionHash) {
        if (err) return renderMessage_dois('Transação Rejeitada')
          // If you get a transactionHash, you can assume it was sent,
          // or if you want to guarantee it was received, you can poll
          // for that transaction to be mined first.
          renderMessage_dois('Transação Aceita')
        })
      })
      function renderMessage (message_dois) {
        var dois_messageEl = document.querySelector('.message_dois')
        dois_messageEl.innerHTML = message_dois
      }
