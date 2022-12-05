const bar = () => {
     let navigation = document.getElementById('link')

     if (navigation.style.display === 'block') {
          navigation.style.display = 'none'
     } else {
          navigation.style.display = 'block'
     }
}