export default function initModalCadastrar(){
    let btnOpenModalCadastrar = document.querySelector('[data-modal="cadastrar"]')
    let modalCadastrar = document.querySelector('[data-modal="modal-cadastrar"]')
    let btnCloseModalCadastrar = document.querySelector('.modal-cadastrar__btn-close')
    function openModalCadastrar(){
        modalCadastrar.classList.add('active')
    }
    function closeModalCadastrar(){
        modalCadastrar.classList.remove('active')
    }
    btnOpenModalCadastrar.addEventListener('click', openModalCadastrar)
    btnCloseModalCadastrar.addEventListener('click', closeModalCadastrar)
}
