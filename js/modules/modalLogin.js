export default function initModal(){
    let btnOpenModal = document.querySelector('[data-modal="login"]')
    let btnCloseModal = document.querySelector('.modal-btn-close')
    let modal = document.querySelector('[data-modal="modal-login"]')
    let btnSemConta = document.querySelector('[data-modal="btnsemconta"]')
    let modalCadastrar = document.querySelector('[data-modal="modal-cadastrar"]')

    function openModal(){
        modal.classList.add('active')
    }
    function closeModal(){
        modal.classList.remove('active')
    }

    btnOpenModal.addEventListener('click', openModal)
    btnCloseModal.addEventListener('click', closeModal)
    btnSemConta.addEventListener('click', (e)=>{
        e.preventDefault();
        closeModal();
        modalCadastrar.classList.add('active');
    })
}