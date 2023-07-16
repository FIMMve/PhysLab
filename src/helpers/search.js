export default function(search, cards){
  search.addEventListener('keyup', () => {
    const searchValue = search.value.toUpperCase()
    cards.forEach((card, index) => {
      const cardValue = card.innerText.toUpperCase()

      if(cardValue.indexOf(searchValue) < 0){
        card.classList.add('vanish')
        setTimeout(() => {
          card.classList.add('hidden')
        }, 300)
      }else{
        card.classList.remove('hidden')
        setTimeout(() => {
          card.classList.remove('vanish')

        }, 100)
      }
    })
  })
}