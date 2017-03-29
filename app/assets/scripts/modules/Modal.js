import $ from 'jquery';

class Modal{

  constructor(){
    this.openModalButton = $(".open-modal");
    this.closeModalButton = $(".modal__close");
    this.modal = $(".modal");

    this.events();
  }

  events(){
    this.openModalButton.click(this.openModal.bind(this));
    this.closeModalButton.click(this.closeModal.bind(this));
  }

  openModal(){
    this.modal.addClass("modal--is-visible");
  }

  closeModal(){
    this.modal.removeClass("modal--is-visible");
  }

}

export default Modal;
