const toggleBtn = document.querySelector('.toggle')
const activeClass = document.querySelector('.the-active')

toggleBtn.addEventListener('click', function() {
	activeClass.classList.toggle('active')
})