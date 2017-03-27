import $ from 'jquery';

class RevealOnScroll{
  constuctor (){
    console.log('fucking hell');
    this.itemsToReveal = $(".feature-item");
    this.hideInitially();
  }

  hideInitially(){
    this.itemsToReveal.addClass("reveal-item");
    alert('working');
  }


}

export default RevealOnScroll;
