
Vue.component('card',{
    props:['h5','p','text'],
    template:`<div class="card" style="width: 18rem;">
  <img class="card-img-top" src=".../100px180/" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{h5}}</h5>
    <p class="card-text">{{p}}</p>
    <a href="#" class="btn btn-primary">{{text}}</a>
  </div>
  <slot></slot>
</div>`

})

new Vue({
    el:"#app",
})

